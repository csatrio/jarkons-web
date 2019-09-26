import MainStore from './MainStore';
import LoginStore from './LoginStore';
import Settings from './Settings';

const stores = {
    store: new MainStore(),
    LoginStore: new LoginStore(),
    settings: new Settings()
};

const storeKeys = Object.keys(stores).map(key => key);

export{storeKeys}
export default stores
