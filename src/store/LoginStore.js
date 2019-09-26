import {observable, action} from 'mobx';

export default class LoginStore {

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
}
