import React from 'react';
import { action } from '@storybook/addon-actions';

import { withAppLayout } from '../../../test-utils/storybook/decorators/withAppLayout';
import { EditCategoryView } from './EditCategoryView';
import { category } from '../../../mocks/categories.mock';

export default {
  title: 'views/EditCategoryView',
  component: EditCategoryView,
  decorators: [withAppLayout],
  includeStories: /.*Story$/
};

export const BaseStory = () => {
  return (
    <EditCategoryView
      item={category}
      onSaveClick={(values, setSubmitting) => {
        action('onSaveClick')(values);
        setSubmitting(false);
      }}
    />
  );
};
