import React from 'react';
import {Card, CardBody, CardImg, Col, Media, Row, Table} from 'reactstrap';
import Grid from "../components/Grid";
import react_logo from "../../assets/react-logo.svg";

let _perusahaan = '-';
let _logo = undefined;

function renderItem(item, i) {
    const {posisi, deskripsi, berakhir_pada} = item
    const companyLogo = typeof(_logo) === 'undefined' || _logo === null ? react_logo : _logo;
    return (
        <Row className="d-flex justify-content-between border mb-2" key={'lowongan-' + i}>
            <Col sm={4}>
                <Media className="card-img" src={companyLogo} width={200} height={200}/>
            </Col>
            <Col sm={8} className="pt-4">
                <div className="d-flex justify-content-between">
                    <p className="font-lato-14 font-green">Posisi: </p>
                    <p className="font-lato-14">{posisi}</p>
                </div>

                <div className="d-flex justify-content-between">
                    <p className="font-lato-14 font-green">Deskripsi: </p>
                    <p className="font-lato-14">{deskripsi}</p>
                </div>

                <div className="d-flex justify-content-between">
                    <p className="font-lato-14 font-green">Berakhir Pada: </p>
                    <p className="font-lato-14">{berakhir_pada}</p>
                </div>
            </Col>
        </Row>
    )
}

export default function (props) {
    const {data, perusahaan, logo} = props;
    _logo = logo;
    _perusahaan = perusahaan;
    if (typeof(data) === 'undefined') return null;
    return (
        <React.Fragment>
            {data.map(renderItem)}
        </React.Fragment>
    )
}
