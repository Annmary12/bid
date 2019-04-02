// react libraries
import * as React from 'react';

// third-party libraries
import PropTypes from 'prop-types';

// styles
import './Label.scss';


const Label = ({ children, type }) => (
  <label className={`label label__${type}`}>
    { children }
  </label>
)

Notification.propTypes = {
  children: PropTypes.array,
}

export default Label;
