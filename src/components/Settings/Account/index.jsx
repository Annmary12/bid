// react labraries
import * as React from 'react';

// components
import InputBox from '../../InputBox';
import Button from '../../Button';

// third-party libraries
import PropTypes  from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withFormik } from 'formik';

// styles
import './Account.scss';

export const SettingsAccountConfig = {
  mapPropsToValues: () => ({
    firstname: 'Annmary',
    lastname: '',
    email: '',
    company: {
      'name': 'Andela',
      'website': '',
      'rcNumber': ''
    },
  }),

  /**
   * updates company information
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

const SettingsAccount = props =>  {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit } = props;

return (
  <div className="account">
    <h1 className="account__header">Account Settings</h1>
    <p>Edit the form fields then click <b>Update Profile</b> to save changes</p>
    <hr className="vl"/>
    <form onSubmit={handleSubmit} className="account__form">
      <div className="account__row">
        <div className="account__field">
          <InputBox
            type="text"
            name="firstname"
            label="First Name"
            labelClass="light"
            { ...props }
          />
        </div>
        <div className="account__field">
          <InputBox
            type="text"
            name="lastname"
            label="Last Name"
            labelClass="light"
            { ...props }
        />
        </div>
      </div>
      <div className="account__row">
        <div className="account__field">
          <InputBox
            type="email"
            name="email"
            label="Email Address"
            labelClass="light"
            { ...props }
          />
          <span className="account__change-email-text">Change Email Address</span>
        </div>
      </div>

      <h1 className="account__company">Company Details</h1>
      <div className="account__row">
        <div className="account__field">
          <InputBox
            type="text"
            name="company.name"
            label="Company Name"
            labelClass="light"
            // value='Andela'
            { ...props }
          />
        </div>
        <div className="account__field">
          <InputBox
            type="text"
            name="company.rcNumber"
            label="RC No."
            labelClass="light"
            { ...props }
        />
        </div>
      </div>
      <div className="account__row">
        <div className="account__field">
          <InputBox
            type="text"
            name="company.website"
            label="Company website"
            labelClass="light"
            { ...props }
          />
        </div>
      </div>

      <div className="account__row">
        <div className="account__button">
          <Button
            classes="btn btn__primary"
            type="submit"
            name={isSubmitting ? 'submitting..' : 'Update Profile'}
            disabled={isSubmitting}
           />
        </div>
      </div>
    </form>
  </div>
)}

SettingsAccount.propTypes = {
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
  withFormik(SettingsAccountConfig))(SettingsAccount);
