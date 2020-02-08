import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import { withAppLayout } from '../../../test-utils/storybook/decorators/withAppLayout';
import { AddExpenseForm } from './AddExpenseForm';
import { categories, queryCategories } from '../../../mocks/categories.mock';

export default {
  title: 'organisms/AddExpenseForm',
  component: AddExpenseForm,
  decorators: [withAppLayout],
  includeStories: /.*Story$/
};

export const BaseStory = () => {
  const [categoriesResponse, setCategoriesResponse] = useState([]);
  function onCategoryQueryChange(query) {
    setCategoriesResponse(queryCategories(categories, query));
  }

  return (
    <AddExpenseForm
      onSaveClick={(values, setSubmitting) => {
        action('onSaveClick')(values);
        setSubmitting(false);
      }}
      onCancelClick={action('onCancelClick')}
      categories={categoriesResponse}
      onCategoryQueryChange={onCategoryQueryChange}
    />
  );
};
