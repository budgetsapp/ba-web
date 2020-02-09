import React from 'react';
import { action } from '@storybook/addon-actions';

import { withAppLayout } from '../../../test-utils/storybook/decorators/withAppLayout';
import { AddCategoryView } from './AddCategoryView';

export default {
  title: 'views/AddCategoryView',
  component: AddCategoryView,
  decorators: [withAppLayout],
  includeStories: /.*Story$/
};

export const BaseStory = () => {
  return (
    <AddCategoryView
      onSaveClick={(values, setSubmitting) => {
        action('onSaveClick')(values);
        setSubmitting(false);
      }}
      onCancelClick={action('onCancelClick')}
    />
  );
};
