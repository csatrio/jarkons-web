import React from 'react';
import NavigationBar from './NavigationBar';
import Footer from './Footer'
import {UncontrolledCarousel, Container, Row, Col, Card, CardBody, CardTitle, CardText, CardImg} from 'reactstrap'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import house from '../../assets/frontpage/house.png';
import towerCrane from '../../assets/frontpage/tower-crane.png';
import demolishing from '../../assets/frontpage/demolishing.png';
import group102 from '../../assets/frontpage/Group102.png';
import wheelbarrow from '../../assets/frontpage/wheel-barrow.png';

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

const carouselItems = [
    {src: 'http://ridley-thomas.lacounty.gov/Health/wp-content/uploads/2015/11/HIE-616x230.png'},
    {src: 'http://ridley-thomas.lacounty.gov/Health/wp-content/uploads/2015/11/ThinkstockPhotos-464832284-11-1030x773-616x230.jpg'},
    {src: 'http://ridley-thomas.lacounty.gov/Health/wp-content/uploads/2015/11/HIE-616x230.png'},
    {src: 'http://ridley-thomas.lacounty.gov/Health/wp-content/uploads/2015/11/ThinkstockPhotos-464832284-11-1030x773-616x230.jpg'},
    {src: 'http://ridley-thomas.lacounty.gov/Health/wp-content/uploads/2015/11/HIE-616x230.png'},
    {src: 'http://ridley-thomas.lacounty.gov/Health/wp-content/uploads/2015/11/ThinkstockPhotos-464832284-11-1030x773-616x230.jpg'},
    {src: 'http://ridley-thomas.lacounty.gov/Health/wp-content/uploads/2015/11/HIE-616x230.png'},
    {src: 'http://ridley-thomas.lacounty.gov/Health/wp-content/uploads/2015/11/ThinkstockPhotos-464832284-11-1030x773-616x230.jpg'},
]

const cardItems = [
    {src: house, label: 'Developer'},
    {src: towerCrane, label: 'Kontraktor'},
    {src: demolishing, label: 'Jual/Sewa Alat Berat'},
    {src: group102, label: 'Konsultan'},
    {src: wheelbarrow, label: 'Leveransir'},
]

export default class FrontPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container className="top-container">
                    <a href="#" className="top-font mr-3">Keuntungan Iklan & Membership</a>
                    <a href="#" className="top-font mr-3">Lowongan Kerja</a>
                    <a href="#" className="top-font mr-3">Pusat Bantuan</a>
                    <a href="#" className="top-font">Download App</a>
                </Container>

                <NavigationBar/>
                <Container className="main-container">

                    <Row className="mb-5">
                        <Col>
                            <Carousel responsive={responsive}
                                      swipeable={true}
                                      draggable={false}
                                      showDots={true}
                                      containerClass="carousel-container"
                                      itemClass="carousel-cards"
                                      removeArrowOnDeviceType={["tablet", "mobile"]}
                            >
                                {carouselItems.map((item, index) => (
                                    <React.Fragment key={'mc-' + index}>
                                        <div className="carousel-cards mr-5">
                                            <img className="carousel-cards-image" src={item.src}/>
                                        </div>
                                    </React.Fragment>
                                ))}
                            </Carousel>
                        </Col>
                    </Row>


                    <Row>
                        <Col>
                            <div className="main-card-containe">
                                <div className="main-card-title">Kategori Pilihan</div>
                                <div className="lagi-nyari ml-4">Hai, lagi mau nyari apa nih?</div>

                                <Carousel className="p-5" responsive={responsive}
                                          swipeable={true}
                                          draggable={false}
                                          showDots={true}
                                          containerClass="carousel-container"
                                          itemClass="main-cards"
                                          removeArrowOnDeviceType={["tablet", "mobile"]}
                                >
                                    {cardItems.map((item, index) => (
                                        <React.Fragment key={'cc-' + index}>
                                            <Col className="main-cards text-center">
                                                <img className="main-cards-image" src={item.src}/>
                                                <p className="text-center">{item.label}</p>
                                            </Col>
                                        </React.Fragment>
                                    ))}
                                </Carousel>
                            </div>
                        </Col>
                    </Row>

                </Container>

                <Footer/>
            </React.Fragment>
        );
    }
}

