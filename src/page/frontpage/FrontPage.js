import React from 'react';
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
import TextParser from "../components/TextParser";
import settings from '../../store/Settings';
import axios from 'axios';

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
    state = {
        pengadaan: [],
    }

    componentDidMount(){
        axios.get(`${settings.apiUrl}/user_info/pengadaan/`).then(r=>this.setState({pengadaan: r.data.rows}))
    }

    render() {
        const{pengadaan} = this.state;
        return (
            <React.Fragment>
                <Container className="container-fluid">

                    <Row className="p-0">
                        <Col className="p-0">
                            <Carousel responsive={responsive}
                                      swipeable={true}
                                      draggable={false}
                                      showDots={true}
                                      containerClass="carousel-container"
                                      itemClass="cards-main-carousel mb-4"
                                      removeArrowOnDeviceType={["tablet", "mobile"]}
                            >
                                {mainCarousel.map((item, index) => (
                                    <React.Fragment key={'mc-' + index}>
                                        <img className="image-main-carousel mr-5" src={item.imageUrl}/>
                                    </React.Fragment>
                                ))}
                            </Carousel>
                        </Col>
                    </Row>
                    <LihatSemua type="row"/>


                    <Row className="cards-kategori mb-3">
                        <Col>
                            <div className="font-section-heading text-center">Kategori Pilihan</div>
                            <div className="font-lagi-nyari ml-4">Hai, lagi mau nyari apa nih?</div>

                            <Carousel className="p-5" responsive={responsive}
                                      swipeable={true}
                                      draggable={false}
                                      showDots={true}
                                      containerClass="carousel-container"
                                      itemClass="cards-main"
                                      removeArrowOnDeviceType={["tablet", "mobile"]}
                            >
                                {kategori.map((item, index) => (
                                    <React.Fragment key={'cc-' + index}>
                                        <Col className="text-center">
                                            <img className="image-main-cards mt-3" src={item.imageUrl}/>
                                            <p className="text-center">{item.title}</p>
                                        </Col>
                                    </React.Fragment>
                                ))}
                            </Carousel>
                        </Col>
                    </Row>
                    <LihatSemua type="row"/>


                    <p className="font-section-heading text-center">Pengadaan</p>
                    <Row className="mb-3">
                        {pengadaan.slice(0,3).map((item, index) => {
                            const{judul, deskripsi_pendek, isi} = item;
                            let colClass = "cards-pengadaan p-4 mt-1";
                            if (index !== pengadaan.length - 1) colClass += " mr-4"
                            let content = deskripsi_pendek === null ? isi : deskripsi_pendek;
                            return (
                                <React.Fragment key={'pe-' + index}>
                                    <Col className={colClass}>
                                        <p className="font-green font-weight-bold">{judul}</p>
                                        <TextParser className="text-justify" text={content}/>
                                    </Col>
                                </React.Fragment>
                            )
                        })}
                    </Row>
                    <LihatSemua type="row" onClick={()=>this.props.history.push('/pengadaan-list')}/>


                    <Row className="mb-5 pl-0">
                        <Col sm={7} className="pl-0">
                            <p className="font-section-heading">Kontraktor</p>
                            <Row className="p-0">
                                {kontraktor.map((item, index) => (
                                    <Col key={'ko-' + index}>
                                        <div className="cards-179 mt-1">
                                            <img className="card-img image-179" src={item.imageUrl}/>
                                        </div>
                                        <div className="footer-cards-179 text-center">{item.title}</div>
                                    </Col>
                                ))}
                            </Row>
                            <LihatSemua onClick={()=>this.props.history.push('/search')}/>
                        </Col>

                        <Col sm={5} className="pr-0">
                            <p className="font-section-heading">Event</p>
                            <Row className="text-right pr-0">
                                <img className="card-img image-event pr-0" src={url_event}/>
                            </Row>
                            <LihatSemua/>
                        </Col>
                    </Row>

                    <Row className="mb-3"></Row>

                    <Row className="mb-5 pl-0">
                        <Col sm={7} className="pl-0">
                            <p className="font-section-heading">Developer</p>
                            <Row className="mb-3">
                                {developer.map((item, index) => (
                                    <Col key={'de-' + index}>
                                        <div className="cards-179 mt-1">
                                            <img className="card-img image-179" src={item.imageUrl}/>
                                        </div>
                                        <div className="footer-cards-179 text-center">{item.title}</div>
                                    </Col>
                                ))}
                            </Row>
                            <LihatSemua onClick={()=>this.props.history.push('/search')}/>
                            <p className="font-section-heading">Jual/Sewa Alat Berat</p>
                            <Row>
                                {alatberat.map((item, index) => (
                                    <Col key={'ab-' + index}>
                                        <div className="cards-179 mt-1">
                                            <img className="card-img image-179" src={item.imageUrl}/>
                                        </div>
                                        <div className="footer-cards-179 text-center">{item.title}</div>
                                    </Col>
                                ))}
                            </Row>
                            <LihatSemua onClick={()=>this.props.history.push('/search')}/>
                        </Col>

                        <Col sm={5} className="pr-0">
                            <p className="text-left font-section-heading pl-0 ml-0">News</p>
                            <Row className="text-right p-2 border-news">
                                <Row>
                                    <Col>
                                        <Card>
                                            <CardImg className="image-headline-news" src={headline.imageUrl}/>
                                            <CardFooter
                                                className="footer-cards-news text-center text-truncate">{headline.title}</CardFooter>
                                        </Card>
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
                            <LihatSemua className="mt-3"/>
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
            </React.Fragment>
        );
    }
}

