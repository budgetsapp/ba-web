import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { ExpensesPieChart } from './ExpensesPieChart';
import { pieChartData, getTotal } from '../../../mocks/charts.mock';

export default {
  title: 'molecules/ExpensesPieChart',
  component: ExpensesPieChart,
  decorators: [withKnobs],
  includeStories: /.*Story$/
};

export const BaseStory = () => {
  return (
    <ExpensesPieChart total={getTotal(pieChartData)} data={pieChartData} />
  );
};
