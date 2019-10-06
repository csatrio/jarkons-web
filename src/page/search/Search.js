import React from 'react';
import Grid from '../../page/components/Grid';
import {Card, CardImg, Col, Row, Button, TabContent, TabPane, Nav, NavItem, NavLink, Media} from 'reactstrap'
import FilterItems from '../../page/components/FilterItems';
import Rating from "../../page/components/Rating";
import company from '../../assets/search/company.svg';
import product from '../../assets/search/product.svg';
import perusahaan from '../../mock/search_perusahaan';

export default class Search extends React.Component {

    state = {
        activeTab: '1'
    }

    isActive = (tab) => this.state.activeTab === tab

    toggle = (tab) => this.setState({activeTab: tab})

    gridRender = (item) => {
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

    render() {
        const tabClass = "d-inline-flex cursor-pointer"
        const sectionClass = 'font-lato-14 border-bottom border-dark'
        return (
            <React.Fragment>
                <Row className="m2">
                    <Col className="ml-4 mr-4 border-bottom">
                        <div className="d-inline-flex cursor-pointer mr-2" onClick={() => this.toggle('1')}>
                            <Media className="d-inline-flex cursor-pointer" width={33} height={33} src={company}
                                   onClick={() => this.toggle('1')}/>
                        </div>
                        <div className="d-inline-flex font-weight-bold font-lato-14 mr-3 cursor-pointer"
                             onClick={() => this.toggle('2')}>Perusahaan
                        </div>
                        <div className="d-inline-flex cursor-pointer" onClick={() => this.toggle('2')}>
                            <Media className="d-inline-flex" width={33} height={33} src={product}/>
                        </div>
                        <div className="d-inline-flex font-weight-bold font-lato-14 cursor-pointer font-green"
                             onClick={() => this.toggle('2')}>Produk
                        </div>
                    </Col>
                </Row>

                <Row className="m-2">
                    <Col sm={2}>
                        <Card className="p-2">
                            <FilterItems section="Kategori" className="mb-2" sectionClass={sectionClass}>
                                <div className="font-lato-12">Kontraktor</div>
                                <div className="font-lato-12">SubKontraktor</div>
                                <div className="font-lato-12">Tenaga Ahli</div>
                            </FilterItems>

                            <FilterItems section="Lokasi" className="mb-2" sectionClass={sectionClass}>
                                <div className="font-lato-12">Tangerang</div>
                                <div className="font-lato-12">Jakarta</div>
                                <div className="font-lato-12">Serang</div>
                                <div className="font-lato-12">Bali</div>
                            </FilterItems>

                            <FilterItems section="Rating" className="mb-2" sectionClass={sectionClass}>
                                <div className="cursor-pointer"><Rating maxRating={5} rating={5}/></div>
                                <div className="cursor-pointer"><Rating maxRating={5} rating={4}/></div>
                                <div className="cursor-pointer"><Rating maxRating={5} rating={3}/></div>
                                <div className="cursor-pointer"><Rating maxRating={5} rating={2}/></div>
                                <div className="cursor-pointer"><Rating maxRating={5} rating={1}/></div>
                                <div className="cursor-pointer"><Rating maxRating={5} rating={0}/></div>
                            </FilterItems>

                            <Row>
                                <Col><Button className="fa-pull-left btn-success rounded-pill" size="sm">Reset</Button></Col>
                                <Col></Col>
                            </Row>

                        </Card>
                    </Col>
                    <Col sm={10}>


                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId='1'>
                                <Grid itemPerRow={4} data={perusahaan(31)} renderCallback={this.gridRender}/>
                            </TabPane>

                            <TabPane tabId='2'>
                                <Grid itemPerRow={4} data={perusahaan(8)} renderCallback={this.gridRender}/>
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}
