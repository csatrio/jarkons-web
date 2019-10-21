import React from 'react';
import {Col, Media, Row} from 'reactstrap';
import react_logo from "../../assets/react-logo.svg";
import axios from "axios";
import settings from "../../store/Settings";

let _perusahaan = '-';
let _logo = undefined;

export default class PengadaanList extends React.Component {
    state = {
        pengadaan: []
    }

    componentDidMount() {
        axios.get(`${settings.apiUrl}/user_info/pengadaan/`).then(r => this.setState({pengadaan: r.data.rows}))
    }


    renderItem = (item, i) => {
        const {judul, nilai_hps_pagu, lokasi_pengumuman, batas_akhir_penawaran} = item
        const companyLogo = typeof(_logo) === 'undefined' || _logo === null ? react_logo : _logo;
        return (
            <Row className="d-flex justify-content-between border p-5 mb-3" key={'lowongan-' + i}>
                <Col sm={4}>
                    <Media className="card-img border border-dark" src={companyLogo} width={200} height={200}/>
                </Col>
                <Col sm={4} className="pt-4">
                    <div className="font-green font-lato-14 font-weight-bold">{judul}</div>
                    <div className="font-lato-14">{nilai_hps_pagu}</div>
                    <div className="font-lato-14">{lokasi_pengumuman}</div>
                </Col>
                <Col sm={4} className="pt-4">
                    <div className="font-lato-14 font-weight-bold">Batas Akhir Penawaran</div>
                    <div className="font-lato-14 font-weight-bold">{batas_akhir_penawaran}</div>
                </Col>
            </Row>
        )
    }

    render() {
        return (
            <div className="container">
                {this.state.pengadaan.map(this.renderItem)}
            </div>
        )
    }
}
