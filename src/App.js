import React from 'react';
import HomeScreen from './components/HomeScreen';
import { HashRouter as Router, Route } from 'react-router-dom';

const TestPath = () => <div>Hello?</div>
const Error = () => <div>404!!</div>

function App() {
  return (
    <Router>
      <Route path="/" exact component={HomeScreen}/>
      <Route path="/test" component={TestPath}/>
      <Route path="*" component={Error}/>
    </Router>
  )
}

export default App;
