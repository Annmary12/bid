// react libraries
import * as React from 'react';

// third-party libraries
import PropTypes from 'prop-types';

// styles
import './Notification.scss';


const Notification = ({ children }) => (
  <div className="notification">
    { children }
  </div>
)

Notification.propTypes = {
  children: PropTypes.array,
}

export default Notification;
