import React from 'react';
import PropTypes from 'prop-types';

import { CategoryForm } from '../../molecules/CategoryForm/CategoryForm';
import './AddCategoryView.css';

AddCategoryView.propTypes = {
  onSaveClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired
};

export function AddCategoryView({ onSaveClick, onCancelClick }) {
  const item = {
    id: '1',
    amount: 1,
    category: {
      id: '1',
      displayName: 'taxi'
    },
    date: 1580671467816
  };
  return (
    <div className='add-category-view__container'>
      <CategoryForm
        onSaveClick={onSaveClick}
        onCancelClick={onCancelClick}
        item={item}
        pageTitle='Adding new Category'
        submitButtonTitle='Add'
      />
    </div>
  );
}
