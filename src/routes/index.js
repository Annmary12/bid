// react libraries
import * as React from 'react';

// third party packages
import { Route, Switch } from 'react-router-dom';

// components
import HomePage from '../pages/HomePage';
import SignUp from '../pages/buyer/SignUp';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/signup" component={SignUp} />
  </Switch>
)

export default Routes;
