import { observable, action } from 'mobx';
import { RouterStore } from 'mobx-react-router';
import ApiStore from './ApiStore';
import BusinessStore from './BusinessStore';

import AppForms from '../forms'

export default class RootStore {
    constructor() {
        this.setApiStore();
        this.setRouterStore();
        this.setBusinessStore();
        this.setFormStore();
    }

    @observable apiStore;
    @observable routerStore;
    @observable businessStore;
    @observable formStore;

    setApiStore = () => {
        this.apiStore = new ApiStore(this);
    }

    setRouterStore = () => {
        this.routerStore = new RouterStore();
    }

    setBusinessStore = () => {
        this.businessStore = new BusinessStore(this);
    }

    setFormStore = () => {
        this.formStore = new AppForms();
    }
}

// const StoreContext = createContext({});

// export const StoreProvider = (props) => (
//     <StoreContext.Provider 
//         businesses={Businesses}>
//             {props.children}
//     </StoreContext.Provider>
// )
// export const useStore = () => useContext(StoreContext);