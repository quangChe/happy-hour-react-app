import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import VenueCardList from './VenueCardList';
import VenueCard from './VenueCard/VenueCard';

configure({adapter: new Adapter()});

describe('<VenueCardList />', () => {

  const testState = {
    width: 400,
    scrollPosition: 0,
  };

  const testProps = {
    id: '12345',
    venues: [
      {id: 1, name: 'Test 1', image_url: 'https://via.placeholder.com/150'},
      {id: 2, name: 'Test 2', image_url: 'https://via.placeholder.com/150'},
      {id: 3, name: 'Test 3', image_url: 'https://via.placeholder.com/150'}
    ],
    venueClick: () => console.log('Hello World!')
  };
 

  let wrapper;

  beforeEach(async () => {
    const { venues, id, venueClick } = testProps;
    wrapper = mount(<VenueCardList />);
    await wrapper.setState(testState);
    await wrapper.setProps({venues, id, venueClick});
  })

  it('Should render a <VenuCard /> for each item in venues prop', () => {
    expect(wrapper.find(<VenueCard />)).toHaveLength(3);
  });
})