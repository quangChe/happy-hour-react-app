import React from 'react';
import HomeScreen from './components/HomeScreen';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/NavbarComponent';

const TestPath = () => <div>Hello?</div>
const Error = () => <div>404!!</div>

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={HomeScreen}/>
        <Route path="/test" component={TestPath}/>
        <Route component={Error}/>
      </Switch>
    </Router>
  )
}

export default App;
