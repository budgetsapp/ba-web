import React from 'react';
import { action } from '@storybook/addon-actions';

import { AppLayout } from './AppLayout';

export default {
  title: 'molecules/AppLayout',
  component: AppLayout,
  includeStories: /.*Story$/
};

export const BaseStory = () => (
  <AppLayout
    onMenuItemClick={menuItem => {
      action('onMenuItemClick')(menuItem);
    }}
  >
    <p>Content</p>
  </AppLayout>
);
