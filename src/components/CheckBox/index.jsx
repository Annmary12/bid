// react libraries
import * as React from 'react';

import PropTypes from 'prop-types';

// styles
import './CheckBox.scss';

const CheckBox = ({ value, name}) => (
  <label htmlFor="checkbox" className="checkbox">
    <input type="checkbox" className="checkbox__input" checked="checked"/>
    <span className="checkbox__checkmark"></span> One
  </label>
)

export default CheckBox;
