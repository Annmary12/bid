// react libraries
import * as React from 'react';

// third party libraries
import PropTypes from 'prop-types';

// style
import './InputBox.scss';

const InputBox = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  name,
  label,
  type
}) => (
  <div className="form-input">
    <label className="form-input__label" htmlFor={name}>{label}:</label>
    <input
      type={type}
      className={
        errors[name] && touched[name] ? 'input input__error' : 'input'
      }
      name={name}
      onChange={handleChange}
      onBlur={handleBlur}
      value={values[name]}
    />
    {
      errors[name] && touched[name] && <div className="error_message">{errors[name]}</div>
    }
  </div>
)

InputBox.propTypes = {
  values: PropTypes.objectOf(PropTypes.string).isRequired,
  touched: PropTypes.objectOf(PropTypes.bool).isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string
};

InputBox.defaultProps = {
  type: 'text',
  values: {},
  touched: {},
  errors: {},
  isSubmitting: false
};

export default InputBox;
