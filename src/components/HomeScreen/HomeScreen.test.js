import React from 'react';
import ReactDOM from 'react-dom';
import HomeScreen from './HomeScreen';
import Provider from '../../store/Provider';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider><HomeScreen/></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
