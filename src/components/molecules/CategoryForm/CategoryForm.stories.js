import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import { CategoryForm } from './CategoryForm';
import { category } from '../../../mocks/categories.mock';

export default {
  title: 'molecules/CategoryForm',
  component: CategoryForm,
  decorator: [withKnobs],
  includeStories: /.*Story$/
};

export const BaseStory = () => {
  // TODO: Fix knobs
  const title = text('title', 'Adding new Category');
  return (
    <CategoryForm
      onSaveClick={(values, setSubmitting) => {
        setSubmitting(false);
        action('onSaveClick')(values);
      }}
      title={title}
      item={category}
    />
  );
};
