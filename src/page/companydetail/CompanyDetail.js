import React from 'react';
import {Row, Col, Media, Button, Input, TabPane, TabContent, Table} from 'reactstrap';
import reactImage from '../../assets/react-logo.svg';
import {coalesce, notNull, notUndefined} from "../../util/index";
import axios from 'axios';
import settings from '../../store/Settings';
import Rating from "../components/Rating";
import gold from '../../assets/search/gold-medal.svg'
import silver from '../../assets/search/silver-medal.svg';
import platinum from '../../assets/search/platinum-reward.svg';
import company from "../../assets/search/company.svg";
import product from "../../assets/search/product.svg";
import TextParser from "../components/TextParser";
import Grid from "../components/Grid";
import Paginations from "../components/Paginations";
import Pengalaman from './Pengalaman';
import Produk from "./Produk";
import KantorCabang from "./KantorCabang";
import PersonalKontak from "./PersonalKontak";
import Lowongan from "./Lowongan";

const tabStyle = {
    display: 'flex',
    alignItems: 'flex-end'
}

export default class CompanyDetail extends React.Component {

    state = {
        activeTab: 'tabAbout',
        detail: {},
    }

    tabDivClass = 'd-inline-flex cursor-pointer font-lato-14 font-weight-bold p-1';
    tabClass = (tab) => this.state.activeTab === tab ? this.tabDivClass + ' border-bottom-green' : this.tabDivClass;


    TabToggler = (props) => {
        const {tabName, label, className} = props;
        return (
            <div className={this.tabClass(tabName)} onClick={() => this.setState({activeTab: tabName})}>
                <div style={tabStyle} className={className}>{label}</div>
            </div>
        )
    }


    componentDidMount() {
        const {id, slug} = this.props.match.params;
        const _id = notUndefined(id) ? id : 5
        axios.get(`${settings.apiUrl}/user_info/userinfo/?id=${_id}`).then(r => {
            this.setState({detail: r.data.rows[0]})
        })
    }

    render() {
        const {activeTab, detail} = this.state;

        return (
            <React.Fragment>
                <Row className="box-shadow p-5 m-5">
                    <Col sm={7} className="border-right-green">
                        <Row>
                            <Col sm={4}>
                                <Media src={reactImage} width={160} height={90}/>
                            </Col>
                            <Col sm={8}>
                                <div className="font-product-detail">{detail.nama_perusahaan}</div>
                                <div
                                    className="font-lato-14 font-weight-bold text-break">{detail.alamat_perusahaan}</div>
                                <div className="font-lato-14 text-break">{coalesce(detail.website, '-')}</div>
                                <div className="font-lato-14 text-break">{coalesce(detail.email, '-')}</div>
                                <div className="font-lato-14 text-break">{coalesce(detail.no_telepon, '-')}</div>
                            </Col>
                        </Row>
                    </Col>

                    <Col sm={1}></Col>

                    <Col sm={4}>
                        <Row>
                            <Col sm={8}>
                                <div className="font-product-detail text-left mb-1">Rating</div>
                                <Rating className="mx-auto" maxRating={5} rating={detail.rating}/>
                                <div className="font-lato-14 ml-2 d-inline-flex">{detail.rating}/5</div>
                            </Col>
                            <Col sm={4}>
                                <Media className="mx-auto" src={platinum} width={79} height={72}/>
                                <div className="text-center font-lato-14">Platinum Member</div>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className="pl-5 pr-5">
                    <Col className="mr-4 border-bottom border-dark">
                        <this.TabToggler tabName={'tabAbout'} label={'Tentang Perusahaan'} className="mr-5"/>
                        <this.TabToggler tabName={'tabPengalaman'} label={'Pengalaman'} className="ml-5 mr-5"/>
                        <this.TabToggler tabName={'tabProduk'} label={'Produk Perusahaan'} className="ml-5 mr-5"/>
                        <this.TabToggler tabName={'tabPersonalKontak'} label={'Personal Kontak'}
                                         className="ml-5 mr-5"/>
                        <this.TabToggler tabName={'tabKantorCabang'} label={'Kantor Cabang'}
                                         className="ml-5 mr-5"/>
                        <this.TabToggler tabName={'tabLowongan'} label={'Lowongan'} className="ml-5 mr-5"/>
                    </Col>
                </Row>

                <Row>
                    <TabContent activeTab={activeTab} className="w-100">
                        <TabPane tabId="tabAbout" className="pt-4 pl-5 pr-5">
                            <TextParser text={detail.tentang_perusahaan} className="font-lato-14"/>
                        </TabPane>

                        <TabPane tabId="tabPengalaman" className="pt-4 pl-5 pr-5">
                            <Pengalaman data={detail.pengalaman_kerja}/>
                        </TabPane>

                        <TabPane tabId="tabProduk" className="pt-4 pl-5 pr-5">
                            <Produk data={detail.product_list} perusahaan={detail.nama_perusahaan}/>
                        </TabPane>

                        <TabPane tabId="tabPersonalKontak" className="pt-4 pl-5 pr-5">
                            <PersonalKontak data={detail.personal_kontak}/>
                        </TabPane>

                        <TabPane tabId="tabKantorCabang" className="pt-4 pl-5 pr-5">
                            <KantorCabang data={detail.kantor_cabang}/>
                        </TabPane>

                        <TabPane tabId="tabLowongan" className="pt-4 pl-5 pr-5">
                            <Lowongan data={detail.lowongan_list} logo={detail.logo_perusahaan}/>
                        </TabPane>
                    </TabContent>


                </Row>
            </React.Fragment>
        )
    }
}
