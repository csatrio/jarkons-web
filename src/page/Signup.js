import React from 'react';
import {Button, Col, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Row} from 'reactstrap';
import {inject, observer} from "mobx-react";
import {storeKeys} from "../store";
import jarkonsImg from '../assets/daftar/Logo.png';
import '../css/login.css';
import {Link, withRouter} from 'react-router-dom';


@inject(...storeKeys)
@observer
class ModalInfo extends React.Component {
    render() {
        const {DaftarStore, openFlag, openToggle, modalHeader} = this.props;
        return (
            <React.Fragment>
                <Modal isOpen={DaftarStore[openFlag]} toggle={DaftarStore[openToggle]}>
                    <ModalHeader className="text-right" toggle={DaftarStore[openToggle]}>{modalHeader}</ModalHeader>
                    <ModalBody>
                        {DaftarStore.messages.map(msg =>
                            <div className="font-lato-14">{msg}</div>
                        )}
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}

@inject(...storeKeys)
@observer
class Signup extends React.Component {

    constructor(props) {
        super(props)
        this.props.DaftarStore.fetchData();
    }

    render() {
        const {className, DaftarStore, LoginStore} = this.props
        return (
            <Row className={className}>
                <Col sm={4}></Col>

                <Col sm={4}>
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
                        <Col className="font-green text-right cursor-pointer"
                             onClick={() => LoginStore.toggle()}>Masuk</Col>
                    </Row>

                    <FormGroup>
                        <Input size="sm" className="input-signup mb-2" type="text" placeholder="Nama"
                               onChange={(e) => DaftarStore.setValue(e.target.value, 'nama')}/>
                        <Input size="sm" className="input-signup mb-2" type="email" placeholder="Email"
                               onChange={(e) => DaftarStore.setValue(e.target.value, 'email')}/>
                        <Input size="sm" className="input-signup mb-2" type="password" placeholder="Password"
                               onChange={(e) => DaftarStore.setValue(e.target.value, 'password')}/>
                        <Input size="sm" className="input-signup mb-2" type="number" min={0} placeholder="No Telepon"
                               onChange={(e) => DaftarStore.setValue(e.target.value, 'noTelepon')}/>

                        <FormGroup className="mt-2 mb-3">
                            <Label className="font-login-label font-weight-bold" for="profesi">Profesi</Label>
                            <Input size="sm" className="input-signup mb-2" type="select" id="profesi"
                                   onChange={(e) => DaftarStore.setValue(e.target.value, 'profesi')}>
                                {DaftarStore.profesiList.map((item, index) => (
                                    <React.Fragment key={'pr-' + index}>
                                        <option value={item.id}>{item.text}</option>
                                    </React.Fragment>
                                ))}
                            </Input>
                        </FormGroup>

                        <Input size="sm" className="input-signup mb-2" type="text" placeholder="Nama Perusahaan"
                               onChange={(e) => DaftarStore.setValue(e.target.value, 'namaPerusahaan')}/>
                        <Input size="sm" className="input-signup mb-2" type="text" placeholder="Jabatan"
                               onChange={(e) => DaftarStore.setValue(e.target.value, 'jabatan')}/>
                        <Input size="sm" className="input-signup mb-2" type="text" placeholder="Alamat Perusahaan"
                               onChange={(e) => DaftarStore.setValue(e.target.value, 'alamatPerusahaan')}/>

                        <FormGroup className="mt-2 mb-3">
                            <Label className="font-login-label font-weight-bold" for="provinsi">Provinsi</Label>
                            <Input size="sm" className="input-signup mb-2" type="select"
                                   placeholder="Provinsi" id="provinsi"
                                   onChange={(e) => {
                                       const data = JSON.parse(e.target.value)
                                       DaftarStore.setValue(data.id, 'provinsi')
                                       DaftarStore.setKotaKabupaten(data.kabupaten_list)
                                   }}>
                                {DaftarStore.provinsiList.map((item, index) => {
                                    const optionValue = {id: item.id, kabupaten_list: item.kabupaten_list}
                                    return (
                                        <React.Fragment key={'pv-' + index}>
                                            <option value={JSON.stringify(optionValue)}>{item.text}</option>
                                        </React.Fragment>
                                    )
                                })}
                            </Input>
                        </FormGroup>

                        <FormGroup className="mt-2 mb-3">
                            <Label className="font-login-label font-weight-bold"
                                   for="kotakabupaten">Kota/Kabupaten</Label>
                            <Input size="sm" className="input-signup mb-2" type="select"
                                   onChange={(e) => DaftarStore.setValue(e.target.value, 'kotaKabupaten')}
                                   placeholder="Kota/Kabupaten" id="kotakabupaten">
                                {DaftarStore.kotaKabupatenList.map((item, index) => (
                                    <React.Fragment key={'koka-' + index}>
                                        <option value={item.id}>{item.text}</option>
                                    </React.Fragment>
                                ))}
                            </Input>
                        </FormGroup>
                    </FormGroup>

                    <Row>
                        <Col className="text-center">
                            <Button className="btn-success btn-signup"
                                    onClick={() => DaftarStore.signUp()}>Masuk</Button>
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
                </Col>

                <Col sm={4}></Col>
                <ModalInfo openFlag={'isError'} openToggle={'toggleError'} modalHeader={'Registrasi Gagal'}/>
                <ModalInfo openFlag={'isSuccess'} openToggle={'toggleSuccess'} modalHeader={'Registrasi Berhasil'}/>
            </Row>
        );
    }
}

export default withRouter(Signup);
