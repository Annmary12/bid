// react libraries
import * as React from 'react';

// third party packages
import { Route, Switch } from 'react-router-dom';

// components
import HomePage from '../pages/HomePage';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/signup" component={SignUp} />
    <Route path="/login" component={Login} />
    <Route path="/forgot-password" component={ForgotPassword} />
  </Switch>
)

export default Routes;
