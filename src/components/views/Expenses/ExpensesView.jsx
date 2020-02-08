import React from 'react';
import PropTypes from 'prop-types';

import { NoItems } from '../../../components/molecules/NoItems/NoItems';
import { ExpensesListContainer } from '../../../components/molecules/ExpensesList/ExpensesListContainer';
import './Expenses.css';

ExpensesView.propTypes = {
  onAddClick: PropTypes.func.isRequired,
  totalItems: PropTypes.number.isRequired
};

export function ExpensesView({ onAddClick, totalItems }) {
  return (
    <div className='expenses-view__container'>
      {totalItems !== 0 ? (
        <ExpensesListContainer />
      ) : (
        <NoItems onAddClick={onAddClick} />
      )}
    </div>
  );
}
