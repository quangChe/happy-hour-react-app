import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
// import { StoreProvider } from './store';
import businesses from './store/Businesses'
import { Provider } from 'mobx-react'

const HappyHourApp = (
    <Provider businesses={businesses}>
        <App/>
    </Provider>
);

ReactDOM.render(HappyHourApp, document.getElementById('root'));
