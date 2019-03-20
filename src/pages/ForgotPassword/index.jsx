// react libraries
import * as React from 'react';

// components
import ForgotPasswordContainer from './ForgotPasswordContainer';

// style
import './ForgotPassword.scss';

const Login = () => (
  <div className="forgot-password">
    <h2 className="forgot-password__title">We're here to get you back into your account</h2>
    <p className="forgot-password__sub-title">Please enter your email you registered your account with. We'll send a password reset link to create a new password</p>
    <ForgotPasswordContainer />
    <footer>
      <p>Don't have an account? <span className="text-green">Create one</span></p>
    </footer>
  </div>
)

export default Login;
