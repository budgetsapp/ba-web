import React from 'react';
import { useHistory } from 'react-router-dom';

import { HomeView } from './HomeView';
import { HomeRouter } from './HomeRouter';
import { appPath } from '../../../services/app-path';

export function HomeViewContainer() {
  const history = useHistory();
  function handleManuItemClick(menuItem) {
    switch (menuItem) {
      case 'dashboard':
        history.push(appPath.dashboard());
        break;
      case 'categories':
        history.push(appPath.categories());
        break;
      default:
        break;
    }
  }

  return (
    <HomeView onMenuItemClick={handleManuItemClick}>
      <HomeRouter />
    </HomeView>
  );
}
