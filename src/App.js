import React from 'react';
import { fetchNearby } from './store/actions';
import { connect } from 'react-redux';
import HomeScreen from './components/HomeScreen';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';


const Error = () => <div>404</div>

class App extends React.Component {
  componentDidMount() {
    this.props.fetchNearby();
  }

  render() {
    return (
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={HomeScreen}/>
          <Route component={Error}/>
        </Switch>
      </Router>
    )
  }
}

export default connect(null, {fetchNearby})(App);
