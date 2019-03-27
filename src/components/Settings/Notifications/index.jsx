// react libraries
import * as React from 'react';

// third-party libraries
import PropTypes  from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withFormik } from 'formik';

// components
import CheckBox from '../../CheckBox';
import Button from '../../Button';

// style
import './Notifications.scss';

export const SettingsNotificationConfig = {
  mapPropsToValues: () => ({
    sendEmailNotification: true,
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



const SettingsNotifications = props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit } = props;

return (
  <div className="notification">
    <h1 className="notification__header">Notification Settings</h1>
    <p>Select what you want to get notified on click <b>Update Settings</b> to save changes</p>
    <hr className="vl"/>
    <form onSubmit={handleSubmit} className="account__form">
      <p>Notify me when:</p>
      <div className="notification__content">
        <div className="notification__item">
          <input type="checkbox" checked/>
          <label className="notification__label">A tender advert in will soon expire</label>
        </div>
        <div className="notification__item">
          <input type="checkbox" />
          <label className="notification__label">A vendor has indicated interest in my tender advert</label>
        </div>
        <div className="notification__item">
          <input type="checkbox"/>
          <label className="notification__label">A vendor has submitted a bid</label>
        </div>
        <div className="notification__item notification__email">
          <input type="checkbox" checked/>
          <label className="notification__label">Send email notifications too</label>
        </div>
        <div className="notification__button">
          <Button
            classes="btn btn__primary"
            type="submit"
            name={isSubmitting ? 'submitting..' : 'Update Settings'}
            disabled={isSubmitting}
          />
        </div>
      </div>
      </form>
  </div>
)}

SettingsNotifications.propTypes = {
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
  withFormik(SettingsNotificationConfig))(SettingsNotifications);
