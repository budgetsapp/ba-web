import React from 'react';
import { action } from '@storybook/addon-actions';

import { CategoryForm } from './CategoryForm';
import { category } from '../../../mocks/categories.mock';

export default {
  title: 'molecules/CategoryForm',
  component: CategoryForm,
  includeStories: /.*Story$/
};

export const BaseStory = () => (
  <CategoryForm onSaveClick={action('onSaveClick')} item={category} />
);
