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

const items = [
    {
        src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        altText: 'altText Slide 1',
        caption: 'Caption Slide 1'
    },
    {
        src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        altText: 'altText Slide 2',
        caption: 'Caption Slide 2'
    },
    {
        src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        altText: 'altText Slide 3',
        caption: 'Caption Slide 3'
    }
]

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
                            <div className="main-card-container">
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
                                            <Col className="main-cards">
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
                <div className="blockquote-footer text-center py-3">© 2019 PT Jarkons Indonesia</div>
            </React.Fragment>
        );
    }
}

