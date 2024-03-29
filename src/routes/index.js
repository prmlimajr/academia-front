import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import UserProfile from '../pages/Profile/UserProfile';
import InstructorProfile from '../pages/Profile/InstructorProfile';
import Quiz from '../pages/Quiz';
import Home from '../pages/Home';
import Athlete from '../pages/Athlete';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/instructor' exact component={InstructorProfile} />
        <Route path='/quiz' exact component={Quiz} />
        <PrivateRoute path='/' exact component={Home} />
        <PrivateRoute path='/athlete/:id' exact component={Athlete} />
        <PrivateRoute path='/athlete' exact component={UserProfile} />
      </Switch>
    </BrowserRouter>
  );
}
