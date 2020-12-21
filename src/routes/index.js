import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
// import Home from '../pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        {/* <PrivateRoute path='/' component={Home} /> */}
      </Switch>
    </BrowserRouter>
  );
}
