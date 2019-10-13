import {action, observable} from 'mobx';
import settings from './Settings';
import axios from 'axios';

export default class SearchStore {

    @observable
    filter_kategori = []

    @observable
    filter_lokasi = []

    @action
    getFilters = () => {
        axios.get(`${settings.apiUrl}/user_info/get-filters/`).then(r => {
            r.data.kategori.forEach(item => this.filter_kategori.push(item))
            this.filter_lokasi = observable(r.data.lokasi)
        })
    }

}
