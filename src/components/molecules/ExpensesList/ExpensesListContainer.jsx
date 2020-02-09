import React, { useState, useEffect } from 'react';
import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';

import { appPath } from '../../../services/app-path';
import { PAGE_SIZE } from '../../../consts/table';
import {
  GET_MY_EXPENSES_QUERY,
  DELETE_EXPENSE_MUTATION
} from '../../../api/expensesQl';
import { getPagesCount, normalizePageNumber } from '../../../services/table';
import { toLocalTime } from '../../../services/time';
import { ExpensesList } from './ExpensesList';

const INIT_PAGE = 1;

export function ExpensesListContainer() {
  const history = useHistory();

  const [page, setPage] = useState(INIT_PAGE);

  const [
    getMyExpenses,
    { loading: myExpensesLoading, error: myExpensesError, data: myExpensesData }
  ] = useLazyQuery(GET_MY_EXPENSES_QUERY);

  const [
    deleteExpense,
    { loading: deleteExpenseLoading, error: deleteExpenseError }
  ] = useMutation(DELETE_EXPENSE_MUTATION, {
    refetchQueries: [
      {
        query: GET_MY_EXPENSES_QUERY,
        variables: {
          first: PAGE_SIZE,
          offset: normalizePageNumber(page) * PAGE_SIZE
        }
      }
    ]
  });

  useEffect(() => {
    getMyExpenses({
      variables: {
        first: PAGE_SIZE,
        offset: normalizePageNumber(page) * PAGE_SIZE
      }
    });
  }, [page, getMyExpenses]);

  if (myExpensesLoading) return 'Loading...';
  if (myExpensesError) return `Error! ${myExpensesError.message}`;

  function handleAddClick() {
    history.push(appPath.addExpense());
  }

  function handleRemoveClick(id) {
    deleteExpense({ variables: { id } });
  }

  function handleItemsRequest(activePage) {
    setPage(activePage);
  }

  const expenses = myExpensesData ? myExpensesData.myExpenses : [];
  const myExpensesTotal = myExpensesData ? myExpensesData.myExpensesTotal : 0;
  return (
    <ExpensesList
      onAddClick={handleAddClick}
      onRemoveClick={handleRemoveClick}
      items={expenses.map(e => {
        return {
          id: e.id,
          amount: e.amount,
          description: e.description,
          categoryName: e.category.displayName,
          createdAt: toLocalTime(e.createdAt)
        };
      })}
      onItemsRequest={handleItemsRequest}
      activePage={page}
      totalPages={getPagesCount(myExpensesTotal)}
    />
  );
}
