import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import Provider from '../../store/Provider';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider><NavBar/></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
