// react library
import * as React from 'react';

// third-party libraries
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withFormik } from 'formik';

// components
import AuthForm from '../../components/AuthForm';

export const signUpForm  = {
  mapPropsToValues: () => ({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  }),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  }
}


const mapStateToProps = () => ({
  formType: 'signup'
});

export default compose(
  connect(mapStateToProps),
  withFormik(signUpForm)
)(AuthForm);
