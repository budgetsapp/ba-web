import React from 'react';
import { useHistory } from 'react-router-dom';

import { CategoriesView } from './CategoriesView';
import { appPath } from '../../../services/app-path';

export function CategoriesViewContainer() {
  const history = useHistory();

  function handleAddClick() {
    history.push(appPath.addCategory());
  }

  return <CategoriesView onAddClick={handleAddClick} items={[]} />;
}
