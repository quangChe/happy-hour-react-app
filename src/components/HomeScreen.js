import React from 'react';
import { connect } from 'react-redux';

import VenuesCarousel from './VenuesCarousel';
import LoadingSpinner from './LoadingSpinner';

class HomeScreen extends React.Component {

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
        <VenuesCarousel id={randomNumber} venues={nearbyBusinesses}/>
      </div>
    );

    return appLoading ? loadingView : completeView;
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(HomeScreen);