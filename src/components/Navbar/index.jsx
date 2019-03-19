// react libraries
import * as React from 'react';

// styles
import './Navbar.scss';

const NavBar = () => (
  <div className="navbar">
    <div className="container flex-row">
      <div className="navbar__logo">Logo</div>
      <div className="navbar__right">
        <p>Already have a account? <span className="text-green">log In</span></p>
      </div>
    </div>
  </div>
)

export default NavBar;