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
  constructor(props) {
    super(props);

    this.state = {
      hidden: true
    }
  }

  /**
   *  Gets the submit button text
   *
   * @returns {string}
   */
  SubmitButtonText = () => {
    switch(this.props.formType) {
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
   * Displays password text
   *
   * @returns {string}
   */
  displayPasswordText = () => this.state.hidden ? 'show' : 'hide';

  /**
   * Checks if is a signup form
   *
   * @returns {boolean}
   */
  isSignUp = () => this.props.formType === 'signup';

  /**
   * Checks if is a login form
   *
   * @returns {boolean}
   */
  isLogin = () => this.props.formType === 'login';

  /**
   * checks if is a password reset form
   *
   * @returns {boolean}
   */
  isPasswordReset = () => (this.props.formType === 'forgotPassword');

  /**
   * toggles the password
   *
   * @returns {void}
   */
  toggleShowPassword = () => (
    this.setState({ hidden: !this.state.hidden })
  )

  render() {
    const {
      values,
      touched,
      errors,
      isSubmitting,
      handleChange,
      handleSubmit
    } = this.props;

    return (
      <form onSubmit={handleSubmit} className="form">
        {
          this.isSignUp()  &&
          <React.Fragment>
            <InputBox
            type="text"
            name="firstName"
            label="First Name"
            { ...this.props }
          />

          <InputBox
            type="text"
            name="lastName"
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
            type={this.state.hidden ? "password" : "text"}
            name="password"
            label={this.isSignUp() ? 'Create Password' : 'Password'}
            rightLabel={this.isSignUp() ? this.displayPasswordText() : ''}
            bottomLabel={this.isLogin() ? "Forgot Password" : ''}
            link={this.isLogin() ? "/forgot-password" : ''}
            onClick={this.toggleShowPassword}
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
  formType: PropTypes.string,
  values: PropTypes.objectOf(PropTypes.string),
  touched: PropTypes.objectOf(PropTypes.bool),
  errors: PropTypes.objectOf(PropTypes.string),
  isSubmitting: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

AuthForm.defaultProps = {
  formType: '',
  values: {},
  touched: {},
  errors: {},
  isSubmitting: false
};

export default AuthForm;
