import React from 'react';
import './HomeScreen.scss';
import { connect } from 'react-redux';
import { fetchBusinesses } from '../store/actions';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchBusinesses();
  }

  render() {
    const width = window.innerWidth;
    const { nearestBusinesses } = this.props;

    return (
      
      // TODO: Refactor this to a separate component
      <div className="container">
        <h1>Nearby</h1>
        { nearestBusinesses.map(business => 
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

export default connect(mapStateToProps, {fetchBusinesses})(Home);