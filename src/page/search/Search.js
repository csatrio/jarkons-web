import React from 'react';
import Grid from '../../page/components/Grid';
import {Card, CardImg, Col, Row, Button, TabContent, TabPane, Nav, NavItem, NavLink, Media} from 'reactstrap'
import Collapsible from '../components/Collapsible';
import Rating from "../../page/components/Rating";
import company from '../../assets/search/company.svg';
import product from '../../assets/search/product.svg';
import perusahaan from '../../mock/search_perusahaan';
import Paginations from '../components/Paginations';

const tabStyle = {
    display: 'flex',
    alignItems: 'flex-end'
}

export default class Search extends React.Component {

    state = {
        activeTab: 'tabPerusahaan',
        dataPerusahaan: [],
        dataProduk: [],
    }

    tabDivClass = 'd-inline-flex cursor-pointer font-lato-14 font-weight-bold p-1'

    isActive = (tab) => this.state.activeTab === tab
    toggle = (tab) => this.setState({activeTab: tab})
    tabClass = (tab) => this.isActive(tab) ? this.tabDivClass + ' border-bottom-green' : this.tabDivClass

    constructor(props) {
        super(props);
        this.kategori = React.createRef();
        this.lokasi = React.createRef();
        this.rating = React.createRef();
    }

    componentDidMount() {
        this.setState({
            dataPerusahaan: perusahaan(16),
            dataProduk: perusahaan(10)
        })
    }

    resetFilter = () => {
        this.kategori.current.reset()
        this.lokasi.current.reset()
        this.rating.current.reset()
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

    FilterCard = () => {
        const sectionClass = 'font-lato-14 border-bottom border-dark'
        const filterItemClass = 'font-lato-12 cursor-pointer'
        return (
            <Card className="p-2">
                <Collapsible section="Kategori" className="mb-2" sectionClass={sectionClass}
                             ref={this.kategori}>
                    <div className={filterItemClass}>Kontraktor</div>
                    <div className={filterItemClass}>SubKontraktor</div>
                    <div className={filterItemClass}>Tenaga Ahli</div>
                </Collapsible>

                <Collapsible section="Lokasi" className="mb-2" sectionClass={sectionClass}
                             ref={this.lokasi}>
                    <div className={filterItemClass}>Tangerang</div>
                    <div className={filterItemClass}>Jakarta</div>
                    <div className={filterItemClass}>Serang</div>
                    <div className={filterItemClass}>Bali</div>
                </Collapsible>

                <Collapsible section="Rating" className="mb-2" sectionClass={sectionClass}
                             ref={this.rating} activeClass="border border-success">
                    {Array.apply(null, {length: 6}).map((e, idx) =>
                        <div className={filterItemClass} key={'rt-' + idx}><Rating maxRating={5} rating={idx}/></div>
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

    renderPerusahaan = (item) => {
        return (
            <React.Fragment>
                <Card className="cards-product mb-2 text-center mt-0">
                    <CardImg src={item.imageUrl}/>
                </Card>
                <div className="ml-1 mb-5">
                    <div className="font-lato-14 font-green">{item.productName}</div>
                    <div className="font-lato-12">{item.companyName}</div>
                    <div>
                        <Rating maxRating={5} rating={item.rating}/>
                        <div className="d-inline-flex ml-2 font-lato-12">{item.rating}</div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    renderProduk = (item) => {
        return (
            <React.Fragment>
                <Card className="cards-product mb-2 text-center mt-0">
                    <CardImg src={item.imageUrl}/>
                </Card>
                <div className="ml-1 mb-5">
                    <div className="font-lato-14 font-green">{item.productName}</div>
                    <div className="font-lato-12">{item.companyName}</div>
                </div>
            </React.Fragment>
        )
    }

    render() {
        const {dataPerusahaan, dataProduk} = this.state
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
                        <this.FilterCard/>
                    </Col>
                    <Col sm={10}>

                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="tabPerusahaan" className="pt-4 pr-2">
                                <Grid itemPerRow={4} data={dataPerusahaan} renderCallback={this.renderPerusahaan}/>
                                <Paginations callback={(e) => alert(`clicked ${e}`)} last_page={10}
                                             className="fa-pull-right"/>
                            </TabPane>

                            <TabPane tabId="tabProduk" className="pt-4 pr-2">
                                <Grid itemPerRow={4} data={dataProduk} renderCallback={this.renderProduk}/>
                                <Paginations callback={(e) => alert(`clicked ${e}`)} last_page={2}
                                             className="fa-pull-right"/>
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}
