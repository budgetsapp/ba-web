import React from 'react';
import { action } from '@storybook/addon-actions';

import { AddCategoryView } from './AddCategoryView';

export default {
  title: 'views/AddCategoryView',
  component: AddCategoryView,
  includeStories: /.*Story$/
};

export const BaseStory = () => (
  <AddCategoryView onSaveClick={action('onSaveClick')} />
);
