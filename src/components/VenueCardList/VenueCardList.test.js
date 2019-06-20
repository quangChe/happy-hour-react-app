import React from 'react';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import VenueCardList from './VenueCardList';

describe('<VenueCardList />', () => {

  const props = {
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
    wrapper = mount(<VenueCardList {...props} />);
  })

  it('Should render a <VenueCard /> for each item in venues prop', () => {
    expect(wrapper.find('VenueCard')).toHaveLength(3);
  });
})