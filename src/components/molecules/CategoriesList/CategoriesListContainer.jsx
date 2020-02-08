import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';

import { appPath } from '../../../services/app-path';
import { PAGE_SIZE } from '../../../consts/table';
import { GET_MY_CATEGORIES_QUERY } from '../../../api/categoriesQl';
import { getPagesCount } from '../../../services/table';
import { toLocalTime } from '../../../services/time';
import { CategoriesList } from './CategoriesList';

const INIT_PAGE = 1;

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
  const myCategoriesTotal = myCategoriesData
    ? myCategoriesData.myCategoriesTotal
    : 0;
  return (
    <CategoriesList
      onAddClick={handleAddClick}
      onEditClick={handleEditClick}
      onRemoveClick={handleRemoveClick}
      items={categories.map(c => {
        return {
          id: c.id,
          imageUrl: '',
          displayName: c.displayName,
          createdAt: toLocalTime(c.createdAt),
          expensesTotal: c.expensesTotal
        };
      })}
      onItemsRequest={handleItemsRequest}
      activePage={page}
      totalPages={getPagesCount(myCategoriesTotal)}
    />
  );
}
