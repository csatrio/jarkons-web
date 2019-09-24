import MainStore from './MainStore';
import Settings from './Settings';

const stores = {
    store: new MainStore(),
    settings: new Settings()
};

const storeKeys = Object.keys(stores).map(key => key);

export{storeKeys}
export default stores
