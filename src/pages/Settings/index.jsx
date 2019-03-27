// react libraries
import React, { Component } from 'react';

// components
import Account from '../../components/Settings/Account';
import Security from '../../components/Settings/Security';
import Notifications from '../../components/Settings/Notifications';

// third-party libraries
import PropTypes  from 'prop-types';

// styles
import './Settings.scss';

class  Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.getInitialState(),
      showAccount: true,
     };
  }

   getInitialState = () => ({
    showAccount: false,
    showSecurity: false,
    showNotification: false
   })


   toggleActiveLink = (type) => () => {
     if (type === 'notification') {
       return this.setState({
        ...this.getInitialState(),
        showNotification: true,
       })
     } else if (type === 'security') {
      return this.setState({
        ...this.getInitialState(),
        showSecurity: true,
       })
     } else {
       this.setState({
        ...this.getInitialState(),
        showAccount: true,
       })
     }
   }

  render() {
    const { showAccount, showSecurity, showNotification } = this.state;

    return (
      <div className="settings">
        <div className="settings__sideNav">
          <ul className="nav__list">
            <li className={showAccount ? 'nav__item nav__item--active' : 'nav__item'} onClick={this.toggleActiveLink('account')}>Account</li>
            <li className={showSecurity ? 'nav__item nav__item--active' : 'nav__item'} onClick={this.toggleActiveLink('security')}>Security</li>
            <li className={showNotification ? 'nav__item nav__item--active' : 'nav__item'} onClick={this.toggleActiveLink('notification')}>Notifications</li>
          </ul>
        </div>
        <div className="settings__content">
          { showAccount && <Account /> }
          { showSecurity && <Security /> }
          { showNotification && <Notifications /> }
        </div>
      </div>
    );
  }
}

export default Settings;

