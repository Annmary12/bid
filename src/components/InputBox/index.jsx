// react libraries
import * as React from 'react';
import { Link } from 'react-router-dom';

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
  type,
  rightLabel,
  bottomLabel,
  link,
  onClick,
}) => (
  <div className="form-input">
    <label className="form-input__label" htmlFor={name}>
      {label}:
     <p className="form-input__label--right" onClick={onClick}>{rightLabel}</p>
    </label>
    <div className="form-input__input">
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
      { bottomLabel && <Link to={link} className="form-input__bottom">{bottomLabel}</Link>}
      {
        errors[name] && touched[name] && <span className="input__error--message">{errors[name]}</span>
      }
    </div>
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
  type: PropTypes.string,
  rightLabel: PropTypes.string,
  onClick: PropTypes.func,
  bottomLabel: PropTypes.string,
  link: PropTypes.string,
};

InputBox.defaultProps = {
  type: 'text',
  values: {},
  touched: {},
  errors: {},
  isSubmitting: false
};

export default InputBox;
