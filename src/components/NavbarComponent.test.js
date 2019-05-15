import React from 'react';
import ReactDOM from 'react-dom';
import NavbarComponent from './NavbarComponent';
import StoreProvider from '../store'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StoreProvider><NavbarComponent/></StoreProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
