import React from 'react';
import './HomeScreen.scss';
import { connect } from 'react-redux';
import { fetchNearby } from '../store/actions';

import api from '../utils/apis';

class Home extends React.Component {
  async componentDidMount() {
    this.props.fetchNearby();

    const test = await api.searchId('tTafiXZvcXziFjpu4zxO7Q');
    console.log('****', test);
  }

  render() {
    const width = window.innerWidth;
    const { nearbyBusinesses } = this.props;


    return (
      
      // TODO: Refactor this to a separate component
      <div className="container">
        <h1>Nearby</h1>
        { nearbyBusinesses.map(business => 
            <div key={business.id} style={{width, backgroundImage: `url(${business.image_url})`}} className="business-card">
              <div onClick={() => console.log(business)} className="card-overlay">
                <h2>{business.name}</h2>
              </div>
            </div>
          )   
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, {fetchNearby})(Home);