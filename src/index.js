import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
// import { StoreProvider } from './store';d
import businesses from './store/Businesses'

const HappyHourApp = (
  // <StoreProvider>
    <App businesses={businesses}/>
  // </StoreProvider>
);

ReactDOM.render(HappyHourApp, document.getElementById('root'));
