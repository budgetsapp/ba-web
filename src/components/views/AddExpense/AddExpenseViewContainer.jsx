import React from 'react';
import { useHistory } from 'react-router-dom';

import { appPath } from '../../../services/app-path';
import { AddExpenseView } from './AddExpenseView';

export function AddExpenseViewContainer() {
  const history = useHistory();

  function handleSaveClick(values, setSubmitting) {
    console.log(values);
    setSubmitting(false);
  }

  function handleCancelClick() {
    history.push(appPath.expenses());
  }

  function handleCategoryQueryChange(query) {}

  const categories = [];

  return (
    <AddExpenseView
      onSaveClick={handleSaveClick}
      onCancelClick={handleCancelClick}
      categories={categories}
      onCategoryQueryChange={handleCategoryQueryChange}
    />
  );
}
