import React from 'react';
import {Card, CardBody} from 'reactstrap';
import Grid from "../components/Grid";

function renderItem(item) {
    const {nama, jabatan, telepon, email, foto} = item
    return (
        <React.Fragment>
            <Card className="cards-product mb-2 text-center mt-0 overflow-auto">
                <CardBody className="rounded-sm">
                    <div className="d-flex justify-content-between">
                        <p className="font-lato-14 font-green">Nama: </p>
                        <p className="font-lato-14">{nama}</p>
                    </div>

                    <div className="d-flex justify-content-between">
                        <p className="font-lato-14 font-green">Jabatan: </p>
                        <p className="font-lato-14">{jabatan}</p>
                    </div>

                    <div className="d-flex justify-content-between">
                        <p className="font-lato-14 font-green">Telepon: </p>
                        <p className="font-lato-14">{telepon}</p>
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
