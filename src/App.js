import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './store/reducers';

import Navbar from './components/NavbarComponent';
import HomeScreen from './components/HomeScreen';

function App() {
  return (
    <Provider store={createStore(reducers)}>
      <Navbar/>
      <HomeScreen/> 
    </Provider>
  )
}

export default App;
