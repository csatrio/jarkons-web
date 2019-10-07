import React from 'react';
import {Button, Col, FormGroup, Input, Label, Modal, ModalBody, Row} from 'reactstrap';
import {inject, observer} from "mobx-react";
import {storeKeys} from "../../store";
import '../../css/login.css'
import {withRouter} from "react-router-dom";

@inject(...storeKeys)
@observer
class ModalLogin extends React.Component {

    render() {
        const {className, LoginStore, DaftarStore} = this.props
        return (
            <div>
                <Modal isOpen={LoginStore.isShow}
                       toggle={LoginStore.toggle}
                       className={"p-3 login-modal" + (typeof(className) !== 'undefined' ? (' ' + className) : '')}
                >

                    <ModalBody>
                        <div className="font-green mb-2">Masuk ke akun anda</div>

                        <FormGroup className="mb-3">
                            <Row>
                                <Col className="font-login-label">Email</Col>
                            </Row>
                            <Input type="email" className="input-login"/>
                        </FormGroup>

                        <FormGroup className="mb-4">
                            <Row>
                                <Col className="font-login-label">Password</Col>
                                <Col className="font-login-label text-right font-green">Lupa Kata Sandi</Col>
                            </Row>
                            <Input type="password" className="input-login"/>
                        </FormGroup>

                        <div className="login-separator mb-2"></div>

                        <FormGroup className="ml-4">
                            <Input type="checkbox" name="ingat-saya" id="ingat-saya"/>
                            <Label for="ingat-saya" className="font-login-label">Ingat Saya</Label>
                        </FormGroup>

                        <Row>
                            <Col sm={5}>
                                <Button size="md" className="btn-success btn-login">Masuk</Button>
                            </Col>

                            <Col sm={7}>
                                <div className="font-login-label pl-3">Belum punya akun JarKons?</div>
                                <div className="font-green pl-3 cursor-pointer"
                                     onClick={()=>{this.props.history.push('/signup'); LoginStore.close()}}>Daftar</div>
                            </Col>
                        </Row>

                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default withRouter(ModalLogin);
