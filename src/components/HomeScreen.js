import React from 'react';
import './HomeScreen.scss';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    console.log(this.props);
    const height = window.innerHeight;
    return (

      /* TODO: Refactor to BusinessCard Component */
      <div> </div>
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

export default connect(mapStateToProps)(Home);