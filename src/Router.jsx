import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import {
  SigninViewContainer,
  CategoriesViewContainer,
  DashboardViewContainer,
  AddCategoryViewContainer,
  EditCategoryViewContainer
} from './components/views';
import { AppLayoutContainer } from './components/molecules/AppLayout/AppLayoutContainer';
import { RoutesSwitch } from './routing/RoutesSwitch';
import { appPath } from './services/app-path';

const routes = [
  {
    path: appPath.login(),
    component: SigninViewContainer
  },
  {
    path: appPath.signup(),
    component: () => <span>Sign Up</span>
  },
  {
    path: appPath.dashboard(),
    component: AppLayoutContainer, // works as wrapper
    protected: true,
    routes: [
      {
        path: '/dashboard',
        exact: true,
        component: DashboardViewContainer
      }
    ]
  },
  {
    path: appPath.categories(),
    component: AppLayoutContainer, // works as wrapper
    protected: true,
    routes: [
      {
        path: appPath.categories(),
        exact: true,
        component: CategoriesViewContainer
      },
      {
        path: appPath.addCategory(),
        component: AddCategoryViewContainer
      },
      {
        path: appPath.editCategory().template,
        component: EditCategoryViewContainer
      }
    ]
  }
];

export function Router() {
  return (
    <BrowserRouter>
      <RoutesSwitch routes={routes} />
      <Route>
        <Redirect
          to={{
            pathname: appPath.login()
          }}
        />
      </Route>
    </BrowserRouter>
  );
}
