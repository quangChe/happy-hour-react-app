import React from 'react';
import { connect } from 'react-redux';

import VenueCardList from '../VenueCardList/VenueCardList';
import LoadingSpinner from '../Utils/LoadingSpinner';

import { fetchById } from '../../store/actions';

class HomeScreen extends React.Component {

  searchVenue = async (e) => {
    await this.props.fetchById(e);
    console.log(this.props);
  }

  render() {
    const { nearbyBusinesses, appLoading } = this.props;
    const height = window.innerHeight;
    const randomNumber = Math.round(Math.random() * 1000000);
    
    const loadingView = (
      <div style={{height}}>
        <LoadingSpinner/>
      </div>
    );
    
    const completeView = (
      <div style={{height}}>
        <VenueCardList id={randomNumber} venues={nearbyBusinesses} venueClick={this.searchVenue}/>
      </div>
    );

    return appLoading ? loadingView : completeView;
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, {fetchById})(HomeScreen);