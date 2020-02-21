import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import RootStore from './store';
import { Provider } from 'mobx-react';
import { syncHistoryWithStore } from 'mobx-react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();
const store = new RootStore();
const history = syncHistoryWithStore(browserHistory, store.routerStore);

const HappyHourApp = (
    <Provider {...store}>
        <Router history={history}>
            <App/>
        </Router>
    </Provider>
);

ReactDOM.render(HappyHourApp, document.getElementById('root'));
