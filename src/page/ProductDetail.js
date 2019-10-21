import React from 'react';
import {Button, Col, Media, Row} from 'reactstrap';
import reactImage from '../assets/react-logo.svg';
import {notNull, notUndefined} from "../util";
import axios from 'axios';
import settings from '../store/Settings';
import TextParser from "./components/TextParser";

export default class ProductDetail extends React.Component {

    state = {
        productDetail: {}
    }

    componentDidMount() {
        const {id, slug} = this.props.match.params;
        axios.get(`${settings.apiUrl}/user_info/search-produk/?id=${id}`).then(r => {
            this.setState({productDetail: r.data.rows[0]})
        })
    }

    render() {
        const {nama_produk, gambar, deskripsi, perusahaan} = this.state.productDetail;
        const productImg = notNull(gambar) && notUndefined(gambar) ? gambar : reactImage;
        const companyImg = notUndefined(perusahaan) && notNull(perusahaan.logo_perusahaan) ? perusahaan.logo_perusahaan : reactImage;
        const namaPerusahaan = notUndefined(perusahaan) ? perusahaan.nama_perusahaan : "generic";
        const idPerusahaan = notNull(perusahaan) && notUndefined(perusahaan) ? perusahaan.id : 5;
        return (
            <div className="box-shadow p-5 m-5">
                <Row>
                    <Col className="border-right-green">
                        <Row>
                            <Col sm={4} className="flex-row">
                                <div className="font-product-detail mb-3">{nama_produk}</div>
                                <Media className="card-img border border-dark rounded" src={productImg} width={226}
                                       height={141}/>
                            </Col>
                            <Col sm={1}></Col>
                            <Col sm={7}>
                                <TextParser className="font-lato-14 text-break"
                                            style={{paddingTop: 35}} text={deskripsi}/>
                            </Col>
                        </Row>
                    </Col>

                    <Col className="text-center">
                        <div className="text-center font-product-detail mx-auto mb-4">{namaPerusahaan}</div>
                        <Media className="border border-dark rounded mx-auto mb-4" src={companyImg} width={150}
                               height={112}/>
                        <Button className="btn-success rounded-sm" onClick={()=>this.props.history.push(`/company-detail/${namaPerusahaan.replaceAll(' ', '-').toLowerCase()}/${idPerusahaan}`)}>Company Detail</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}
