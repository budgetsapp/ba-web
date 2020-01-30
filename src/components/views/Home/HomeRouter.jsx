import React from 'react';
import { Switch } from 'react-router-dom';

import { ProtectedRoute } from '../../../routing/ProtectedRoute';
import { appPath } from '../../../services/app-path';
import { CategoriesViewContainer, DashboardViewContainer } from '../../views';

export function HomeRouter() {
  return (
    <React.Fragment>
      <Switch>
        <ProtectedRoute exact path={appPath.dashboard()}>
          <DashboardViewContainer />
        </ProtectedRoute>
        <ProtectedRoute path={appPath.categories()}>
          <CategoriesViewContainer />
        </ProtectedRoute>
      </Switch>
    </React.Fragment>
  );
}
