import React from 'react';
import Grid from '../page/components/Grid';
import {Card, CardImg, Row, Col} from 'reactstrap'
import SearchFilter from '../page/components/SearchFilter';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from '@fortawesome/free-solid-svg-icons';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const _item = {
    imageUrl: 'https://mmgmemphis.com/wp-content/uploads/2018/08/MemphisIR-LOGO-tagline-black-font-200x141-300x200.png',
    productName: 'Kolor',
    companyName: 'PT Kolor Jaya Perkasa',
    rating: 5,
}

export default class GridTest extends React.Component {

    gridRender = (item) => {
        const roundedRating = Math.round(item.rating);
        return (
            <React.Fragment>
                <Card className="cards-product mb-2 text-center mt-0">
                    <CardImg src={item.imageUrl}/>
                </Card>
                <div className="ml-1 mb-5">
                    <div className="font-lato-14 font-green">{item.productName}</div>
                    <div className="font-lato-12">{item.companyName}</div>
                    <div>
                        {Array.apply(null, {length: 5}).map((e, index) => {
                            const starColor = index < roundedRating ? '#ffd500' : '#ebe9e4';
                            return <FontAwesomeIcon icon={faStar} color={starColor}/>
                        })}
                        <div className="d-inline-flex ml-2 font-lato-12">{item.rating}</div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    render() {
        const data = [];
        for (let i = 1; i <= 31; i++) {
            const itemCopy = Object.assign({}, _item);
            data.push(itemCopy);
            itemCopy.rating = Number(`${getRandomInt(1, 4)}.${getRandomInt(1,9)}`)
        }
        return (
            <React.Fragment>
                <Row className="m-2">
                    <Col sm={2}>
                        <SearchFilter/>
                    </Col>
                    <Col sm={10}>
                        <Grid itemPerRow={4} data={data} renderCallback={this.gridRender}/>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}
