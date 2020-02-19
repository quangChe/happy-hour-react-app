import React from 'react';
import { observer, useObserver } from 'mobx-react';
import { useStore } from '../../store';

import VenueCardList from '../../components/VenueCardList/VenueCardList';
import LoadingSpinner from '../../components/Utils/LoadingSpinner';

export const Home = () => {

  const searchVenue = async (e) => {
    await this.props.fetchById(e);
    console.log(this.props);
  }

  const businesses = useStore();
  console.log(businesses);
  const { nearbyBusinesses } = businesses;
  const height = window.innerHeight;
  const randomNumber = Math.round(Math.random() * 1000000);
  
  const loadingView = (
    <div style={{height}}>
      <LoadingSpinner/>
    </div>
  );
  
  const completeView = (
    <div style={{height}}>
      <VenueCardList id={randomNumber} venues={nearbyBusinesses.data} venueClick={this.searchVenue}/>
    </div>
  );

  return useObserver(() => nearbyBusinesses.loading ? loadingView : completeView);
}

export default Home;