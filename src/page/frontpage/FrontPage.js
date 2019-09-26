import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer'
import {Card, CardFooter, CardImg, Col, Container, Row} from 'reactstrap'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import testimonial from '../../mock/testimonial';
import pengadaan from '../../mock/pengadaan';
import kontraktor from '../../mock/kontraktor';
import developer from '../../mock/developer';
import alatberat from '../../mock/alatberat';
import {url_event} from '../../mock/event';
import news, {headline} from "../../mock/news";
import {mainCarousel} from "../../mock/maincarousel";
import {kategori} from "../../mock/kategori";
import {LihatSemua} from "./LihatSemua";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {max: 4000, min: 3000},
        items: 5,
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 3,
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2,
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1,
    },
};

export default class FrontPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container className="text-right">
                    <a href="#" className="font-top mr-3">Keuntungan Iklan & Membership</a>
                    <a href="#" className="font-top mr-3">Lowongan Kerja</a>
                    <a href="#" className="font-top mr-3">Pusat Bantuan</a>
                    <a href="#" className="font-top">Download App</a>
                </Container>

                <NavigationBar/>
                <Container className="container-main">

                    <Row>
                        <Col>
                            <Carousel className="p-5" responsive={responsive}
                                      swipeable={true}
                                      draggable={false}
                                      showDots={true}
                                      containerClass="carousel-container"
                                      itemClass="carousel-cards"
                                      removeArrowOnDeviceType={["tablet", "mobile"]}
                            >
                                {mainCarousel.map((item, index) => (
                                    <React.Fragment key={'mc-' + index}>
                                        <div className="cards-main-carousel mr-5">
                                            <img className="image-cards-main-carousel" src={item.imageUrl}/>
                                        </div>
                                    </React.Fragment>
                                ))}
                            </Carousel>
                        </Col>
                    </Row>
                    <LihatSemua type="row"/>


                    <Row className="mb-3">
                        <Col>
                            <div className="cards-kategori">
                                <div className="font-section-heading text-center">Kategori Pilihan</div>
                                <div className="font-lagi-nyari ml-4">Hai, lagi mau nyari apa nih?</div>

                                <Carousel className="p-5" responsive={responsive}
                                          swipeable={true}
                                          draggable={false}
                                          showDots={true}
                                          containerClass="carousel-container"
                                          itemClass="main-cards"
                                          removeArrowOnDeviceType={["tablet", "mobile"]}
                                >
                                    {kategori.map((item, index) => (
                                        <React.Fragment key={'cc-' + index}>
                                            <Col className="cards-main text-center">
                                                <img className="image-main-cards mt-3" src={item.imageUrl}/>
                                                <p className="text-center">{item.title}</p>
                                            </Col>
                                        </React.Fragment>
                                    ))}
                                </Carousel>
                            </div>
                        </Col>
                    </Row>
                    <LihatSemua type="row"/>


                    <p className="font-section-heading text-center">Pengadaan</p>
                    <Row className="mb-3">
                        {pengadaan.map((item, index) => (
                            <React.Fragment key={'pe-' + index}>
                                <Col className="cards-pengadaan mr-4 p-4 mt-1">
                                    <p className="font-green font-weight-bold text-truncate">{item.title}</p>
                                    <p>{item.description}</p>
                                </Col>
                            </React.Fragment>
                        ))}
                    </Row>
                    <LihatSemua type="row"/>


                    <Row className="mb-5">
                        <Col sm={7}>
                            <p className="font-section-heading">Kontraktor</p>
                            <Row>
                                {kontraktor.map((item, index) => (
                                    <Col key={'ko-' + index}>
                                        <div className="cards-179 mt-1">
                                            <img className="image-179" src={item.imageUrl}/>
                                        </div>
                                        <div className="footer-cards-179 text-center">{item.title}</div>
                                    </Col>
                                ))}
                            </Row>
                            <LihatSemua/>
                        </Col>

                        <Col sm={5}>
                            <p className="font-section-heading">Event</p>
                            <Row className="text-right">
                                <img className="image-event" src={url_event}/>
                            </Row>
                            <LihatSemua/>
                        </Col>
                    </Row>


                    <Row className="mb-5"></Row>
                    <Row className="mb-5">
                        <Col sm={7}>
                            <p className="font-section-heading">Developer</p>
                            <Row className="mb-3">
                                {developer.map((item, index) => (
                                    <Col key={'de-' + index}>
                                        <div className="cards-179 mt-1">
                                            <img className="image-179" src={item.imageUrl}/>
                                        </div>
                                        <div className="footer-cards-179 text-center">{item.title}</div>
                                    </Col>
                                ))}
                                <Col>&nbsp;</Col>
                            </Row>
                            <LihatSemua/>
                            <p className="font-section-heading">Jual/Sewa Alat Berat</p>
                            <Row>
                                {alatberat.map((item, index) => (
                                    <Col key={'ab-' + index}>
                                        <div className="cards-179 mt-1">
                                            <img className="image-179" src={item.imageUrl}/>
                                        </div>
                                        <div className="footer-cards-179 text-center">{item.title}</div>
                                    </Col>
                                ))}
                            </Row>
                            <Col>&nbsp;</Col>
                            <LihatSemua/>
                        </Col>

                        <Col sm={5}>
                            <p className="font-section-heading">News</p>
                            <Row className="text-right">
                                <Row>
                                    <Col>
                                        <div className="cards-news mt-1">
                                            <img className="image-card-news" src={headline.imageUrl}/>
                                        </div>
                                        <div className="footer-cards-news text-center text-truncate">{headline.title}</div>
                                    </Col>
                                </Row>
                                <Row className="cards-child-news text-center">
                                    {news.map((item, index) => (
                                        <React.Fragment key={'cn-' + index}>
                                            <Col sm={6} className="mt-2 mb-3">
                                                <Card>
                                                    <CardImg src={item.imageUrl} className="image-child-news"/>
                                                    <CardFooter
                                                        className="bg-white font-green text-truncate">{item.title}</CardFooter>
                                                </Card>
                                            </Col>
                                        </React.Fragment>
                                    ))}
                                </Row>
                            </Row>
                            <LihatSemua/>
                        </Col>
                    </Row>


                    <p className="font-section-heading text-center">Testimonial</p>
                    <Row>
                        <Col>
                            <Carousel className="pt-0 pb-5" responsive={responsive}
                                      swipeable={true}
                                      draggable={false}
                                      showDots={true}
                                      containerClass="carousel-container"
                                      itemClass="cards-testimonial mr-5 p-4"
                                      removeArrowOnDeviceType={["tablet", "mobile"]}
                            >
                                {testimonial.map((testi, index) => (
                                    <React.Fragment key={'te-' + index}>
                                        <div className="font-weight-bold mb-2">{testi.name}</div>
                                        <div className="font-green">{testi.jobTitle}</div>
                                        <div className="font-green">{testi.company}</div>
                                        <p className="text-justify mt-3">{testi.content}</p>
                                    </React.Fragment>
                                ))}
                            </Carousel>
                        </Col>
                    </Row>

                </Container>

                <Footer/>
            </React.Fragment>
        );
    }
}

