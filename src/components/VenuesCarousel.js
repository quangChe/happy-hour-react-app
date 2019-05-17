import React from 'react';
import './VenuesCarousel.scss';
import VenueCard from './VenueCard';

export default class VenuesCarousel extends React.Component {

  state = {
    width: window.innerWidth,
  }

  updateDimensions = () => {
    const carousel = this.refs[this.props.id];
    this.setState({ 
      width: window.innerWidth, 
    });
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
          { venues.map(venue =>
              <VenueCard handleClick={(e) => console.log('****', e)} key={venue.id} venue={venue} width={width}/>
            )   
          }
        </div>
      </div>
    )
  }

}