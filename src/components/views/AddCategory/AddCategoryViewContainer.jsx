import React from 'react';
import { useHistory } from 'react-router-dom';

import { appPath } from '../../../services/app-path';
import { AddCategoryView } from './AddCategoryView';

export function AddCategoryViewContainer() {
  const history = useHistory();

  function handleSaveClick(values, setSubmitting) {
    console.log(values);
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
