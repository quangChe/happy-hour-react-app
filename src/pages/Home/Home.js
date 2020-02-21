import React from 'react';
import { observer, inject } from 'mobx-react';

import VenueCardList from '../../components/VenueCardList/VenueCardList';
import LoadingSpinner from '../../components/Utils/LoadingSpinner';

@inject('apiStore', 'businessStore')
@observer
class Home extends React.Component {

  componentDidMount() {

  }

  searchVenue = (id) => {
    this.props.apiStore.fetchById(id);
  }

  render() {
    const { nearby, loading } = this.props.businessStore;
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