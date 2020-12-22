import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Sidebar from '../components/Sidebar';
import { isAuthenticated } from '../services/auth';

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <div className='row'>
            <Sidebar />
            <Component {...props} />
          </div>
        ) : (
          // <Redirect
          //   to={{ pathname: '/login', state: { from: props.location } }}
          // />
          <div className='row'>
            <Sidebar />
            <Component {...props} />
          </div>
        )
      }
    />
  );
}
