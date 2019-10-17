import React from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
import FrontPage from './page/frontpage/FrontPage';
import TentangJarkons from './page/TentangJarkons';
import KeuntunganIklan from './page/KeuntunganIklan';
import {inject, observer} from "mobx-react";
import {storeKeys} from "./store";
import SyaratKetentuan from './page/SyaratKetentuan';
import KebijakanPrivasi from './page/KebijakanPrivasi';
import GridTest from "./mock/gridtest";
import Search from './page/search/Search';
import Signup from './page/Signup';
import ProductDetail from './page/ProductDetail';
import CompanyDetail from './page/companydetail/CompanyDetail';
import LowonganList from './page/LowonganList';
import PengadaanList from './page/pengadaan/PengadaanList';


const doInject = (component) => withRouter(inject(...storeKeys)(observer(component)));

export default () => (
    <Switch>
        <Route exact path="/" component={doInject(FrontPage)}/>
        <Route exact path="/home" component={doInject(FrontPage)}/>
        <Route path="/keuntungan" component={doInject(KeuntunganIklan)}/>
        <Route path="/pengadaan-list" component={doInject(PengadaanList)}/>
        <Route path="/about" component={doInject(TentangJarkons)}/>
        <Route path="/syarat" component={doInject(SyaratKetentuan)}/>
        <Route path="/privasi" component={doInject(KebijakanPrivasi)}/>
        <Route path="/grid" component={doInject(GridTest)}/>
        <Route path="/search" component={doInject(Search)}/>
        <Route path="/lowongan" component={doInject(LowonganList)}/>
        <Route path="/signup" component={doInject(Signup)}/>
        <Route path="/product-detail/:slug?/:id" component={doInject(ProductDetail)}/>
        <Route path="/company-detail/:slug?/:id" component={doInject(CompanyDetail)}/>
    </Switch>
)
