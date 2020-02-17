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
    component: SigninView,
    documentTitle: ''
  },
  {
    path: appPath.signup(),
    component: () => <span>Sign Up</span>,
    documentTitle: ''
  },
  {
    path: appPath.dashboard(),
    component: AppLayoutContainer, // works as wrapper
    protected: true,
    routes: [
      {
        path: appPath.dashboard(),
        exact: true,
        component: DashboardView,
        documentTitle: 'Dashboard'
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
        component: CategoriesView,
        documentTitle: 'Categories'
      },
      {
        path: appPath.addCategory(),
        component: AddCategoryView,
        documentTitle: 'New category'
      },
      {
        path: appPath.editCategory().template,
        component: EditCategoryView,
        documentTitle: 'Category'
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
        component: ExpensesView,
        documentTitle: 'Expenses'
      },
      {
        path: appPath.addExpense(),
        component: AddExpenseView,
        documentTitle: 'New expense'
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
