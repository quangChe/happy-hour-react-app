import BusinessStore from './BusinessStore';
import { observable, action } from 'mobx';

export default class RootStore {
    constructor() {
        this.setBusinessStore();
    }

    @observable 
    businessStore;

    @action
    setBusinessStore = (businessStore) => {
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