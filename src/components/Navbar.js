import React from 'react';
import colors from '../styles/colors';
import './Navbar.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import NavButton from './NavButton';
import Logo from './Logo';

const Navbar = (props) => props.loading 
  ? null
  : (
    <div id="container" style={{color: colors.black}}>
      <Link to="/" style={{textDecoration: 'none'}}>
        <Logo/>
      </Link>
      <NavButton open={false}/>
    </div>
  );

const mapStateToProps = ({appLoading}) => {
  return {loading: appLoading};
}

export default connect(mapStateToProps)(Navbar);