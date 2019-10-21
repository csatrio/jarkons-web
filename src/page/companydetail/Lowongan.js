import React from 'react';
import {Col, Media, Row} from 'reactstrap';
import react_logo from "../../assets/react-logo.svg";

let _perusahaan = '-';
let _logo = undefined;

function renderItem(item, i) {
    const {nama_pekerjaan, desc_pekerjaan, end_date} = item
    const companyLogo = typeof(_logo) === 'undefined' || _logo === null ? react_logo : _logo;
    return (
        <Row className="d-flex justify-content-between border mb-2" key={'lowongan-' + i}>
            <Col sm={4}>
                <Media className="card-img" src={companyLogo} width={200} height={200}/>
            </Col>
            <Col sm={8} className="pt-4">
                <div className="d-flex justify-content-between">
                    <p className="font-lato-14 font-green">Posisi: </p>
                    <p className="font-lato-14">{nama_pekerjaan}</p>
                </div>

                <div className="d-flex justify-content-between">
                    <p className="font-lato-14 font-green">Deskripsi: </p>
                    <p className="font-lato-14">{desc_pekerjaan}</p>
                </div>

                <div className="d-flex justify-content-between">
                    <p className="font-lato-14 font-green">Berakhir Pada: </p>
                    <p className="font-lato-14">{end_date.toLocaleString()}</p>
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
