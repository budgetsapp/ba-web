import React from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { CategoriesView } from './CategoriesView';
import { appPath } from '../../../services/app-path';
import { GET_MY_CATEGORIES_TOTAL_QUERY } from '../../../api/categoriesQl';

export function CategoriesViewContainer() {
  const history = useHistory();

  const {
    loading: myCategoriesTotalLoading,
    error: myCategoriesTotalError,
    data: myCategoriesTotalData
  } = useQuery(GET_MY_CATEGORIES_TOTAL_QUERY);

  if (myCategoriesTotalLoading) return 'Loading...';
  if (myCategoriesTotalError) return `Error! ${myCategoriesTotalError.message}`;

  function handleAddClick() {
    history.push(appPath.addCategory());
  }

  return (
    <CategoriesView
      onAddClick={handleAddClick}
      totalItems={
        myCategoriesTotalData ? myCategoriesTotalData.myCategoriesTotal : 0
      }
    />
  );
}
