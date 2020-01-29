import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { SigninViewContainer } from './components/views';

export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/'>
          <SigninViewContainer />
        </Route>
        <Route path='/signup'>
          <span>Sign Up</span>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
