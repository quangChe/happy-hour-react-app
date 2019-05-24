import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import StoreProvider from '../../store'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StoreProvider><NavBar/></StoreProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
