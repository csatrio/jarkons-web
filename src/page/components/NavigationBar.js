import React from 'react';
import {
    Button,
    ButtonGroup,
    Collapse,
    Container,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Media,
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
import userImg from '../../assets/user/user.svg';
import {onEnter} from "../../util";


@inject(...storeKeys)
@observer
class UserPart extends React.Component {

    render() {
        const {isLogin, first_name, last_name, toggle, pasPhoto} = this.props.LoginStore
        if (isLogin) {
            const userImage = pasPhoto === null ? userImg : pasPhoto
            return (
                <div className="col-sm-2 mr-0 ml-5 pr-0 pl-0">
                    <Media className="d-inline-flex" src={userImage} width={20.8} height={20.8}/>
                    <div className="d-inline-flex font-weight-bold font-lato-14 font-white pl-1 pr-1">{first_name}</div>
                    <div className="d-inline-flex font-weight-bold font-lato-14 font-white">{last_name}</div>
                </div>
            )

        } else {
            return (
                <React.Fragment>
                    <ButtonGroup className="col-sm-2 mr-3">
                        <Button className="btn-masuk" size="sm" color="success"
                                onClick={toggle}>Masuk</Button>
                        <Button size="sm" color="success" className="btn-navbar mr-2"
                                onClick={() => this.props.history.push('/signup')}>Daftar</Button>
                    </ButtonGroup>
                </React.Fragment>
            )
        }
    }
}


@inject(...storeKeys)
@observer
class KategoriOverlay extends React.PureComponent {

    state = {
        selectedIndex: 0
    }

    constructor(props) {
        super(props)
        if (props.SearchStore.filterKategori.length === 0)
            props.SearchStore.getFilters();
    }

    render() {

        const {isOpen, SearchStore} = this.props;
        const {selectedIndex} = this.state;
        const inactiveClass = "font-lato-14 ml-4 cursor-pointer";
        const activeClass = inactiveClass + " border-bottom-green";
        if (isOpen) {
            return (
                <React.Fragment>
                    <Container className="d-inline-flex">
                        {SearchStore.filterKategori.map((item, i) => (
                                <div key={'ko-' + i}
                                     className={selectedIndex === i ? activeClass : inactiveClass}
                                     onClick={() => this.setState({selectedIndex: i})}
                                >{item.text}</div>
                            )
                        )}
                    </Container>

                    <div className="border-bottom mb-3"></div>
                </React.Fragment>
            )
        }
        return null;
    }
}


@inject(...storeKeys)
@observer
class NavigationBar extends React.Component {
    state = {
        navbarOpen: false,
        kategoriOpen: false,
    };

    constructor(props) {
        super(props);
    }


    toggleNavbar = () => this.setState({navbarOpen: !this.state.navbarOpen})
    toggleKategori = () => {
        const {SearchStore} = this.props;
        if (SearchStore.isMounted) {
            SearchStore.setValue(!SearchStore.toggleKategoriFilter, 'toggleKategoriFilter')
        } else {
            this.setState({kategoriOpen: !this.state.kategoriOpen})
        }
    }

    render() {
        const {history, SearchStore} = this.props;
        const {navbarOpen, kategoriOpen} = this.state;

        return (
            <React.Fragment>
                <Navbar light expand="md" className={kategoriOpen && !SearchStore.isMounted ? 'mb-0 pb-0' : undefined}
                        sticky="top">

                    <NavbarBrand onClick={() => this.props.history.push('/')} className="cursor-pointer">
                        <img src={Logo} className="Logo"/>
                    </NavbarBrand>


                    <NavbarToggler onClick={this.toggleNavbar}/>
                    <Collapse navbarOpen={navbarOpen} navbar>

                        <div className="btn-kategori cursor-pointer col-sm-1"
                             onClick={this.toggleKategori}>
                            <FontAwesomeIcon icon={faListUl}/>
                            &nbsp;&nbsp;Kategori
                        </div>

                        <InputGroup className="searchbar cursor-pointer col-sm-7 mb-1">
                            <InputGroupAddon addonType="prepend" onClick={() => {
                                this.props.history.push('/search');
                                SearchStore.doSearch();
                            }}>
                                <InputGroupText className="searchicon">
                                    <FontAwesomeIcon icon={faSearch}/>
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Cari nama tempat, perusahaan, atau produk" className="searchtext"
                                   onKeyPress={(e) => onEnter(e, () => {
                                       this.props.history.push('/search');
                                       SearchStore.doSearch();
                                   })}
                                   onChange={(e) => SearchStore.setValue(e.target.value, 'searchQuery')}/>
                        </InputGroup>

                        <UserPart history={history}/>

                        <ButtonGroup className="col-sm-2 font-white font-weight-bold font-lato-14">
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
                <KategoriOverlay isOpen={kategoriOpen && !SearchStore.isMounted}/>
            </React.Fragment>
        );
    }
}

export default withRouter(NavigationBar)

