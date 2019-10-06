import React from 'react';
import {
    Button,
    ButtonGroup,
    Collapse,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Navbar,
    NavbarBrand,
    NavbarToggler,
} from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faListUl, faSearch} from '@fortawesome/free-solid-svg-icons'
import Logo from '../../assets/frontpage/Logo.png';
import LangId from '../../assets/frontpage/indonesia.png';
import LangEn from '../../assets/frontpage/langEn.png';
import {inject, observer} from "mobx-react";
import {storeKeys} from "../../store";
import {withRouter} from 'react-router-dom';

@inject(...storeKeys)
@observer
class NavigationBar extends React.Component {
    state = {
        isOpen: false,
    };

    constructor(props) {
        super(props);
    }

    toggle = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        const {LoginStore, DaftarStore} = this.props
        return (
            <React.Fragment>
                <Navbar light expand="md">

                    <NavbarBrand onClick={()=>this.props.history.push('/')} className="cursor-pointer">
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
                                    onClick={LoginStore.toggle}>Masuk</Button>
                            <Button size="sm" color="success" className="btn-navbar mr-2"
                                    onClick={DaftarStore.toggle}>Daftar</Button>
                        </ButtonGroup>

                        <ButtonGroup className="col-sm-2 font-white font-weight-bold font-lato-14 ml-3">
                            <img src={LangId}/>
                            <div className="ml-1 mr-2">ID</div>
                            <span className="border border-white"/>
                            <span className="border border-white"/>
                            &nbsp;&nbsp;
                            <img className="ml-2" src={LangEn}/>
                            <div className="ml-1">EN</div>
                        </ButtonGroup>
                    </Collapse>

                </Navbar>
            </React.Fragment>
        );
    }
}

export default withRouter(NavigationBar)

