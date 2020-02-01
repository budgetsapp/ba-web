import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import {
  SigninViewContainer,
  CategoriesViewContainer,
  DashboardViewContainer,
  AddCategoryViewContainer
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
        path: '/categories',
        exact: true,
        component: CategoriesViewContainer
      },
      {
        path: '/categories/new',
        component: AddCategoryViewContainer
      }
    ]
  }
];

export function Router() {
  return (
    <BrowserRouter>
      <RoutesSwitch routes={routes} />
    </BrowserRouter>
  );
}
