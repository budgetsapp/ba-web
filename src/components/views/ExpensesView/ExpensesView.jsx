import React from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { NoItems } from '../../../components/molecules/NoItems/NoItems';
import { ExpensesListContainer } from '../../../components/molecules/ExpensesList/ExpensesListContainer';
import { appPath } from '../../../services/app-path';
import { GET_MY_EXPENSES_TOTAL_QUERY } from '../../../api/expensesQl';
import './Expenses.css';

export function ExpensesView() {
  const history = useHistory();

  const {
    loading: myExpensesTotalLoading,
    error: myExpensesTotalError,
    data: myExpensesTotalData
  } = useQuery(GET_MY_EXPENSES_TOTAL_QUERY);

  if (myExpensesTotalLoading) return 'Loading...';
  if (myExpensesTotalError) return `Error! ${myExpensesTotalError.message}`;

  function handleAddClick() {
    history.push(appPath.addExpense());
  }

  const myExpensesTotal = myExpensesTotalData
    ? myExpensesTotalData.myExpensesTotal
    : 0;

  return (
    <div className='expenses-view__container'>
      {myExpensesTotal !== 0 ? (
        <ExpensesListContainer />
      ) : (
        <NoItems onAddClick={handleAddClick} />
      )}
    </div>
  );
}
