// react libraries
import React, { Component } from 'react';

// components
import SettingsAccount from '../../components/Settings/Account';

// third-party libraries
import PropTypes  from 'prop-types';

// styles
import './Settings.scss';

class  Settings extends Component {
  state = {
    showAccount: true,
    showSecurity: false,
    showNotification: false
   };

  render() {
    const { showAccount, showSecurity, showNotification } = this.state;

    return (
      <div className="settings">
        <div className="settings__sideNav">
          <ul className="nav__list">
            <li className={showAccount ? 'nav__item nav__item--active' : 'nav__item'}>Account</li>
            <li className={showSecurity ? 'nav__item nav__item--active' : 'nav__item'}>Security</li>
            <li className={showNotification ? 'nav__item nav__item--active' : 'nav__item'}>Notifications</li>
          </ul>
        </div>
        <div className="settings__content">
          <SettingsAccount />
          <div className="setting__security"></div>
          <div className="setting__notification"></div>
        </div>
      </div>
    );
  }
}

export default Settings;

