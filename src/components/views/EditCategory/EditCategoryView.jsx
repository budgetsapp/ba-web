import React from 'react';
import PropTypes from 'prop-types';

import { CategoryForm } from '../../molecules/CategoryForm/CategoryForm';
import './EditCategoryView.css';

EditCategoryView.propTypes = {
  onSaveClick: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

export function EditCategoryView({ onSaveClick, item }) {
  return (
    <div className='edit-category-view__container'>
      <CategoryForm
        onSaveClick={onSaveClick}
        item={item}
        title={`Editing category ${item.displayName}`}
        submitButtonTitle='Save changes'
      />
    </div>
  );
}
