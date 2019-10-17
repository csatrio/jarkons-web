import React from 'react';
import {Card, CardBody, CardImg, Table} from 'reactstrap';
import Grid from "../components/Grid";
import react_logo from "../../assets/react-logo.svg";

function renderItem(item) {
    const {alamat, telepon, fax, email} = item
    return (
        <React.Fragment>
            <Card className="cards-product mb-2 text-center mt-0 overflow-auto">
                <CardBody className="rounded-sm">
                    <div className="d-flex justify-content-between">
                        <p className="font-lato-14 font-green">Alamat: </p>
                        <p className="font-lato-14">{alamat}</p>
                    </div>

                    <div className="d-flex justify-content-between">
                        <p className="font-lato-14 font-green">Telepon: </p>
                        <p className="font-lato-14">{telepon}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="font-lato-14 font-green">Fax: </p>
                        <p className="font-lato-14">{fax}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="font-lato-14 font-green">Email: </p>
                        <p className="font-lato-14">{email}</p></div>
                </CardBody>
            </Card>

        </React.Fragment>
    )
}

export default function (props) {
    const {data} = props
    if (typeof(data) === 'undefined') return null;
    return (
        <div>
            <Grid data={data} renderCallback={renderItem} itemPerRow={3}/>
        </div>
    )
}
