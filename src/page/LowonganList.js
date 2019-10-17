import React from "react";
import Lowongan from "./companydetail/Lowongan";
import * as axios from "axios";
import settings from '../store/Settings';
import {Container} from "reactstrap";

export default class LowonganList extends React.Component {

    state = {
        data: []
    }

    componentDidMount() {
        axios.get(`${settings.apiUrl}/user_info/info-loker`).then(r => this.setState({data: r.data.rows}))
    }

    render() {
        return (
            <Container className="p-5">
                <Lowongan data={this.state.data}/>
            </Container>
        )
    }
}
