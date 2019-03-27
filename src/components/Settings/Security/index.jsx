// react libraries
import React, { Component } from 'react';

// third-party libraries
import PropTypes  from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withFormik } from 'formik';

// components
import InputBox from '../../InputBox';
import Button from '../../Button';

// style
import './Security.scss';

export const SettingsSecurityConfig = {
  mapPropsToValues: () => ({
    password: 'Annmary',
    newPassword: '',
  }),

  /**
   * handles company form submit event
   *
   * @param {object} values
   * @returns {void}
   */
  handleSubmit: (values, { setSubmitting, props }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 500);
  }
}

class SettingsSecurity extends Component{
  constructor(props) {
    super(props);

    this.state = {
      hidden: true
    }

  }

  /**
   * Displays password text
   *
   * @returns {string}
   */
  displayPasswordText = () => this.state.hidden ? 'show' : 'hide';

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
      handleSubmit } = this.props;

    return (
      <div className="security">
        <h1 className="security__header">Security Settings</h1>
        <p>Type in your new password and the<b>Update Password</b> to set a new password</p>
        <hr className="vl"/>
        <form onSubmit={handleSubmit} className="security__form">
          <div className="security__row">
            <div className="security__field">
              <InputBox
                type="password"
                name="password"
                label="Old Password"
                labelClass="light"
                { ...this.props }
              />
            </div>
            <div className="security__field">
              <InputBox
                type={this.state.hidden ? "password" : "text"}
                name="newPassword"
                label="New Password"
                labelClass="light"
                rightLabel={this.displayPasswordText()}
                onClick={this.toggleShowPassword}
                { ...this.props }
              />
            </div>
          </div>
          <div className="security__row">
            <div className="security__button">
              <Button
                classes="btn btn__primary"
                type="submit"
                name={isSubmitting ? 'submitting..' : 'Update Password'}
                disabled={isSubmitting}
              />
            </div>
          </div>
        </form>
      </div>
    )
  }
}


SettingsSecurity.propTypes = {
  values: PropTypes.objectOf(PropTypes.string),
  touched: PropTypes.objectOf(PropTypes.bool),
  errors: PropTypes.objectOf(PropTypes.string),
  isSubmitting: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({
  role: 'vendor'
});

export default compose(
  connect(mapStateToProps),
  withFormik(SettingsSecurityConfig))(SettingsSecurity);

