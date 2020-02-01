import React from 'react';

import { AddCategoryView } from './AddCategoryView';

export function AddCategoryViewContainer() {
  function handleSaveClick() {}
  return <AddCategoryView onSaveClick={handleSaveClick} />;
}
