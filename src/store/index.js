import MainStore from './MainStore';
import FrontpageStore from './FrontpageStore';
import Settings from './Settings';

const stores = {
    store: new MainStore(),
    FrontpageStore: new FrontpageStore(),
    settings: new Settings()
};

const storeKeys = Object.keys(stores).map(key => key);

export{storeKeys}
export default stores
