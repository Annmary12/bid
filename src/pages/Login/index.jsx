// react libraries
import * as React from 'react';
import { Link } from 'react-router-dom';

// components
import LoginContainer from './LoginContainer';

// style
import './Login.scss';

const Login = () =>  (
  <div className="login">
    <h2 className="login__title">Welcome back,</h2>
    <p className="login__sub-title">Log in to manager your tenders</p>
    <LoginContainer />
    <footer>
      <p>Don't have an account? <Link to="/signup" className="text-green">Create one</Link></p>
    </footer>
  </div>
)

export default Login;
