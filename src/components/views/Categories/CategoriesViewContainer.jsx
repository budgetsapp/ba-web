import React from 'react';
import { CategoriesView } from './CategoriesView';

export function CategoriesViewContainer() {
  function handleAddClick() {}

  return <CategoriesView onAddClick={handleAddClick} />;
}
