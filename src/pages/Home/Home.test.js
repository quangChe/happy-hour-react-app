import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './Home';

describe('Home', () => {
  const props = { 
    businesses: {
      nearbyBusinesses: {data: '', loading: ''}
    }
  };
  const screen = shallow(<Home {...props}/>);

  describe('when app is loading', () => {
    let loading;

    beforeEach(() => {
      loading = screen.setProps({businesses: {nearbyBusinesses: {data: '', loading: true}}});
    })

    it('renders loading spinner', () => {
      expect(loading.find('LoadingSpinner').exists()).toBe(true);
    })
  })


});