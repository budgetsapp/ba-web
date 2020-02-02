import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import { ExpenseForm } from './ExpenseForm';
import { categories, queryCategories } from '../../../mocks/categories.mock';

export default {
  title: 'molecules/ExpenseForm',
  component: ExpenseForm,
  decorators: [withKnobs],
  includeStories: /.*Story$/
};

export const BaseStory = () => {
  const pageTitle = text('pageTitle', 'Adding new Expense');
  const submitButtonTitle = text('submitButtonTitle', 'Save');

  const [categoriesResponse, setCategoriesResponse] = useState([]);
  function onCategoryQueryChange(query) {
    setCategoriesResponse(queryCategories(categories, query));
  }

  return (
    <ExpenseForm
      onSaveClick={(values, setSubmitting) => {
        setSubmitting(false);
        action('onSaveClick')(values);
      }}
      onCancelClick={action('onCancelClick')}
      pageTitle={pageTitle}
      submitButtonTitle={submitButtonTitle}
      categories={categoriesResponse}
      onCategoryQueryChange={onCategoryQueryChange}
    />
  );
};
