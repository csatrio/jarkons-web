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
import SyaratKetentuan from './page/SyaratKetentuan';
import KebijakanPrivasi from './page/KebijakanPrivasi';
import GridTest from "./mock/gridtest";
import Search from './page/search/Search';


const doInject = (component) => withRouter(inject(...storeKeys)(observer(component)));

const RouterSwitch = () => (
    <Switch>
        <Route exact path="/" component={doInject(FrontPage)}/>
        <Route path="/keuntungan" component={doInject(KeuntunganIklan)}/>
        <Route path="/about" component={doInject(TentangJarkons)}/>
        <Route path="/syarat" component={doInject(SyaratKetentuan)}/>
        <Route path="/privasi" component={doInject(KebijakanPrivasi)}/>
        <Route path="/grid" component={doInject(GridTest)}/>
        <Route path="/search" component={doInject(Search)}/>
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
