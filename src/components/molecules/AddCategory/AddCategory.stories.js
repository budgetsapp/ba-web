import React from 'react';
import { action } from '@storybook/addon-actions';

import { AddCategory } from './AddCategory';

export default {
  title: 'molecules/AddCategory',
  component: AddCategory,
  includeStories: /.*Story$/
};

export const BaseStory = () => (
  <AddCategory onSaveClick={action('onSaveClick')} />
);
