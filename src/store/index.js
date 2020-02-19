import React, { createContext, useContext } from 'react';
import Businesses from './Businesses';

const StoreContext = createContext({});

export const StoreProvider = (props) => (
    <StoreContext.Provider 
        businesses={Businesses}>
            {props.children}
    </StoreContext.Provider>
)
export const useStore = () => useContext(StoreContext);