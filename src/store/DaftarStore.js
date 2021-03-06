import {action, observable} from 'mobx';
import settings from '../store/Settings';
import axios from 'axios';

export default class DaftarStore {

    @observable
    profesiList = [];

    @observable
    provinsiList = [];

    @observable
    kotaKabupatenList = [];

    @observable
    nama = null;

    @observable
    email = null;

    @observable
    password = null;

    @observable
    noTelepon = null;

    @observable
    profesi = null;

    @observable
    namaPerusahaan = null;

    @observable
    jabatan = null;

    @observable
    alamatPerusahaan = null;

    @observable
    provinsi = null;

    @observable
    kotaKabupaten = null;

    @observable
    isError = false;

    @observable
    isSuccess = false;

    @observable
    messages = [];

    @action
    toggleSuccess = () => {
        this.isSuccess = !this.isSuccess;
        if (!this.isSuccess) this.messages = []
    }

    @action
    toggleError = () => {
        this.isError = !this.isError;
        if (!this.isError) this.messages = []
    }

    @action
    setValue = (value, propertyName) => {
        console.log(`set property ${propertyName} with value ${value}`)
        this[propertyName] = value;
    }

    @action
    setKotaKabupaten = (kabupaten_list) => {
        this.kotaKabupatenList = kabupaten_list;
    }

    @action
    fetchData = () => {
        axios.get(`${settings.apiUrl}/user_info/registration-info/`).then((r) => {
            const {profesi, provinsi} = r.data;
            this.provinsiList = provinsi;
            this.profesiList = profesi;
        })
    }

    @action
    signUp = () => {
        if (this.kotaKabupatenList.length === 0) {
            this.messages.push('Provinsi harus dipilih !')
            this.messages.push('Kota Kabupaten harus dipilih !')
            this.isError = true
            return;
        }
        const registrationData = {
            "password": this.password,
            "email": this.email,
            "nama": this.nama,
            "bersedia_mengirim_ke_lokasi_pekerjaan": false,
            "no_telepon": this.noTelepon,
            "profesi_id": this.profesi !== null ? Number(this.profesi) : Number(this.profesiList[0].id),
            "nama_perusahaan": this.namaPerusahaan,
            "jabatan_di_perusahaan": this.jabatan,
            "alamat_perusahaan": this.alamatPerusahaan,
            "provinsi_id": this.provinsi !== null ? Number(this.provinsi) : Number(this.provinsiList[0].id),
            "kabupaten_kota_id": this.kotaKabupaten !== null ? Number(this.kotaKabupaten) : Number(this.kotaKabupatenList[0].id),
            "klasifikasi_id": null,
            "kualifikasi_id": null,
            "masalah_yang_sering_dihadapi": "",
            "bantuan_yang_dibutuhkan": "",
            "lat": "0.00000000000000000000",
            "long": "0.00000000000000000000",
            "sekolah_dasar": null,
            "sekolah_menengah_pertama": null,
            "sekolah_menengah_kejuruan": null,
            "universitas": null,
            "pengalaman_kerja1": null,
            "pengalaman_kerja2": null
        }
        axios.post(`${settings.apiUrl}/user_info/register/`, registrationData).then(r => {
            this.isError = false;
            this.messages.push(JSON.stringify(r.data));
            this.isSuccess = true;
        }).catch(err => {
            this.messages.push(err.data.message);
            this.isError = true;
        })
    }

}
