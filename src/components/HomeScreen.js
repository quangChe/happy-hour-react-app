import React from 'react';
import './HomeScreen.scss';
import { connect } from 'react-redux';
import { fetchNearby } from '../store/actions';
import VenuesCarousel from './VenuesCarousel';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchNearby();
  }

  render() {
    const { nearbyBusinesses } = this.props;
    const randomNumber = Math.round(Math.random() * 1000000);

    return (
      <VenuesCarousel id={randomNumber} venues={nearbyBusinesses}/>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, {fetchNearby})(Home);