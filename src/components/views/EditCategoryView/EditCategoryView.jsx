import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useParams, useHistory } from 'react-router-dom';

import { CategoryForm } from '../../molecules/CategoryForm/CategoryForm';
import { toLocalTime } from '../../../services/time';
import { appPath } from '../../../services/app-path';
import {
  GET_MY_CATEGORY_QUERY,
  EDIT_CATEGORY_MUTATION
} from '../../../api/categoriesQl';
import './EditCategoryView.css';

export function EditCategoryView() {
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
    <div className='edit-category-view__container'>
      <CategoryForm
        onSaveClick={handleSaveClick}
        onCancelClick={handleCancelClick}
        item={myCategoryData.category}
        pageTitle={`Editing category '${myCategoryData.category.displayName}'`}
        pageSubtitle={`Created at ${toLocalTime(
          myCategoryData.category.createdAt
        )}`}
        submitButtonTitle='Save changes'
      />
    </div>
  );
}
