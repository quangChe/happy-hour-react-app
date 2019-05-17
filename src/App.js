import React from 'react';
import HomeScreen from './components/HomeScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const TestPath = () => <div>Hello?</div>

function App() {
  return (
    <Router>
      <Route path="/" exact component={HomeScreen}/>
      <Route path="/test" component={TestPath}/>
    </Router>
  )
}

export default App;
