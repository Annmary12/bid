// react libraries
import * as React from 'react';

// third party packages
import { Route, Switch } from 'react-router-dom';

// components
import HomePage from '../pages/HomePage';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import CompanyForm from '../pages/CompanyForm';
import Settings from '../pages/Settings';
import Dashboard from '../pages/Dashboard';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/signup/:type" component={SignUp} />
    <Route path="/login" component={Login} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/company-signup" component={CompanyForm} />
    <Route path="/settings" component={Settings} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
)

export default Routes;
