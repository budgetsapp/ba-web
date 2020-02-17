import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { ExpensesPieChart } from './ExpensesPieChart';
import { pieChartData, getTotal } from '../../../mocks/charts.mock';
import { getCurrencySelect } from '../../../test-utils/storybook/knobs';

export default {
  title: 'molecules/ExpensesPieChart',
  component: ExpensesPieChart,
  decorators: [withKnobs],
  includeStories: /.*Story$/
};

export const BaseStory = () => {
  const currencyId = getCurrencySelect();

  return (
    <ExpensesPieChart
      total={getTotal(pieChartData)}
      data={pieChartData}
      currencyId={currencyId}
    />
  );
};
