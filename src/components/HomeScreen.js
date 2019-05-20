import React from 'react';
import './HomeScreen.scss';
import { connect } from 'react-redux';
import { fetchNearby } from '../store/actions';

import VenuesCarousel from './VenuesCarousel';
import Navbar from './NavbarComponent';

class HomeScreen extends React.Component {
  componentDidMount() {
    this.props.fetchNearby();
  }

  render() {
    const { nearbyBusinesses } = this.props;
    const randomNumber = Math.round(Math.random() * 1000000);

    return (
      <div className="homescreen">
        <Navbar/>
        <VenuesCarousel id={randomNumber} venues={nearbyBusinesses}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, {fetchNearby})(HomeScreen);