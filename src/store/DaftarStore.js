import {action, observable} from 'mobx';

export default class DaftarStore {

    @observable
    isShow = false;

    @action
    toggle = () => {
        this.isShow = !this.isShow;
    }

    @action
    close = () => {
        this.isShow = false;
    }

    @action
    getProfesi = () => {
        return [
            {id:0, label: 'Kontraktor'},
            {id:1, label: 'Sub-Kontraktor'},
            {id:2, label: 'Tenaga Ahli'},
        ]
    }

    @action
    getProvinsi = () => {
        return [
            {id:0, label: 'Banten'},
            {id:1, label: 'DKI Jakarta'},
        ]
    }

    @action
    getKotaKabupaten = () => {
        return [
            {id:0, label: 'Tangerang'},
            {id:1, label: 'Jakarta Barat'},
        ]
    }


}
