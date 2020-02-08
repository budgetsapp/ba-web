import React from 'react';
import PropTypes from 'prop-types';

import { ExpenseForm } from '../../molecules/ExpenseForm/ExpenseForm';
import './AddExpenseForm.css';

AddExpenseForm.propTypes = {
  onSaveClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      text: PropTypes.string
    })
  ).isRequired,
  onCategoryQueryChange: PropTypes.func.isRequired
};

export function AddExpenseForm({
  onSaveClick,
  onCancelClick,
  categories,
  onCategoryQueryChange
}) {
  return (
    <div className='add-expense-form__container'>
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
