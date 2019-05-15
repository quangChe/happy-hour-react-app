import React from 'react';
import ReactDOM from 'react-dom';
import HomeScreen from './HomeScreen';
import StoreProvider from '../store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StoreProvider><HomeScreen/></StoreProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
