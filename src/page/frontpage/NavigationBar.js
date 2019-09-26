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
import Logo from '../../assets/frontpage/Logo.png'
import LangId from '../../assets/frontpage/indonesia.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faListUl, faSearch} from '@fortawesome/free-solid-svg-icons'


export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
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
                                <Button className="btn-masuk" size="sm" color="success" style={{marginRight: 10}}>Masuk</Button>
                                <Button size="sm" color="success" className="btn-navbar">Daftar</Button>
                            </ButtonGroup>

                            <ButtonGroup className="col-sm-2 font-white">
                                <img src={LangId}/>ID&nbsp;&nbsp;<span className="border border-white"></span>&nbsp;&nbsp;<img src={LangId}/>EN
                            </ButtonGroup>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

