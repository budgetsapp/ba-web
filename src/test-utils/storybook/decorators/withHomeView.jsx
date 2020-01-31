import React from 'react';
import { action } from '@storybook/addon-actions';

import { HomeView } from '../../../components/views/Home/HomeView';

export const withHomeView = Component => {
  return (
    <HomeView
      onMenuItemClick={menuItem => {
        action('onMenuItemClick')(menuItem);
      }}
    >
      <Component />
    </HomeView>
  );
};
