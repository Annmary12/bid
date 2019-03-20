// react library
import * as React from 'react';

// third-party libraries
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withFormik } from 'formik';

// components
import AuthForm from '../../components/AuthForm';

// utils
import { SignUpSchema } from '../../utils/validation-schemas/auth';

export const signUpForm  = {
  mapPropsToValues: () => ({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  }),

  validationSchema: SignUpSchema,

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
