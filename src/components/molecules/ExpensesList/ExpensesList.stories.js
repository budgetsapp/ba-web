import React from 'react';
import { action } from '@storybook/addon-actions';

import { ExpensesList } from './ExpensesList';
import { expenses } from '../../../mocks/expenses.mock';

export default {
  title: 'molecules/ExpensesList',
  component: ExpensesList,
  includeStories: /.*Story$/
};

export const BaseStory = () => (
  <ExpensesList onAddClick={action('onAddClick')} items={expenses} />
);
