import React from 'react';
import { observer, inject } from 'mobx-react';

import VenueCardList from '../../components/VenueCardList/VenueCardList';
import LoadingSpinner from '../../components/Utils/LoadingSpinner';

@inject(['store'])
@observer
class Home extends React.Component {

  componentDidMount() {

  }

  searchVenue = async (e) => {
    await this.props.fetchById(e);
  }

  render() {
    const { nearby } = this.props.store.businessStore;
    const height = window.innerHeight;
    const randomNumber = Math.round(Math.random() * 1000000);
    
    const loadingView = (
      <div style={{height}}>
        <LoadingSpinner/>
      </div>
    );
    
    const completeView = (
      <div style={{height}}>
        <VenueCardList id={randomNumber} venues={nearby.data} venueClick={this.searchVenue}/>
      </div>
    );

    return nearby.loading ? loadingView : completeView;
  }
}

export default Home;