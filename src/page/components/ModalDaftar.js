import React from 'react';
import {Button, Col, FormGroup, Input, Modal, ModalBody, Row} from 'reactstrap';
import {inject, observer} from "mobx-react";
import {storeKeys} from "../../store";
import jarkonsImg from '../../assets/daftar/Logo.png';
import '../../css/login.css';
import {Link} from 'react-router-dom';

@inject(...storeKeys)
@observer
class ModalDaftar extends React.Component {

    render() {
        const {className, DaftarStore} = this.props
        return (
            <div>
                <Modal isOpen={DaftarStore.isShow}
                       toggle={DaftarStore.toggle}
                       className={"mt-0 p-3 signup-modal" + (typeof(className) !== 'undefined' ? (' ' + className) : '')}
                >

                    <ModalBody>
                        <Row>
                            <Col className="text-center">
                                <img className="card-img" src={jarkonsImg}/>
                            </Col>
                        </Row>

                        <Row className="mt-2 mb-3">
                            <Col className="font-signup text-center">Daftar Sekarang</Col>
                        </Row>

                        <Row className="mb-2">
                            <Col className="font-login-label">Sudah punya akun JarKons?</Col>
                            <Col className="font-green text-right">Masuk</Col>
                        </Row>

                        <FormGroup>
                            <Input size="sm" className="input-signup mb-2" type="text" placeholder="Nama"/>
                            <Input size="sm" className="input-signup mb-2" type="email" placeholder="Email"/>
                            <Input size="sm" className="input-signup mb-2" type="number" placeholder="No Telepon"/>
                            <Input size="sm" className="input-signup mb-2" type="select" placeholder="No Telepon">
                                {DaftarStore.getProfesi().map((item, index) => (
                                    <React.Fragment key={'pr-' + index}>
                                        <option value={item.id}>{item.label}</option>
                                    </React.Fragment>
                                ))}
                            </Input>
                            <Input size="sm" className="input-signup mb-2" type="text" placeholder="Nama Perusahaan"/>
                            <Input size="sm" className="input-signup mb-2" type="text" placeholder="Jabatan"/>
                            <Input size="sm" className="input-signup mb-2" type="text" placeholder="Alamat Perusahaan"/>
                            <Input size="sm" className="input-signup mb-2" type="select" placeholder="Provinsi">
                                {DaftarStore.getProvinsi().map((item, index) => (
                                    <React.Fragment key={'pr-' + index}>
                                        <option value={item.id}>{item.label}</option>
                                    </React.Fragment>
                                ))}
                            </Input>
                            <Input size="sm" className="input-signup mb-2" type="select" placeholder="Kota/Kabupaten">
                                {DaftarStore.getKotaKabupaten().map((item, index) => (
                                    <React.Fragment key={'pr-' + index}>
                                        <option value={item.id}>{item.label}</option>
                                    </React.Fragment>
                                ))}
                            </Input>
                        </FormGroup>

                        <Row>
                            <Col className="text-center">
                                <Button className="btn-success btn-signup">Masuk</Button>
                            </Col>
                        </Row>

                        <Row className="mt-3">
                            <Col className="font-login-label">
                                <div className="font-login-label text-center">Dengan mendaftar saya menyetujui&nbsp;
                                    <Link to="/syarat" className="font-green">syarat dan ketentuan</Link>&nbsp;serta&nbsp;
                                    <Link to="/privasi" className="font-green">kebijakan privasi</Link>&nbsp;JarKons

                                </div>
                            </Col>
                        </Row>

                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default ModalDaftar;
