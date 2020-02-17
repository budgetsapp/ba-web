import React from 'react';
import { ExpensesPieChartContainer } from '../../molecules/ExpensesPieChart/ExpensesPieChartContainer';
import './Dashboard.css';

export function DashboardView() {
  return (
    <div className='dashboard-view__container'>
      <ExpensesPieChartContainer />
    </div>
  );
}
