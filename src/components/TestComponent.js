import React from 'react';
import './TestComponent.css'

class Test extends React.Component{

  componentDidMount() {
  }

  render() {
    return (
      <div id="container" onClick={() => console.log('Hello')}>
        <h1 className="title">Hello world</h1>
      </div>
    )
  }
}


export default Test;