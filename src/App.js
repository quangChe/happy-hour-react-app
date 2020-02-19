import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { observer } from 'mobx-react'
import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Error from './pages/Error/Error';

@observer
class App extends React.Component {
  componentDidMount() {
    this.props.businesses.fetchNearby();
  }

  render() {
    console.log(this.props);
    return (
      <Home/>
      // <Router>
      //   <NavBar/>
      //   <Switch>
      //     <Route path="/" exact component={Home} businesses={this.props.businesses}/>
      //     <Route component={Error}/>
      //   </Switch>
      // </Router>
    )
  }
}

export default App;
