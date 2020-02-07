import React from 'react';
import PropTypes from 'prop-types';

import { CategoryForm } from '../../molecules/CategoryForm/CategoryForm';
import './AddCategoryView.css';

AddCategoryView.propTypes = {
  onSaveClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired
};

export function AddCategoryView({ onSaveClick, onCancelClick }) {
  return (
    <div className='add-category-view__container'>
      <CategoryForm
        onSaveClick={onSaveClick}
        onCancelClick={onCancelClick}
        pageTitle='Adding new Category'
        submitButtonTitle='Add'
      />
    </div>
  );
}
