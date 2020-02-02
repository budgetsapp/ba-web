import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { EditCategoryView } from './EditCategoryView';
import { appPath } from '../../../services/app-path';

export function EditCategoryViewContainer() {
  const history = useHistory();
  const { id } = useParams();
  console.log('Editing ', id);

  function handleSaveClick(values, setSubmitting) {
    console.log(values);
    setSubmitting(false);
  }

  function handleCancelClick() {
    history.push(appPath.categories());
  }

  return (
    <EditCategoryView
      onSaveClick={handleSaveClick}
      onCancelClick={handleCancelClick}
    />
  );
}
