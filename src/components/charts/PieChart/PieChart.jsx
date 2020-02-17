import React from 'react';
import {
  ResponsiveContainer,
  PieChart as PieChartRecharts,
  Pie,
  Tooltip,
  Cell
} from 'recharts';
import PropTypes from 'prop-types';

import { colors } from '../../../consts/colors';

import './PieChart.css';

PieChart.propTypes = {
  total: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.number
    })
  ).isRequired
};

export function PieChart({ total, data }) {
  const radius = 200;
  return (
    <div className='pie-chart__container'>
      <div className='pie-chart__summary'>
        <span className='pie-chart__summary__total-title'>Total:</span>
        <span className='pie-chart__summary__total-value'>{total}</span>
      </div>
      <ResponsiveContainer>
        <PieChartRecharts>
          <Pie
            isAnimationActive={true}
            data={data}
            innerRadius={radius / 2}
            outerRadius={radius}
            // legendType={'rect'}
            labelLine={true}
            label={label => {
              return `${label.name} ${label.value}`;
            }}
            animationDuration={700}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Pie>
          <Tooltip />
          {/* <Legend verticalAlign='bottom' height={36} /> */}
        </PieChartRecharts>
      </ResponsiveContainer>
    </div>
  );
}
