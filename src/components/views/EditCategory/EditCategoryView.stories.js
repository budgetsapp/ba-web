import React from 'react';
import { action } from '@storybook/addon-actions';

import { EditCategoryView } from './EditCategoryView';

export default {
  title: 'views/EditCategoryView',
  component: EditCategoryView,
  includeStories: /.*Story$/
};

export const BaseStory = () => (
  <EditCategoryView onSaveClick={action('onSaveClick')} />
);
