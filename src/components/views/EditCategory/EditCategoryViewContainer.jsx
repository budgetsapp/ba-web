import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams, useHistory } from 'react-router-dom';

import { EditCategoryView } from './EditCategoryView';
import { appPath } from '../../../services/app-path';
import { GET_MY_CATEGORY_QUERY } from '../../../api/categoriesQl';

export function EditCategoryViewContainer() {
  const history = useHistory();
  const { id } = useParams();

  const {
    loading: myCategoryLoading,
    error: myCategoryError,
    data: myCategoryData
  } = useQuery(GET_MY_CATEGORY_QUERY, {
    variables: {
      id: id
    }
  });

  if (myCategoryLoading) return 'Loading...';
  if (myCategoryError) return `Error! ${myCategoryError.message}`;

  function handleSaveClick(values, setSubmitting) {
    console.log(values);
    setSubmitting(false);
  }

  function handleCancelClick() {
    history.push(appPath.categories());
  }

  return (
    <EditCategoryView
      item={myCategoryData.category}
      onSaveClick={handleSaveClick}
      onCancelClick={handleCancelClick}
    />
  );
}
