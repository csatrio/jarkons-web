import LoginStore from './LoginStore';
import DaftarStore from "./DaftarStore";
import SearchStore from './SearchStore';

const stores = {
    LoginStore: new LoginStore(),
    DaftarStore: new DaftarStore(),
    SearchStore: new SearchStore(),
};

const storeKeys = Object.keys(stores).map(key => key);

export {storeKeys}
export default stores
