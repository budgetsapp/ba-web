import React from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';

import { appPath } from '../../../services/app-path';
import { AddCategoryView } from './AddCategoryView';
import { CREATE_CATEGORY_MUTATION } from '../../../api/categoriesQl';

export function AddCategoryViewContainer() {
  const history = useHistory();

  const [
    createCategory,
    { loading: createCategoryLoading, error: createCategoryError }
  ] = useMutation(CREATE_CATEGORY_MUTATION);

  async function handleSaveClick(values, setSubmitting) {
    await createCategory({
      variables: { displayName: values.displayName }
    });
    setSubmitting(false);
  }

  function handleCancelClick() {
    history.push(appPath.categories());
  }

  return (
    <AddCategoryView
      onSaveClick={handleSaveClick}
      onCancelClick={handleCancelClick}
    />
  );
}
