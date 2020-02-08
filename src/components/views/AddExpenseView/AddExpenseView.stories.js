import React from 'react';

import { withAppLayout } from '../../../test-utils/storybook/decorators/withAppLayout';
import { AddExpenseView } from './AddExpenseView';

export default {
  title: 'views/AddExpenseView',
  component: AddExpenseView,
  decorators: [withAppLayout],
  includeStories: /.*Story$/
};

export const BaseStory = () => {
  return <AddExpenseView />;
};
