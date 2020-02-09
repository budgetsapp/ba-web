import React from 'react';

import { AddExpenseFormContainer } from '../../organisms/AddExpenseForm/AddExpenseFormContainer';
import './AddExpenseView.css';

export function AddExpenseView() {
  return (
    <div className='add-expense-view__container'>
      <AddExpenseFormContainer />
    </div>
  );
}
