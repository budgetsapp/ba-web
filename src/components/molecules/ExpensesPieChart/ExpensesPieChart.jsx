import React from 'react';

import { PieChart } from '../../charts/PieChart/PieChart';

import './ExpensesPieChart.css';

export function ExpensesPieChart({ total, data }) {
  return <PieChart total={total} data={data} />;
}
