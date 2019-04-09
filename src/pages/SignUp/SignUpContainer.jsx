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

// actions
import { Signup } from '../../store/modules/auth';

export const signUpForm  = {
  mapPropsToValues: () => ({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }),

  validationSchema: SignUpSchema,

  handleSubmit: (values, { setSubmitting, props }) => {
    const { type } = props;
    props.Signup(values, type).then(() => {
      console.log('success');
     //  props.router.history.push('/company-signup')
    });
  }
}


const mapStateToProps = () => ({
  formType: 'signup'
});

export default compose(
  connect(mapStateToProps, { Signup }),
  withFormik(signUpForm)
)(AuthForm);
