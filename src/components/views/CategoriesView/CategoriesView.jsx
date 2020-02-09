import React from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { NoItems } from '../../../components/molecules/NoItems/NoItems';
import { CategoriesListContainer } from '../../../components/molecules/CategoriesList/CategoriesListContainer';
import { appPath } from '../../../services/app-path';
import { GET_MY_CATEGORIES_TOTAL_QUERY } from '../../../api/categoriesQl';
import './Categories.css';

export function CategoriesView() {
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

  const myCategoriesTotal = myCategoriesTotalData
    ? myCategoriesTotalData.myCategoriesTotal
    : 0;

  return (
    <div className='categories-view__container'>
      {myCategoriesTotal !== 0 ? (
        <CategoriesListContainer />
      ) : (
        <NoItems onAddClick={handleAddClick} />
      )}
    </div>
  );
}
