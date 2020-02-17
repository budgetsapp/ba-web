import React, { useState } from 'react';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';

import { PieChart } from './PieChart';
import { pieChartData, getTotal } from '../../../mocks/charts.mock';

export default {
  title: 'charts/PieChart',
  component: PieChart,
  decorators: [withKnobs],
  includeStories: /.*Story$/
};

export const BaseStory = () => {
  const showCustomTotal = boolean('showCustomTotal', false);
  const total = number('total', 1000);
  return (
    <PieChart
      data={pieChartData}
      total={showCustomTotal ? total : getTotal(pieChartData)}
    />
  );
};
