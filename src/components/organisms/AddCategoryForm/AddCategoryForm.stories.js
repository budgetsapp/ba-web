import React from 'react';
import { action } from '@storybook/addon-actions';

import { withAppLayout } from '../../../test-utils/storybook/decorators/withAppLayout';
import { AddCategoryForm } from './AddCategoryForm';

export default {
  title: 'organisms/AddCategoryForm',
  component: AddCategoryForm,
  decorators: [withAppLayout],
  includeStories: /.*Story$/
};

export const BaseStory = () => {
  return (
    <AddCategoryForm
      onSaveClick={(values, setSubmitting) => {
        action('onSaveClick')(values);
        setSubmitting(false);
      }}
      onCancelClick={action('onCancelClick')}
    />
  );
};
