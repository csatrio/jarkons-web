import React from 'react';
import google from '../../assets/frontpage/google.svg'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faFacebookSquare, faTwitterSquare, faInstagram} from '@fortawesome/free-brands-svg-icons';

export default class Footer extends React.Component {

    render() {
        return (
            <React.Fragment>
                <footer className="footer-main mt-5">
                    {/* Footer Links */}
                    <div className="container-fluid text-center text-md-left">
                        {/* Grid row */}
                        <div className="row">
                            {/* Grid column */}
                            <div className="col-md-3 mt-md-0 mt-3">
                                {/* Content */}
                                <h5>Jarkons - Aplikasi Pencari Info Konstruksi No 1 Di Indonesia</h5>
                                <p className="font-black font-footer-playstore">Aplikasi tersedia di:</p>
                                <img className="image-playstore-footer mb-2" src={google}/>
                            </div>
                            {/* Grid column */}
                            <hr className="clearfix w-100 d-md-none pb-3"/>
                            {/* Grid column */}
                            <div className="col-md-2 mb-md-0 mb-3">
                                {/* Links */}
                                <p className="font-footer font-weight-bold">Tentang Jarkons</p>
                                <p className="font-footer font-weight-bold">Follow us on</p>
                                <div className="font-footer mb-1">
                                    <FontAwesomeIcon icon={faFacebookSquare} className="mr-1"/>Facebook
                                </div>
                                <div className="font-footer mb-1">
                                    <FontAwesomeIcon icon={faTwitterSquare} className="mr-1"/>Twitter
                                </div>
                                <div className="font-footer">
                                    <FontAwesomeIcon icon={faInstagram} className="mr-1"/>Instagram
                                </div>
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-md-2 mb-md-0 mb-3">
                                {/* Links */}
                                <p className="font-footer font-weight-bold">Kebijakan Privasi</p>
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-md-2 mb-md-0 mb-3">
                                {/* Links */}
                                <p className="font-footer">Kontak Kami</p>
                                <div className="font-footer">
                                    <FontAwesomeIcon className="mr-1" icon={faEnvelope}/>saran@jarkonsindonesia.com
                                </div>
                            </div>
                            {/* Grid column */}
                            <div className="col-md-3"></div>
                        </div>
                        {/* Grid row */}
                    </div>
                    {/* Footer Links */}
                    {/* Copyright */}
                    {/* Copyright */}
                </footer>
                <div className="blockquote-footer text-center">© 2019 PT Jarkons Indonesia</div>
            </React.Fragment>
        );
    }
}
