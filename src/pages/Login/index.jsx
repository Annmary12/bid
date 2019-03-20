// react libraries
import * as React from 'react';

// components
import LoginContainer from './LoginContainer';

// style
import './Login.scss';

const Login = () => (
  <div className="login">
    <h2 className="login__title">Welcome back,</h2>
    <p className="login__sub-title">Log in to manager your tenders</p>
    <LoginContainer />
    <footer>
      <p>Don't have an account? <span className="text-green">Create one</span></p>
    </footer>
  </div>
)

export default Login;
