import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Provider from '../../store/Provider';
import NavBar from './NavBar';
import NavSlider from './NavSlider/NavSlider';
import NavButton from './NavButton/NavButton';

configure({adapter: new Adapter()});

describe('<NavBar />', () => {
  const LoadingNavBar = (<Provider><NavBar loading={true}/></Provider>);
  const LoadedNavBar = (<Provider><NavBar loading={false} /></Provider>)

  it('should render no <NavSlider /> if loading state is true', () => {
    const wrapper = shallow(LoadingNavBar);
    expect(wrapper.find(NavSlider)).toHaveLength(0);
  });

  it('should render <NavSlider /> if loading state is false', () => {
    const wrapper = shallow(LoadedNavBar);
    expect(wrapper.find(NavSlider)).toHaveLength(0);
  });

  it('should render no <NavButton /> if loading state is true', () => {
    const wrapper = shallow(LoadingNavBar);
    expect(wrapper.find(NavButton)).toHaveLength(0);
  });

  it('should render <NavButton /> if loading state is false', () => {
    const wrapper = shallow(LoadedNavBar);
    expect(wrapper.find(NavButton)).toHaveLength(0);
  });
})
