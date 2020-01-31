import React from 'react';
import { action } from '@storybook/addon-actions';

import { CategoriesList } from './CategoriesList';
import { categories } from '../../../mocks/categories.mock';

export default {
  title: 'molecules/CategoriesList',
  component: CategoriesList,
  includeStories: /.*Story$/
};

export const BaseStory = () => (
  <CategoriesList onAddClick={action('onAddClick')} items={categories} />
);
