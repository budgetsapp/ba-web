import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { getIsAuthenticated } from '../services/auth';
import { appPath } from '../services/app-path';

export function RouteWithSubroutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact || false}
      render={props =>
        !route.protected || getIsAuthenticated() ? (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        ) : (
          <Redirect
            to={{
              pathname: appPath.login(),
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}
