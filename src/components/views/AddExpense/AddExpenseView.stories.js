import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import { withAppLayout } from '../../../test-utils/storybook/decorators/withAppLayout';
import { AddExpenseView } from './AddExpenseView';
import { categories, queryCategories } from '../../../mocks/categories.mock';

export default {
  title: 'views/AddExpenseView',
  component: AddExpenseView,
  decorators: [withAppLayout],
  includeStories: /.*Story$/
};

export const BaseStory = () => {
  const [categoriesResponse, setCategoriesResponse] = useState([]);
  function onCategoryQueryChange(query) {
    setCategoriesResponse(queryCategories(categories, query));
  }

  return (
    <AddExpenseView
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
