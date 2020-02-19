import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useIdentity } from 'ba-identity-react-hooks';

import { appPath } from '../services/app-path';
import { setDocumentTitleWithAppName } from '../services/dom';

export function RouteWithSubroutes(route) {
  const identity = useIdentity();
  setDocumentTitleWithAppName(route.documentTitle);
  return (
    <Route
      path={route.path}
      exact={route.exact || false}
      render={props =>
        !route.protected || !identity.getIsRefreshTokenExpired() ? (
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
