import React, { Component } from 'react';

// third party libraries
import Routes from './routes';

// components
import NavBar from './components/Navbar';

// global style
import './assets/scss/globals.scss';
import 'font-awesome/css/font-awesome.min.css';

const App = () => (
  <React.Fragment>
    <NavBar />
    <Routes />
  </React.Fragment>
)

export default App;
