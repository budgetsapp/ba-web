import React from 'react';

import { AddCategoryFormContainer } from '../../organisms/AddCategoryForm/AddCategoryFormContainer';
import './AddCategoryView.css';

export function AddCategoryView() {
  return (
    <div className='add-category-view__container'>
      <AddCategoryFormContainer />
    </div>
  );
}
