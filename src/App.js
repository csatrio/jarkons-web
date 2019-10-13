import React from 'react';
import {Provider} from "mobx-react";
import Routes from './Routes'
import stores from "./store";
import './css/App.css'
import {BrowserRouter as Router} from "react-router-dom";
import NavigationBar from "./page/components/NavigationBar";
import Footer from "./page/components/Footer";
import ModalLogin from "./page/components/ModalLogin";
import TopMenu from "./page/components/TopMenu";


export default function () {
    const {LoginStore} = stores;
    return (
        <Provider {...stores}>
            <Router>
                <TopMenu/>
                <NavigationBar/>

                <Routes {...stores}/>

                <Footer/>
                <ModalLogin showModal={LoginStore.isShow}/>
            </Router>
        </Provider>
    );
}
