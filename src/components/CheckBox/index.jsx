// react libraries
import * as React from 'react';

import PropTypes from 'prop-types';

// styles
import './CheckBox.scss';

const CheckBox = ({ name, checked, handleChange}) => (
  <label htmlFor="checkbox" className="checkbox">
    <input
      type="checkbox"
      className="checkbox__input"
      name={name}
      checked={checked}
      onChange={handleChange}
    />
    <span className="checkbox__checkmark"></span>
  </label>
)

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
}

export default CheckBox;
