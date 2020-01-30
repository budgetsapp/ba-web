import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { SigninViewContainer, HomeViewContainer } from './components/views';
import { ProtectedRoute } from './routing/ProtectedRoute';
import { appPath } from './services/app-path';

export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={appPath.login()}>
          <SigninViewContainer />
        </Route>
        <Route path={appPath.signup()}>
          <span>Sign Up</span>
        </Route>
        <ProtectedRoute path={appPath.dashboard()}>
          <HomeViewContainer />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}
