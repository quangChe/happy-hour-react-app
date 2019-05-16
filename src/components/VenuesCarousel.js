import React from 'react';
import './VenuesCarousel.scss';

export default class VenuesCarousel extends React.Component {
  
  constructor() {
    super();
    this.state = { width: window.innerWidth };
  }

  updateDimensions = () => {
    const carousel = this.refs[this.props.id];
    this.setState({ width: window.innerWidth });
    return carousel.scrollTo(0, 0);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    const { id, venues } = this.props;
    const { width } = this.state; 

    return (
      <div className="venues-container">
        <div ref={id} className="venues-scrollbox">
          <h1 className="status">Nearby</h1>
          { venues.map(venue => 
              <div className="venue-card" key={venue.id} 
                  style={{width, backgroundImage: `url(${venue.image_url})`}} >
                <div
                  onClick={() => console.log(venue)} className="card-overlay">
                  <p className="name">{venue.name}</p>
                </div>
              </div>
            )   
          }
          <div className="scroll-counter"></div>
        </div>
      </div>
    )
  }

}