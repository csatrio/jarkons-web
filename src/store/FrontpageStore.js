import {observable, action} from 'mobx';

export default class FrontpageStore {

    @observable
    isShowLogin = false;

    @action
    toggleLogin = () => {
        this.isShowLogin = !this.isShowLogin;
    }

    @action
    closeLogin = () => {
        this.isShowLogin = false;
    }
}
