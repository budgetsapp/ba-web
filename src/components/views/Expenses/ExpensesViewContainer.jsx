import React from 'react';
import { useHistory } from 'react-router-dom';

import { ExpensesView } from './ExpensesView';
import { appPath } from '../../../services/app-path';

export function ExpensesViewContainer() {
  const history = useHistory();

  function handleAddClick() {
    // history.push(appPath.addCategory());
  }

  return <ExpensesView onAddClick={handleAddClick} items={[]} />;
}
