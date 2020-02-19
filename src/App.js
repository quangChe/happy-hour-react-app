import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Error from './pages/Error/Error';


class App extends React.Component {
  componentDidMount() {
    this.props.fetchNearby();
  }

  render() {
    return (
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route component={Error}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
