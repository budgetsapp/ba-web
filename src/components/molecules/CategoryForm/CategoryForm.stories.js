import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import { CategoryForm } from './CategoryForm';
import { category } from '../../../mocks/categories.mock';

export default {
  title: 'molecules/CategoryForm',
  component: CategoryForm,
  decorators: [withKnobs],
  includeStories: /.*Story$/
};

export const BaseStory = () => {
  const pageTitle = text('pageTitle', 'Adding new Category');
  const submitButtonTitle = text('submitButtonTitle', 'Save');
  return (
    <CategoryForm
      onSaveClick={(values, setSubmitting) => {
        setSubmitting(false);
        action('onSaveClick')(values);
      }}
      pageTitle={pageTitle}
      submitButtonTitle={submitButtonTitle}
      item={category}
    />
  );
};
