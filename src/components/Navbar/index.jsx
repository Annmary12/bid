// react libraries
import * as React from 'react';
import { Link } from 'react-router-dom';

// styles
import './Navbar.scss';

const NavBar = () => (
  <div className="navbar">
    <div className="container flex-row">
      <div className="navbar__logo">Logo</div>
      <div className="navbar__right">
        <p>Already have a account? <Link to="/login" className="text-green">log In</Link></p>
        <p>Signup as vendor <Link to="/signup/vendor" className="text-green">signup</Link></p>
        <p>Signup as buyer <Link to="/signup/buyer" className="text-green">signup</Link></p>
      </div>
    </div>
  </div>
)

export default NavBar;