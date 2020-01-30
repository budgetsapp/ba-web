import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import { getIsAuthenticated } from '../services/auth';
import { appPath } from '../services/app-path';

export function ProtectedRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        getIsAuthenticated() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: appPath.login(),
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
