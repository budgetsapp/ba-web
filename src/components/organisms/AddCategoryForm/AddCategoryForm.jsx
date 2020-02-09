import React from 'react';
import PropTypes from 'prop-types';

import { CategoryForm } from '../../molecules/CategoryForm/CategoryForm';
import './AddCategoryForm.css';

AddCategoryForm.propTypes = {
  onSaveClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired
};

export function AddCategoryForm({ onSaveClick, onCancelClick }) {
  return (
    <div className='add-category-form__container'>
      <CategoryForm
        onSaveClick={onSaveClick}
        onCancelClick={onCancelClick}
        pageTitle='Adding new Category'
        submitButtonTitle='Add'
      />
    </div>
  );
}
