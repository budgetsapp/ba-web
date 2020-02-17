import React from 'react';
import { ExpensesPieChart } from './ExpensesPieChart';

import { pieChartData, getTotal } from '../../../mocks/charts.mock';
import { useSettings } from '../../../services/settings';

export function ExpensesPieChartContainer() {
  const { currencyId } = useSettings();
  return (
    <ExpensesPieChart
      total={getTotal(pieChartData)}
      data={pieChartData}
      currencyId={currencyId}
    />
  );
}
