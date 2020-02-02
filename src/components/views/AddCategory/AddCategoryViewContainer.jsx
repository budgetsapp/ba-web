import React from 'react';

import { AddCategoryView } from './AddCategoryView';

export function AddCategoryViewContainer() {
  function handleSaveClick(values, setSubmitting) {
    console.log(values);
    setSubmitting(false);
  }
  return <AddCategoryView onSaveClick={handleSaveClick} />;
}
