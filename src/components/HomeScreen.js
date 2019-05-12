import React from 'react';
import './HomeScreen.scss';
import { connect } from 'react-redux';
import { fetchBusinesses } from '../store/actions';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchBusinesses();
  }

  render() {
    const height = window.innerHeight - 60;
    const { nearestBusinesses } = this.props;

    return (
      <div className="container" style={{height}}>
        { nearestBusinesses.map(business => 
            <div key={business.id} style={{backgroundImage: `url(${business.image_url})`}} className="business-card">
              <div onClick={() => console.log(business)} className="card-overlay">
                <h1>{business.name}</h1>
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