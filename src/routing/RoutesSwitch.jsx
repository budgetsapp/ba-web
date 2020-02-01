import React from 'react';
import { Switch } from 'react-router-dom';

import { RouteWithSubroutes } from './RouteWithSubroutes';

export function RoutesSwitch({ routes }) {
  return (
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubroutes key={i} {...route} />
      ))}
    </Switch>
  );
}
