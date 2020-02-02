import React from 'react';
import PropTypes from 'prop-types';

import { NoItems } from '../../../components/molecules/NoItems/NoItems';
import { ExpensesList } from '../../../components/molecules/ExpensesList/ExpensesList';
import './Expenses.css';

ExpensesView.propTypes = {
  onAddClick: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};

ExpensesView.defaultProps = {};

export function ExpensesView({ onAddClick, items }) {
  return (
    <div className='expenses-view__container'>
      {items.length !== 0 ? (
        <ExpensesList items={items} onAddClick={onAddClick} />
      ) : (
        <NoItems onAddClick={onAddClick} />
      )}
    </div>
  );
}
