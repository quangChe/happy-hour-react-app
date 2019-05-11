import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './store/reducers';
import thunk from 'redux-thunk';

import Navbar from './components/NavbarComponent';
import HomeScreen from './components/HomeScreen';

const store = createStore(reducers, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <Navbar/>
      <HomeScreen/> 
    </Provider>
  )
}

export default App;
