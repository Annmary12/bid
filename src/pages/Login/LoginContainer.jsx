// react library
import * as React from 'react';

// third-party libraries
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withFormik } from 'formik';

// components
import AuthForm from '../../components/AuthForm';

// utils
import { loginSchema } from '../../utils/validation-schemas/auth';

export const LoginForm  = {
  mapPropsToValues: () => ({
    email: '',
    password: ''
  }),

  validationSchema: loginSchema,

  /**
   * handles company form submit event
   *
   * @param {object} values
   * @returns {void}
   */
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  }
}


const mapStateToProps = () => ({
  formType: 'login'
});

export default compose(
  connect(mapStateToProps),
  withFormik(LoginForm)
)(AuthForm);
