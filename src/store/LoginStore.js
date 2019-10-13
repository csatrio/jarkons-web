import {action, observable} from 'mobx';
import axios from 'axios';
import jwt_decode from 'jsonwebtoken/decode';
import settings from './Settings';

export default class LoginStore {

    constructor() {
        const token = window.localStorage.getItem('token')
        if (token !== null) {
            this.decoded_jwt = this.decoded_jwt || jwt_decode(token)
            let isValid = Date.now() < (this.decoded_jwt.exp * 1000)

            // retry decoding if somebody just re-login
            if (!isValid) {
                this.decoded_jwt = jwt_decode(token)
                isValid = Date.now() < (this.decoded_jwt.exp * 1000)
            }

            if (isValid) {
                this.first_name = window.localStorage.getItem('first_name')
                this.last_name = window.localStorage.getItem('last_name')
                this.pasPhoto = window.localStorage.getItem('pasPhoto')
                if (this.pasPhoto === 'null')
                    this.pasPhoto = null
                this.isLogin = true
            } else {
                window.localStorage.removeItem('token');
                window.localStorage.removeItem('refreshToken');
                window.localStorage.removeItem('first_name');
                window.localStorage.removeItem('last_name');
                this.isLogin = false
            }

        } else {
            this.isLogin = false
        }
    }

    @observable
    isShow = false;

    @observable
    username = '';

    @observable
    password = '';

    @observable
    isLogin = false;

    @observable
    first_name = '';

    @observable
    last_name = '';

    @observable
    pasPhoto = null;

    decoded_jwt = null;

    @action
    toggle = () => {
        this.isShow = !this.isShow;
    }

    @action
    close = () => {
        this.isShow = false;
    }

    @action
    login = () => {
        axios.post(`${settings.apiUrl}/token/`, {
            username: this.username,
            password: this.password
        }).then(r => {
            const {access, refresh, first_name, last_name, pas_photo} = r.data
            window.localStorage.setItem('token', access);
            window.localStorage.setItem('refreshToken', refresh);
            this.decoded_jwt = jwt_decode(access)
            this.first_name = first_name
            this.last_name = last_name
            this.pasPhoto = pas_photo
            window.localStorage.setItem('first_name', first_name);
            window.localStorage.setItem('last_name', last_name);
            window.localStorage.setItem('pasPhoto', pas_photo);
        })
        this.isLogin = true
    }

    @action
    logout = () => {
        console.log('logout')
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('refreshToken');
        window.localStorage.removeItem('first_name');
        window.localStorage.removeItem('last_name');
        this.isLogin = false;
    }

    @action
    hasValidToken = () => {
        const token = window.localStorage.getItem('token')
        if (token === null) {
            this.username = ''
            this.isLogin = false
            return false
        }
        this.first_name = window.localStorage.getItem('first_name')
        this.last_name = window.localStorage.getItem('last_name')
        this.decoded_jwt = this.decoded_jwt || jwt_decode(token)

        let isValid = Date.now() < (this.decoded_jwt.exp * 1000)

        // retry decoding if somebody just re-login
        if (!isValid) {
            this.decoded_jwt = jwt_decode(token)
            isValid = Date.now() < (this.decoded_jwt.exp * 1000)
        }

        return isValid
    }
}
