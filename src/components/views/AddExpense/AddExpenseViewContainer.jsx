import React from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import _ from 'lodash';

import { appPath } from '../../../services/app-path';
import { AddExpenseView } from './AddExpenseView';
import { GET_SEARCH_MY_CATEGORIES_QUERY } from '../../../api/categoriesQl';

export function AddExpenseViewContainer() {
  const history = useHistory();

  const [
    searchMyCategories,
    {
      loading: searchMyCategoriesLoading,
      error: searchMyCategoriesError,
      data: searchMyCategoriesData
    }
  ] = useLazyQuery(GET_SEARCH_MY_CATEGORIES_QUERY);

  function handleSaveClick(values, setSubmitting) {
    console.log(values);
    setSubmitting(false);
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
    <AddExpenseView
      onSaveClick={handleSaveClick}
      onCancelClick={handleCancelClick}
      categories={categories}
      onCategoryQueryChange={handleCategoryQueryChangeDebounced}
    />
  );
}
