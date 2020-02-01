import React from 'react';
import { action } from '@storybook/addon-actions';

import { AppLayout } from '../../../components/molecules/AppLayout/AppLayout';

export const withAppLayout = Component => {
  return (
    <AppLayout
      onMenuItemClick={menuItem => {
        action('onMenuItemClick')(menuItem);
      }}
    >
      <Component />
    </AppLayout>
  );
};
