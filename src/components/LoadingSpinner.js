import React from 'react';
import './LoadingSpinner.scss';

const LoadingSpinner = () => (
  <div className="container">
    <div className="lds-ripple"><div></div><div></div></div>
  </div>
)

export default LoadingSpinner;