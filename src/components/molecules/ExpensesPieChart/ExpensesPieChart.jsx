import React from 'react';
import PropTypes from 'prop-types';

import { PieChart } from '../../charts/PieChart/PieChart';

import './ExpensesPieChart.css';

ExpensesPieChart.propTypes = {
  total: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.number
    })
  ).isRequired,
  currencyId: PropTypes.string.isRequired
};

export function ExpensesPieChart({ total, data, currencyId }) {
  return <PieChart total={total} data={data} currencyId={currencyId} />;
}
