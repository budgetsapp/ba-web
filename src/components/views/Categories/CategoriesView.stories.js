import React from 'react';
import { action } from '@storybook/addon-actions';

import { CategoriesView } from './CategoriesView';

export default {
  title: 'views/CategoriesView',
  component: CategoriesView,
  includeStories: /.*Story$/
};

export const BaseStory = () => (
  <CategoriesView onAddClick={action('onAddClick')} />
);
