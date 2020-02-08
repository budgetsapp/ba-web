import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';

import { appPath } from '../../../services/app-path';
import { GET_MY_CATEGORIES_QUERY } from '../../../api/categoriesQl';

import { CategoriesList } from './CategoriesList';

const PAGE_SIZE = 20;
const INIT_PAGE = 1;

function getPagesCount(items, pageSize) {
  return Math.round(items / pageSize);
}

export function CategoriesListContainer() {
  const history = useHistory();

  const [page, setPage] = useState(INIT_PAGE);

  const [
    getMyCategories,
    {
      loading: myCategoriesLoading,
      error: myCategoriesError,
      data: myCategoriesData
    }
  ] = useLazyQuery(GET_MY_CATEGORIES_QUERY);

  useEffect(() => {
    const _activePage = page - 1;
    getMyCategories({
      variables: { first: PAGE_SIZE, offset: _activePage * PAGE_SIZE }
    });
  }, [page, getMyCategories]);

  if (myCategoriesLoading) return 'Loading...';
  if (myCategoriesError) return `Error! ${myCategoriesError.message}`;

  function handleAddClick() {
    history.push(appPath.addCategory());
  }

  function handleEditClick(id) {
    history.push(appPath.editCategory().build(id));
  }

  function handleRemoveClick(id) {
    // history.push(appPath.addCategory());
  }

  function handleItemsRequest(activePage) {
    setPage(activePage);
  }

  const categories = myCategoriesData ? myCategoriesData.myCategories : [];
  return (
    <CategoriesList
      onAddClick={handleAddClick}
      onEditClick={handleEditClick}
      onRemoveClick={handleRemoveClick}
      items={categories}
      onItemsRequest={handleItemsRequest}
      activePage={page}
      totalPages={getPagesCount(
        myCategoriesData ? myCategoriesData.myCategoriesTotal : 0,
        PAGE_SIZE
      )}
    />
  );
}
