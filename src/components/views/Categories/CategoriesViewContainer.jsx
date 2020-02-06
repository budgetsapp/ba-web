import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useLazyQuery } from '@apollo/react-hooks';

import { CategoriesView } from './CategoriesView';
import { appPath } from '../../../services/app-path';
import { GET_MY_CATEGORIES_QUERY } from '../../../api/categoriesQl';

export function CategoriesViewContainer() {
  const history = useHistory();

  useEffect(() => {
    getMyCategories({ variables: { first: 10, offset: 0 } });
  }, []);

  const [
    getMyCategories,
    {
      loading: myCategoriesLoading,
      error: myCategoriesError,
      data: myCategoriesData
    }
  ] = useLazyQuery(GET_MY_CATEGORIES_QUERY);

  if (myCategoriesLoading) return 'Loading...';
  if (myCategoriesError) return `Error! ${myCategoriesError.message}`;

  function handleAddClick() {
    history.push(appPath.addCategory());
  }

  return (
    <CategoriesView
      onAddClick={handleAddClick}
      items={myCategoriesData ? myCategoriesData.myCategories : []}
    />
  );
}
