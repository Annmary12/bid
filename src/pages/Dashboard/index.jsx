// react libraries
import React, { Component } from 'react';

// third-party libraries
import PropTypes from 'prop-types';

// style
import './Dashboard.scss';

class Dashboard extends Component {
  state = {  };

  render() {
    return (
      <div className="dashboard">
        <nav className="dashboard__nav">
          <ul className="dashboard__nav-list">
            <li className="dashboard__nav-item">Active Tenders</li>
            <li className="dashboard__nav-item">Watched Tenders</li>
            <li className="dashboard__nav-item">All Tenders</li>
          </ul>
        </nav>
        <div>Dashboard</div>
      </div>
    );
  }
}

export default Dashboard;