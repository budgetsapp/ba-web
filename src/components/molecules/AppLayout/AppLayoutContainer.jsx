import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { AppLayout } from './AppLayout';
import { appPath } from '../../../services/app-path';
import { MenuItems } from './menu-items';
import { RoutesSwitch } from '../../../routing/RoutesSwitch';
import { useAuth, useCurrentUser } from '../../../services/auth';

export function AppLayoutContainer({ routes }) {
  const history = useHistory();
  const location = useLocation();
  const auth = useAuth();
  const currentUser = useCurrentUser();

  function handleManuItemClick(menuItem) {
    switch (menuItem) {
      case MenuItems.DASHBOARD:
        history.push(appPath.dashboard());
        break;
      case MenuItems.CATEGORIES:
        history.push(appPath.categories());
        break;
      case MenuItems.EXPENSES:
        history.push(appPath.expenses());
        break;
      case MenuItems.LOGOUT:
        auth.logout();
        history.push(appPath.login());
        break;
      default:
        break;
    }
  }

  function getIsMenuItemActive(currentPath) {
    return function(menuItem) {
      switch (menuItem) {
        case MenuItems.DASHBOARD:
          return currentPath.includes(appPath.dashboard());
        case MenuItems.CATEGORIES:
          return currentPath.includes(appPath.categories());
        case MenuItems.EXPENSES:
          return currentPath.includes(appPath.expenses());
        default:
          return false;
      }
    };
  }

  return (
    <AppLayout
      onMenuItemClick={handleManuItemClick}
      getIsActive={getIsMenuItemActive(location.pathname)}
      userData={currentUser}
    >
      <RoutesSwitch routes={routes} />
    </AppLayout>
  );
}
