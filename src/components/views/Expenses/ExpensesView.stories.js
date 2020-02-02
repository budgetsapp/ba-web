import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { ExpensesView } from './ExpensesView';
import { expenses } from '../../../mocks/expenses.mock';
import { withAppLayout } from '../../../test-utils/storybook/decorators/withAppLayout';

export default {
  title: 'views/ExpensesView',
  component: ExpensesView,
  decorators: [withKnobs, withAppLayout],
  includeStories: /.*Story$/
};

export const BaseStory = () => {
  const withItems = boolean('withItems', true);
  const items = withItems ? expenses : [];

  return <ExpensesView onAddClick={action('onAddClick')} items={items} />;
};

export const WithItemsStory = () => (
  <ExpensesView onAddClick={action('onAddClick')} items={expenses} />
);

export const WithoutItemsStory = () => (
  <ExpensesView onAddClick={action('onAddClick')} items={[]} />
);
