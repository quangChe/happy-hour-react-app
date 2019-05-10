import React from 'react';
import HomeScreen from './components/HomeScreen';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './store/reducers';

function App() {
  return (
    <Provider store={createStore(reducers)}>
      <HomeScreen/> 
    </Provider>
  )
}

export default App;
