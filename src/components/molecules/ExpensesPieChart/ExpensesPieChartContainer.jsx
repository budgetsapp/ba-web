import React from 'react';
import { ExpensesPieChart } from './ExpensesPieChart';

import { pieChartData, getTotal } from '../../../mocks/charts.mock';

export function ExpensesPieChartContainer() {
  return (
    <ExpensesPieChart total={getTotal(pieChartData)} data={pieChartData} />
  );
}
