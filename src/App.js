import React from 'react';
import {Provider} from "mobx-react";
import Routes from './Routes'
import stores from "./store";
import './css/App.css'
import {Container} from "reactstrap";
import {BrowserRouter as Router, NavLink} from "react-router-dom";
import NavigationBar from "./page/components/NavigationBar";
import Footer from "./page/components/Footer";
import ModalLogin from "./page/components/ModalLogin";

class App extends React.Component {
    render() {
        const {LoginStore} = stores;
        return (
            <Provider {...stores}>
                <Router>
                    <Container className="text-right container-fluid">
                        <NavLink href="#" className="font-top mr-3" to="/keuntungan">Keuntungan Iklan &
                            Membership</NavLink>
                        <a href="#" className="font-top mr-3">Lowongan Kerja</a>
                        <a href="#" className="font-top mr-3">Pusat Bantuan</a>
                        <a href="#" className="font-top mr-3">Download App</a>
                        <a href="#" className="font-top mr-3" onClick={() => LoginStore.logout()}>Logout</a>
                    </Container>

                    <NavigationBar/>

                    <Routes {...stores}/>

                    <Footer/>
                    <ModalLogin showModal={LoginStore.isShow}/>
                </Router>
            </Provider>
        );
    }
}

export default App;
