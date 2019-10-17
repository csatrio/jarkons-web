import React from 'react';
import {Card, CardImg, Table} from 'reactstrap';
import Grid from "../components/Grid";
import react_logo from "../../assets/react-logo.svg";

let _perusahaan = '-'

function renderItem(item) {
    const {nama_produk, gambar, deskripsi} = item
    const imgSrc = gambar === null ? react_logo : gambar
    return (
        <React.Fragment>
            <Card className="cards-product mb-2 text-center mt-0">
                <CardImg src={imgSrc}/>
            </Card>
            <div className="ml-1 mb-5">
                <div className="font-lato-14 font-green">{nama_produk}</div>
                <div className="font-lato-12">{_perusahaan}</div>
            </div>
        </React.Fragment>
    )
}

export default function (props) {
    const {data, perusahaan} = props
    _perusahaan = perusahaan;
    if (typeof(data) === 'undefined') return null;
    return (
        <div>
            <Grid data={data} renderCallback={renderItem} itemPerRow={3}/>
        </div>
    )
}
