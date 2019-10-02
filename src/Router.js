import React from 'react'
import {BrowserRouter as Router, Route, Switch, withRouter, NavLink} from 'react-router-dom'
import FrontPage from './page/frontpage/FrontPage';
import TentangJarkons from './page/TentangJarkons';
import KeuntunganIklan from './page/KeuntunganIklan';
import {inject, observer} from "mobx-react";
import {storeKeys} from "./store";
import NavigationBar from './page/components/NavigationBar'
import {Container} from "reactstrap";
import Footer from "./page/components/Footer";
import ModalLogin from "./page/components/ModalLogin";
import ModalDaftar from "./page/components/ModalDaftar";


const doInject = (component) => withRouter(inject(...storeKeys)(observer(component)));

const RouterSwitch = () => (
    <Switch>
        <Route exact path="/" component={doInject(FrontPage)}/>
        <Route path="/keuntungan" component={doInject(KeuntunganIklan)}/>
        <Route path="/about" component={doInject(TentangJarkons)}/>
    </Switch>
)

export default (props) => {
    const {LoginStore, DaftarStore} = props;
    return (
        <Router>
            <Container className="text-right container-fluid">
                <NavLink href="#" className="font-top mr-3" to="/keuntungan">Keuntungan Iklan & Membership</NavLink>
                <a href="#" className="font-top mr-3">Lowongan Kerja</a>
                <a href="#" className="font-top mr-3">Pusat Bantuan</a>
                <a href="#" className="font-top">Download App</a>
            </Container>

            <NavigationBar/>

            <RouterSwitch/>

            <Footer/>
            <ModalLogin showModal={LoginStore.isShow}/>
            <ModalDaftar showModal={DaftarStore.isShow}/>
        </Router>
    )
}
