import { observable, action } from 'mobx';
import { RouterStore } from 'mobx-react-router';
import ApiStore from './ApiStore';
import BusinessStore from './BusinessStore';

export default class RootStore {
    constructor() {
        this.setApiStore();
        this.setRouterStore();
        this.setBusinessStore();
    }

    @observable apiStore;
    @observable routerStore;
    @observable businessStore;

    @action
    setApiStore = () => {
        this.apiStore = new ApiStore(this);
    }

    @action 
    setRouterStore = () => {
        this.routerStore = new RouterStore();
    }

    @action
    setBusinessStore = () => {
        this.businessStore = new BusinessStore(this);
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