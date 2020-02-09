import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import {
  SigninView,
  CategoriesView,
  DashboardView,
  AddCategoryView,
  EditCategoryView,
  ExpensesView,
  AddExpenseView
} from './components/views';
import { AppLayoutContainer } from './components/molecules/AppLayout/AppLayoutContainer';
import { RoutesSwitch } from './routing/RoutesSwitch';
import { appPath } from './services/app-path';

const routes = [
  {
    path: appPath.login(),
    component: SigninView
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
        path: appPath.dashboard(),
        exact: true,
        component: DashboardView
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
        component: CategoriesView
      },
      {
        path: appPath.addCategory(),
        component: AddCategoryView
      },
      {
        path: appPath.editCategory().template,
        component: EditCategoryView
      }
    ]
  },
  {
    path: appPath.expenses(),
    component: AppLayoutContainer, // works as wrapper
    protected: true,
    routes: [
      {
        path: appPath.expenses(),
        exact: true,
        component: ExpensesView
      },
      {
        path: appPath.addExpense(),
        component: AddExpenseView
      }
    ]
  }
];

export function Router() {
  return (
    <BrowserRouter>
      <RoutesSwitch routes={routes} />
      <Route path='/' exact>
        <Redirect
          to={{
            pathname: appPath.login()
          }}
        />
      </Route>
    </BrowserRouter>
  );
}
