import MainStore from './MainStore';
import LoginStore from './LoginStore';
import Settings from './Settings';
import DaftarStore from "./DaftarStore";

const stores = {
    store: new MainStore(),
    LoginStore: new LoginStore(),
    DaftarStore: new DaftarStore(),
    settings: new Settings()
};

const storeKeys = Object.keys(stores).map(key => key);

export{storeKeys}
export default stores
