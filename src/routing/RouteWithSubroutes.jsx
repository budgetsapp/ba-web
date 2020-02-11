import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../services/auth';
import { appPath } from '../services/app-path';

export function RouteWithSubroutes(route) {
  const auth = useAuth();
  return (
    <Route
      path={route.path}
      exact={route.exact || false}
      render={props =>
        !route.protected || !auth.getIsRefreshTokenExpired() ? (
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
