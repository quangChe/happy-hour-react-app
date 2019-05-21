import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import StoreProvider from '../store'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StoreProvider><Navbar/></StoreProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
