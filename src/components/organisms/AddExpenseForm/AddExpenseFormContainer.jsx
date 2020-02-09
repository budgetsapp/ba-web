import React, { useEffect } from 'react';
import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import _ from 'lodash';

import { appPath } from '../../../services/app-path';
import { AddExpenseForm } from './AddExpenseForm';
import { GET_SEARCH_MY_CATEGORIES_QUERY } from '../../../api/categoriesQl';
import { CREATE_EXPENSE_MUTATION } from '../../../api/expensesQl';

export function AddExpenseFormContainer() {
  const history = useHistory();

  const [
    searchMyCategories,
    {
      loading: searchMyCategoriesLoading,
      error: searchMyCategoriesError,
      data: searchMyCategoriesData
    }
  ] = useLazyQuery(GET_SEARCH_MY_CATEGORIES_QUERY);

  useEffect(() => {
    searchMyCategories({
      variables: { query: '' }
    });
  }, []);

  const [
    createExpense,
    { loading: createExpenseLoading, error: createExpenseError }
  ] = useMutation(CREATE_EXPENSE_MUTATION);

  async function handleSaveClick(values, setSubmitting) {
    try {
      await createExpense({
        variables: {
          categoryId: values.category,
          amount: values.amount,
          description: values.description
        }
      });
      history.push(appPath.expenses());
    } catch (e) {
    } finally {
      setSubmitting(false);
    }
  }

  function handleCancelClick() {
    history.push(appPath.expenses());
  }

  function handleCategoryQueryChange(query) {
    if (query.length > 2) {
      searchMyCategories({
        variables: { query: query }
      });
    }
  }

  const handleCategoryQueryChangeDebounced = _.debounce(
    handleCategoryQueryChange,
    200
  );

  // if (searchMyCategoriesLoading) return 'Loading...';
  if (searchMyCategoriesError)
    return `Error! ${searchMyCategoriesError.message}`;

  let categories = searchMyCategoriesData
    ? searchMyCategoriesData.searchMyCategories
    : [];
  categories = categories.map(cat => {
    return {
      value: cat.id,
      text: cat.displayName
    };
  });
  return (
    <AddExpenseForm
      onSaveClick={handleSaveClick}
      onCancelClick={handleCancelClick}
      categories={categories}
      onCategoryQueryChange={handleCategoryQueryChangeDebounced}
    />
  );
}
