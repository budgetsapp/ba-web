import React from 'react';
import PropTypes from 'prop-types';

import { ExpenseForm } from '../../molecules/ExpenseForm/ExpenseForm';
import './AddExpenseView.css';

AddExpenseView.propTypes = {
  onSaveClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  onCategoryQueryChange: PropTypes.func.isRequired
};

export function AddExpenseView({
  onSaveClick,
  onCancelClick,
  categories,
  onCategoryQueryChange
}) {
  return (
    <div className='add-expense-view__container'>
      <ExpenseForm
        onSaveClick={onSaveClick}
        onCancelClick={onCancelClick}
        pageTitle='Adding new Expense'
        submitButtonTitle='Add'
        categories={categories}
        onCategoryQueryChange={onCategoryQueryChange}
      />
    </div>
  );
}
