import React from 'react';
import './HomeScreen.scss';
import { connect } from 'react-redux';
import { fetchBusinesses } from '../store/actions';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchBusinesses();
  }

  render() {
    console.log(this.props);
    // const height = window.innerHeight;

    const testBtn = {
      height: '50px',
      width: '100px',
      background: 'green',
    };

    return (

      /* TODO: Refactor to BusinessCard Component */
      <div> 
        {/* { this.props.nearestBusinesses.map(business => <h1 key={business}>{business}</h1>)} */}
        <button style={testBtn} 
        onClick={() => this.props.createBusiness('foo')}>
          Create Business
        </button>
      </div>
        /* { data && (
            data.map(business => {
              return (
                <div key={business.id} style={{height, backgroundImage: `url(${business.image_url})`}} className="business-card">
                  <div className="card-overlay">
                    <h1>{business.name}</h1>
                  </div>
                </div>
              )
            })
          )
        } */
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, {fetchBusinesses})(Home);