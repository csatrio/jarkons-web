import React from 'react';
import Grid from '../../page/components/Grid';
import {Card, CardImg, Col, Row, Button, TabContent, TabPane, Media} from 'reactstrap'
import Collapsible from '../components/Collapsible';
import Rating from "../../page/components/Rating";
import company from '../../assets/search/company.svg';
import product from '../../assets/search/product.svg';
import Paginations from '../components/Paginations';
import {inject, observer} from "mobx-react";
import {storeKeys} from "../../store";
import react_logo from '../../assets/react-logo.svg';
import gold from '../../assets/search/gold-medal.svg';
import silver from '../../assets/search/silver-medal.svg';
import platinum from '../../assets/search/platinum-reward.svg';
import {coalesce} from "../../util";

const tabStyle = {
    display: 'flex',
    alignItems: 'flex-end'
}

@inject(...storeKeys)
@observer
class FilterCard extends React.Component {

    constructor(props) {
        super(props);
        this.kategori = React.createRef();
        this.lokasi = React.createRef();
        this.rating = React.createRef();
        props.SearchStore.getFilters();
    }

    resetFilter = () => {
        this.kategori.current.reset()
        this.lokasi.current.reset()
        this.rating.current.reset()
        this.props.SearchStore.resetFilter();
    }

    render() {
        const {SearchStore} = this.props;
        const sectionClass = 'font-lato-14 border-bottom border-dark'
        const filterItemClass = 'font-lato-12 cursor-pointer'
        return (
            <Card className="p-2">
                <Collapsible section="Kategori" className="mb-2" sectionClass={sectionClass}
                             ref={this.kategori}>
                    {SearchStore.filterKategori.map((item, i) => {
                        return <div key={'fk-' + i}
                                    className={filterItemClass}
                                    onClick={() => SearchStore.setValue(item.id, 'kategori')}>{item.text}</div>
                    })}
                </Collapsible>

                <Collapsible section="Lokasi" className="mb-2" sectionClass={sectionClass}
                             ref={this.lokasi}>
                    {SearchStore.filterLokasi.map((item, i) => {
                        return <div key={'fl-' + i}
                                    className={filterItemClass}
                                    onClick={() => SearchStore.setValue(item.id, 'lokasi')}>{item.text}</div>
                    })}
                </Collapsible>

                <Collapsible section="Rating" className="mb-2" sectionClass={sectionClass}
                             ref={this.rating} activeClass="border border-success">
                    {Array.apply(null, {length: 6}).map((e, idx) =>
                        <div className={filterItemClass}
                             key={'rt-' + idx}
                             onClick={() => alert('hai')}
                             onClick={() => SearchStore.setValue(idx, 'rating')}><Rating maxRating={5} rating={idx}/>
                        </div>
                    )}
                </Collapsible>

                <Row>
                    <Col><Button className="fa-pull-left btn-success rounded-pill"
                                 size="sm"
                                 onClick={this.resetFilter}>Reset</Button></Col>
                    <Col></Col>
                </Row>
            </Card>
        )
    }
}

export default class Search extends React.Component {
    tabDivClass = 'd-inline-flex cursor-pointer font-lato-14 font-weight-bold p-1';
    tabClass = (tab) => this.props.SearchStore.activeTab === tab ? this.tabDivClass + ' border-bottom-green' : this.tabDivClass;

    toggle = (tab) => {
        const {setValue, doSearch} = this.props.SearchStore
        setValue(tab, 'activeTab');
        doSearch();
    }

    constructor(props) {
        super(props);
        props.SearchStore.getPerusahaan();
    }

    PageTab = () => (
        <React.Fragment>
            <Row className="m2">
                <Col className="ml-4 mr-4">

                    <div className={this.tabClass('tabPerusahaan')} onClick={() => this.toggle('tabPerusahaan')}>
                        <Media className="mr-1" width={33} height={33} src={company}/>
                        <div style={tabStyle} className="mr-2">Perusahaan</div>
                    </div>

                    <div className={this.tabClass('tabProduk')} onClick={() => this.toggle('tabProduk')}>
                        <Media className="mr-1" width={33} height={33} src={product}/>
                        <div style={tabStyle}>Produk</div>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    )


    renderPerusahaan = (item) => {
        const {nama_perusahaan, alamat_perusahaan, logo_perusahaan, gold_member, platinum_member, id} = item
        const imgSrc = logo_perusahaan === null ? react_logo : logo_perusahaan

        let imageMember = silver;
        if(platinum_member){
            imageMember = platinum;
        } else if (gold_member) {
            imageMember = gold;
        }

        return (
            <React.Fragment>
                <Card className="cards-product mb-2 text-center mt-0">
                    <CardImg src={imgSrc}
                             onClick={()=>this.props.history.push(`/company-detail/${nama_perusahaan.replaceAll(' ', '-').toLowerCase()}/${id}`)}
                    />
                </Card>
                <div className="row ml-1 mb-5">
                    <Col sm={8}>
                        <div className="font-lato-14 font-green">{nama_perusahaan}</div>
                        <div className="font-lato-12">{alamat_perusahaan}</div>
                        <div>
                            <Rating maxRating={5} rating={1}/>
                            <div className="d-inline-flex ml-2 font-lato-12">{1}</div>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Media src={imageMember} height={33.2} width={28}/>
                    </Col>
                </div>
            </React.Fragment>
        )
    }

    renderProduk = (item) => {
        const {nama_produk, gambar, perusahaan, id} = item
        const namaPerusahaan = (perusahaan === null) ? '-' : perusahaan.nama_perusahaan
        const imgSrc = gambar === null ? react_logo : gambar
        const link = `/product-detail/${nama_produk.replaceAll(' ', '-').toLowerCase()}/${id}`
        return (
            <React.Fragment>
                <Card className="cards-product mb-2 text-center mt-0"
                onClick={()=>this.props.history.push(link)}>
                    <CardImg src={imgSrc}/>
                </Card>
                <div className="ml-1 mb-5">
                    <div className="font-lato-14 font-green">{nama_produk}</div>
                    <div className="font-lato-12">{namaPerusahaan}</div>
                </div>
            </React.Fragment>
        )
    }

    render() {
        const {perusahaanList, productList, activeTab, lastPage} = this.props.SearchStore;
        return (
            <React.Fragment>
                <div className="pl-2">
                    <this.PageTab/>
                </div>
                <Row>
                    <Col className="border-bottom mr-5 ml-5"></Col>
                </Row>
                <Row className="m-2">
                    <Col sm={2} className="mt-4 pl-4">
                        <FilterCard/>
                    </Col>
                    <Col sm={10}>

                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="tabPerusahaan" className="pt-4 pr-2">
                                <Grid itemPerRow={4} data={perusahaanList} renderCallback={this.renderPerusahaan}/>
                                <Paginations callback={(e) => alert(`clicked ${e}`)} last_page={lastPage}
                                             className="fa-pull-right"/>
                            </TabPane>

                            <TabPane tabId="tabProduk" className="pt-4 pr-2">
                                <Grid itemPerRow={4} data={productList} renderCallback={this.renderProduk}/>
                                <Paginations callback={(e) => alert(`clicked ${e}`)} last_page={lastPage}
                                             className="fa-pull-right"/>
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}
