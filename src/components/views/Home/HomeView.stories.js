import React from 'react';
import { action } from '@storybook/addon-actions';

import { HomeView } from './HomeView';

export default {
  title: 'views/HomeView',
  component: HomeView,
  includeStories: /.*Story$/
};

export const BaseStory = () => (
  <HomeView
    onMenuItemClick={menuItem => {
      action('onMenuItemClick')(menuItem);
    }}
  >
    <p>Content</p>
  </HomeView>
);
