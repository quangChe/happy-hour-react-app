import React from 'react';
import { inject, observer } from 'mobx-react';
import colors from '../../styles/colors';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core'; 

import Logo from '../Utils/Logo';
import NavButton from './NavButton/NavButton';
import NavSlider from './NavSlider/NavSlider';

@inject('businessStore')
@observer
class NavBar extends React.Component {

  state = {
    menuOpen: false,
  }

  openNavMenu = (open) => {
    this.setState({menuOpen: open})
  }

  renderLogo = () => {
    const { menuOpen } = this.state;
    return menuOpen 
      ? (<Logo/>)
      : (<Link to="/" style={{textDecoration: 'none'}}><Logo/></Link>);
  }

  renderSearchBar = () => {
    const { menuOpen } = this.state;
    const { loading } = this.props.businessStore;
    return (menuOpen || loading)
      ?  null
      : (<TextField className="searchbox" id="outlined-basic" label="Outlined" variant="outlined" />);
    }

  render() {
    const { loading } = this.props;
    const { menuOpen } = this.state;

    return loading
      ? null
      : (
        <div id="navigation-container">
          <NavSlider opened={menuOpen}/>
          <div className="navbar" style={{color: colors.black}}>
            <div className="topbar">
              {this.renderLogo()}
              <NavButton onClick={(e) => this.openNavMenu(e)} open={this.state.menuOpen}/>
            </div>
            <div className="searchbar">
              {this.renderSearchBar()}
            </div>
          </div>
        </div>
      );
  }
}

export default NavBar;