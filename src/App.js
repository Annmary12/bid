import React, { Component } from 'react';

// third party libraries
import Routes from './routes';

// components
import NavBar from './components/Navbar';

// global style
import './assets/scss/globals.scss';

const App = () => (
  <React.Fragment>
    <NavBar />
    <Routes />
  </React.Fragment>
)

export default App;
