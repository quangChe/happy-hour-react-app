import React from 'react';
import { shallow } from 'enzyme';
import Error from './Error';

describe('Error Screen', () => {
  const screen = shallow(<Error />);

  it('renders without crashing', () => {
    expect(screen).toMatchSnapshot();
  });
})