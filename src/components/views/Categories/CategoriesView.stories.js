import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { CategoriesView } from './CategoriesView';
import { categories } from '../../../mocks/categories.mock';
import { withAppLayout } from '../../../test-utils/storybook/decorators/withAppLayout';

export default {
  title: 'views/CategoriesView',
  component: CategoriesView,
  decorators: [withKnobs, withAppLayout],
  includeStories: /.*Story$/
};

export const BaseStory = () => {
  const withItems = boolean('withItems', true);
  const items = withItems ? categories : [];

  return <CategoriesView onAddClick={action('onAddClick')} items={items} />;
};

export const WithItemsStory = () => (
  <CategoriesView onAddClick={action('onAddClick')} items={categories} />
);

export const WithoutItemsStory = () => (
  <CategoriesView onAddClick={action('onAddClick')} items={[]} />
);
