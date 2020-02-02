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
    displayName: ''
  };
  return (
    <div className='add-category-view__container'>
      <CategoryForm
        onSaveClick={onSaveClick}
        onCancelClick={onCancelClick}
        item={item}
        title='Adding new Category'
      />
    </div>
  );
}
