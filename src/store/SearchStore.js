import {action, observable} from 'mobx';
import settings from './Settings';
import axios from 'axios';
import {notNull, notUndefined, notNullUndefined} from "../util";

export default class SearchStore {

    @observable
    filterKategori = [];

    @observable
    filterLokasi = [];

    @observable
    perusahaanList = [];

    @observable
    productList = [];

    @observable
    lastPage = 0;

    @observable
    activeTab = 'tabPerusahaan';

    @observable
    searchQuery = null;

    @observable
    kategori = null;

    @observable
    lokasi = null;

    @observable
    rating = null;


    @action
    setValue = (value, propertyName) => {
        console.log(`set property ${propertyName} with value ${value}`)
        this[propertyName] = value;
    }

    @action
    resetFilter = () => {
        this.kategori = null;
        this.lokasi = null;
        this.rating = null;
        this.searchQuery = null;
    }

    @action
    getFilters = () => {
        if (this.filterLokasi.length > 0 || this.filterKategori.length > 0) return;
        axios.get(`${settings.apiUrl}/user_info/get-filters/`).then(r => {
            const {kategori, lokasi} = r.data
            this.filterKategori = kategori
            this.filterLokasi = lokasi
        })
    }

    getPerusahaan = (queryParam, page = null) => {
        axios.get(`${settings.apiUrl}/user_info/search-perusahaan/`, {params: queryParam}).then(r => {
            this.perusahaanList = r.data.rows
        })
    }

    getProduct = (queryParam, page = null) => {
        axios.get(`${settings.apiUrl}/user_info/search-produk/`, {params: queryParam}).then(r => {
            this.productList = r.data.rows
        })
    }

    @action
    doSearch = (page = null) => {
        const query = {}
        if (notNullUndefined(this.searchQuery)) query['q'] = this.searchQuery;
        if (notNullUndefined(this.kategori)) query['profesiId'] = this.kategori;
        if (notNullUndefined(this.lokasi)) query['provinsiId'] = this.lokasi;

        console.log(JSON.stringify(query))
        if (this.activeTab === 'tabPerusahaan') {
            this.getPerusahaan(query, page)
        } else {
            this.getProduct(query, page)
        }
    }

}
