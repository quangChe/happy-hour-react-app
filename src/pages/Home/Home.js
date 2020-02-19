import React from 'react';
import { observer } from 'mobx-react';

import VenueCardList from '../../components/VenueCardList/VenueCardList';
import LoadingSpinner from '../../components/Utils/LoadingSpinner';

@observer
class Home extends React.Component {

  componentDidMount() {
    console.log(this.props);
  }

  searchVenue = async (e) => {
    await this.props.fetchById(e);
  }

  render() {
    console.log(this.props);
    // const { nearbyBusinesses } = this.props.businesses;
    const height = window.innerHeight;
    const randomNumber = Math.round(Math.random() * 1000000);
    
    const loadingView = (
      <div style={{height}}>
        <LoadingSpinner/>
      </div>
    );
    
    const completeView = (
      <div style={{height}}>
        {/* <VenueCardList id={randomNumber} venues={nearbyBusinesses.data} venueClick={this.searchVenue}/> */}
      </div>
    );

    return null;
    // return nearbyBusinesses.loading ? loadingView : completeView;
  }
}

export default Home;