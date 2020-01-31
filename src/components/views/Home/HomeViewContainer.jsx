import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { HomeView } from './HomeView';
import { HomeRouter } from './HomeRouter';
import { appPath } from '../../../services/app-path';
import { MenuItems } from './menu-items';

export function HomeViewContainer() {
  const history = useHistory();
  const location = useLocation();

  function handleManuItemClick(menuItem) {
    switch (menuItem) {
      case MenuItems.DASHBOARD:
        history.push(appPath.dashboard());
        break;
      case MenuItems.CATEGORIES:
        history.push(appPath.categories());
        break;
      default:
        break;
    }
  }

  function getIsMenuItemActive(currentPath) {
    return function(menuItem) {
      switch (menuItem) {
        case MenuItems.DASHBOARD:
          return currentPath === appPath.dashboard();
        case MenuItems.CATEGORIES:
          return currentPath === appPath.categories();
        default:
          return false;
      }
    };
  }

  return (
    <HomeView
      onMenuItemClick={handleManuItemClick}
      getIsActive={getIsMenuItemActive(location.pathname)}
    >
      <HomeRouter />
    </HomeView>
  );
}
