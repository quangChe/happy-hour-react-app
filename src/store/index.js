import { observable, action } from 'mobx';
import ApiStore from './ApiStore';
import BusinessStore from './BusinessStore';

export default class RootStore {
    constructor() {
        this.setApiStore();
        this.setBusinessStore();
    }

    @observable apiStore;
    @observable businessStore;

    @action
    setApiStore = () => {
        this.apiStore = new ApiStore(this);
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