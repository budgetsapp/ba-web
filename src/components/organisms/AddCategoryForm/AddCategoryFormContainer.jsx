import React from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';

import { appPath } from '../../../services/app-path';
import { AddCategoryForm } from './AddCategoryForm';
import { CREATE_CATEGORY_MUTATION } from '../../../api/categoriesQl';

export function AddCategoryFormContainer() {
  const history = useHistory();

  const [
    createCategory,
    { loading: createCategoryLoading, error: createCategoryError }
  ] = useMutation(CREATE_CATEGORY_MUTATION);

  async function handleSaveClick(values, setSubmitting) {
    try {
      await createCategory({
        variables: { displayName: values.displayName }
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
    <AddCategoryForm
      onSaveClick={handleSaveClick}
      onCancelClick={handleCancelClick}
    />
  );
}
