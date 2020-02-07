import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useParams, useHistory } from 'react-router-dom';

import { EditCategoryView } from './EditCategoryView';
import { appPath } from '../../../services/app-path';
import {
  GET_MY_CATEGORY_QUERY,
  EDIT_CATEGORY_MUTATION
} from '../../../api/categoriesQl';

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

  const [
    editCategory,
    { loading: editCategoryLoading, error: editCategoryError }
  ] = useMutation(EDIT_CATEGORY_MUTATION);

  if (myCategoryLoading) return 'Loading...';
  if (myCategoryError) return `Error! ${myCategoryError.message}`;

  async function handleSaveClick(values, setSubmitting) {
    try {
      await editCategory({
        variables: {
          id: id,
          categoryInput: { displayName: values.displayName }
        }
      });
      history.push(appPath.categories());
    } catch (e) {
    } finally {
      setSubmitting(false);
    }
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
