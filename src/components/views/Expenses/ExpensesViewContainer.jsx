import React from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { ExpensesView } from './ExpensesView';
import { appPath } from '../../../services/app-path';
import { GET_MY_EXPENSES_TOTAL_QUERY } from '../../../api/expensesQl';

export function ExpensesViewContainer() {
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

  return (
    <ExpensesView
      onAddClick={handleAddClick}
      totalItems={myExpensesTotalData ? myExpensesTotalData.myExpensesTotal : 0}
    />
  );
}
