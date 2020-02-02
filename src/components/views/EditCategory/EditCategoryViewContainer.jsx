import React from 'react';
import { useParams } from 'react-router-dom';

import { EditCategoryView } from './EditCategoryView';

export function EditCategoryViewContainer() {
  let { id } = useParams();
  console.log('Editing ', id);

  function handleSaveClick(values, setSubmitting) {
    console.log(values);
    setSubmitting(false);
  }
  return <EditCategoryView onSaveClick={handleSaveClick} />;
}
