import React from 'react';
import { shallow } from 'enzyme';

import { NavBar } from './NavBar';
import NavSlider from './NavSlider/NavSlider';
import NavButton from './NavButton/NavButton';

describe('<NavBar />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavBar />);
  })
  
  it('Should not render <NavButton /> or <NavSlider /> if app is loading', () => {
    wrapper.setProps({loading: true});    
    expect(wrapper.find(NavButton)).toHaveLength(0);
    expect(wrapper.find(NavSlider)).toHaveLength(0);
  });
  
  it('Should render <NavButton /> and <NavSlider /> if app is done loading', () => {
    wrapper.setProps({loading: false});    
    expect(wrapper.find(NavButton)).toHaveLength(1);
    expect(wrapper.find(NavSlider)).toHaveLength(1);
  });
})
