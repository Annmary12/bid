//  react libraires
import React, { Component } from 'react';

// third party libraries
import PropTypes from 'prop-types';

// components
import InputBox from '../InputBox';
import Button from '../Button';

// style
import './AuthForm.scss';

class AuthForm extends Component{
  /**
   *  Gets the submit button text
   *
   * @returns {string}
   */
  SubmitButtonText = () => {
    switch(this.props.type) {
      case 'signup':
        return 'Create Account';
      case 'login':
        return 'Log In';
      case 'forgotPassword':
        return 'Send Password Reset Link';
      default:
        return 'Create Account';
    }
  }

  /**
   * checks if is a signup form
   *
   * @returns {boolean}
   */
  isSignUp = () => this.props.type === 'signup';

  /**
   * checks if is a login form
   *
   * @returns {boolean}
   */
  isLogin = () => this.props.type === 'login';

  /**
   * checks if is a password reset form
   *
   * @returns {boolean}
   */
  isPasswordReset = () => (this.props.type === 'forgotPassword');

  render() {
    const {
      values,
      touched,
      errors,
      isSubmitting,
      handleChange,
      handleSubmit
    } = this.props;
    return console.log(this.isPasswordReset()) || (
      <form onSubmit={handleSubmit} className="form">
        {
          this.isSignUp()  &&
          <React.Fragment>
            <InputBox
            type="text"
            name="firstname"
            label="First Name"
            { ...this.props }
          />

          <InputBox
            type="text"
            name="lastname"
            label="Last Name"
            { ...this.props }
          />
          </React.Fragment>
        }
        {
          <InputBox
            type="email"
            name="email"
            label={this.isSignUp() ? 'Company Email Address' : 'Email Address'}
            { ...this.props }
          />
        }
        {
          !this.isPasswordReset() &&
          <InputBox
          type="password"
          name="password"
          label={this.isSignUp() ? 'Create Password' : 'Password'}
          { ...this.props }
        />
        }
        <Button
          classes="btn btn__primary"
          type="submit"
          name={isSubmitting ? 'loading..' : this.SubmitButtonText()}
          disabled={isSubmitting}
        />
      </form>
    );
  }
}

AuthForm.propTypes = {
  type: PropTypes.string,
  values: PropTypes.objectOf(PropTypes.string),
  touched: PropTypes.objectOf(PropTypes.bool),
  errors: PropTypes.objectOf(PropTypes.string),
  isSubmitting: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

AuthForm.defaultProps = {
  type: '',
  values: {},
  touched: {},
  errors: {},
  isSubmitting: false
};

export default AuthForm;
