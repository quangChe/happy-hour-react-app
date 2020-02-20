import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
// import { StoreProvider } from './store';
import RootStore from './store'
import { Provider } from 'mobx-react'

const store = new RootStore();

const HappyHourApp = (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(HappyHourApp, document.getElementById('root'));
