import React from 'react';
import { toJS } from 'mobx';
import { observer, inject } from 'mobx-react';

import VenueCardList from '../../components/VenueCardList/VenueCardList';
import LoadingSpinner from '../../components/Utils/LoadingSpinner';

@inject(['store'])
@observer
class Home extends React.Component {

  componentDidMount() {

  }

  searchVenue = (id) => {
    const { nearby } = toJS(this.props.store.businessStore);
    console.log(nearby.find(place => place.id === id));
  }

  render() {
    const { nearby, loading } = this.props.store.businessStore;
    const height = window.innerHeight;
    const randomNumber = Math.round(Math.random() * 1000000);
    
    const loadingView = (
      <div style={{height}}>
        <LoadingSpinner/>
      </div>
    );
    
    const completeView = (
      <div style={{height}}>
        <VenueCardList id={randomNumber} venues={nearby} venueClick={this.searchVenue}/>
      </div>
    );

    return loading ? loadingView : completeView;
  }
}

export default Home;