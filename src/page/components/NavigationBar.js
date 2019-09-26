import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    ButtonGroup,
    Button,
} from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faListUl, faSearch} from '@fortawesome/free-solid-svg-icons'
import Logo from '../../assets/frontpage/Logo.png';
import LangId from '../../assets/frontpage/indonesia.png';
import {inject, observer} from "mobx-react";
import {storeKeys} from "../../store";

@inject(...storeKeys)
@observer
export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            showLogin: false,
        };
    }

    toggle = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    loginToggle = () => {
        this.setState({showLogin: !this.state.showLogin});
    }

    render() {
        const {LoginStore} = this.props
        return (
            <React.Fragment>
                <Navbar light expand="md">
                    <div className="container">
                        <NavbarBrand href="/">
                            <img src={Logo} className="Logo"/>
                        </NavbarBrand>


                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>

                            <div className="btn-kategori col-sm-1">
                                <FontAwesomeIcon icon={faListUl}/>
                                &nbsp;&nbsp;Kategori
                            </div>

                            <InputGroup className="searchbar col-sm-7 mb-1">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText className="searchicon">
                                        <FontAwesomeIcon icon={faSearch}/>
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input placeholder="Cari nama tempat, perusahaan, atau produk" className="searchtext"/>
                            </InputGroup>

                            <ButtonGroup className="col-sm-2 mr-3">
                                <Button className="btn-masuk" size="sm" color="success"
                                        onClick={LoginStore.toggleLogin}>Masuk</Button>
                                <Button size="sm" color="success" className="btn-navbar mr-2">Daftar</Button>
                            </ButtonGroup>

                            <ButtonGroup className="col-sm-2 font-white font-weight-bold font-lato-14 ml-3">
                                <img src={LangId}/>
                                <div className="ml-1 mr-2">ID</div>
                                <span className="border border-white"/>
                                <span className="border border-white"/>
                                &nbsp;&nbsp;
                                <img className="ml-2" src={LangId}/>
                                <div className="ml-1">EN</div>
                            </ButtonGroup>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

