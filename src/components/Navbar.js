import React from 'react';
import colors from '../styles/colors';
import './Navbar.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import NavButton from './NavButton';
import Logo from './Logo';

class Navbar extends React.Component {

  state = {
    menuOpen: false,
  }

  openNavMenu = (open) => {
    this.setState({menuOpen: open})
  }

  render() {
    const { loading } = this.props;
    const { menuOpen } = this.state;

    return loading
      ? null
      : (
        <div id="navigation-container">
          <div className={['nav-menu', !menuOpen && 'nav-menu-close'].join(' ')}></div>
          <div className="navbar" style={{color: colors.black}}>
            <Link to="/" style={{textDecoration: 'none'}}>
              <Logo/>
            </Link>
            <NavButton onClick={this.openNavMenu} open={false}/>
          </div>
        </div>
      );
  }
}

const mapStateToProps = ({appLoading}) => {
  return {loading: appLoading};
}

export default connect(mapStateToProps)(Navbar);