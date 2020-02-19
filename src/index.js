import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { StoreProvider } from './store';

const HappyHourApp = (
  <StoreProvider>
    <App/>
  </StoreProvider>
);

ReactDOM.render(HappyHourApp, document.getElementById('root'));
