import React from 'react';
import Grid from '../page/components/Grid';
import {Card, CardImg, Col, Row, Button} from 'reactstrap'
import Collapsible from '../page/components/Collapsible';
import Rating from "../page/components/Rating";
import perusahaan from '../mock/search_perusahaan';


export default class GridTest extends React.Component {

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

        const sectionClass = 'font-lato-14 border-bottom border-dark'
        return (
            <React.Fragment>
                <Row className="m-2">
                    <Col sm={2}>
                        <Card className="p-2">
                            <Collapsible section="Kategori" className="mb-2" sectionClass={sectionClass}>
                                <div className="font-lato-12">Kontraktor</div>
                                <div className="font-lato-12">SubKontraktor</div>
                                <div className="font-lato-12">Tenaga Ahli</div>
                            </Collapsible>

                            <Collapsible section="Lokasi" className="mb-2" sectionClass={sectionClass}>
                                <div className="font-lato-12">Tangerang</div>
                                <div className="font-lato-12">Jakarta</div>
                                <div className="font-lato-12">Serang</div>
                                <div className="font-lato-12">Bali</div>
                            </Collapsible>

                            <Collapsible section="Rating" className="mb-2" sectionClass={sectionClass}>
                                <div className="cursor-pointer"><Rating maxRating={5} rating={5}/></div>
                                <div className="cursor-pointer"><Rating maxRating={5} rating={4}/></div>
                                <div className="cursor-pointer"><Rating maxRating={5} rating={3}/></div>
                                <div className="cursor-pointer"><Rating maxRating={5} rating={2}/></div>
                                <div className="cursor-pointer"><Rating maxRating={5} rating={1}/></div>
                                <div className="cursor-pointer"><Rating maxRating={5} rating={0}/></div>
                            </Collapsible>

                            <Row>
                                <Col><Button className="fa-pull-left btn-success rounded-pill" size="sm">Reset</Button></Col>
                                <Col></Col>
                            </Row>

                        </Card>
                    </Col>
                    <Col sm={10}>
                        <Grid itemPerRow={4} data={perusahaan(31)} renderCallback={this.gridRender}/>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}
