// react libraries
import React, { Component } from 'react';

// third-party libraries
import PropTypes from 'prop-types';

// components
import Button from '../../components/Button';
import Input from '../../components/InputBox';

// style
import './Dashboard.scss';

class Dashboard extends Component {
  state = {
    isTenders: false,
   };

  render() {
    return (
      <div className="dashboard">
        <nav className="dashboard__nav">
          <ul className="dashboard__nav-list">
            <li className="dashboard__nav-item dashboard__nav-item--active">Your Active Tenders</li>
            <li className="dashboard__nav-item">Drafts</li>
            <li className="dashboard__nav-item">All Tenders</li>
          </ul>
          <div className="dashboard__nav--right">
          <Button
            name="New Tender Advert"
            classes="btn btn__primary"
          />
          </div>
        </nav>
        <hr className="vl"/>
        <div className="dashboard__filter">
          <div className="dashboard__filter--left">
            <Input
              name="tenderSearch"
              placeholder="Search for tender ads"
              hasIcon={true}
              iconClass='fa fa-search fa-2x'
            />
          </div>
          <div className="dashboard__filter--right">
            <div className="input-field">
              <Input
                name="searchByDate"
                placeholder="All time"
                hasIcon={true}
                iconClass='fa fa-calendar fa-2x'
              />
            </div>
            <div className="input-field">
            <Input
              name="filter"
              placeholder="Filters"
              hasIcon={true}
              iconClass='fa fa-sliders fa-2x'
            />
            </div>
          </div>
        </div>
        {
          !this.state.isTenders &&
          <div className="dashboard__no-tenders">
            <div className="avatar"></div>
            <div className="content">
              <p className="content__title">Welcome to your dashboard</p>
              <p className="content__msg">When you start creating tenders, they'll show up <br />here, where you can manage them </p>
              <div className="content__button">
                <Button
                  name="Create New Tender Advert"
                  classes="btn btn__primary"
                />
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Dashboard;