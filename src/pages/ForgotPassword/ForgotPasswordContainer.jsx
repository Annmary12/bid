// react library
import * as React from 'react';

// third-party libraries
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withFormik } from 'formik';

// components
import AuthForm from '../../components/AuthForm';

// utils
import { resetPasswordSchema } from '../../utils/validation-schemas/auth';

export const ForgotPaswordForm  = {
  mapPropsToValues: () => ({
    email: '',
  }),

  validationSchema: resetPasswordSchema,

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  }
}


const mapStateToProps = () => ({
  formType: 'forgotPassword'
});

export default compose(
  connect(mapStateToProps),
  withFormik(ForgotPaswordForm)
)(AuthForm);
