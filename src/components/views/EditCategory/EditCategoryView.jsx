import React from 'react';
import PropTypes from 'prop-types';

import { CategoryForm } from '../../molecules/CategoryForm/CategoryForm';
import './EditCategoryView.css';

EditCategoryView.propTypes = {
  onSaveClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

export function EditCategoryView({ onSaveClick, onCancelClick, item }) {
  return (
    <div className='edit-category-view__container'>
      <CategoryForm
        onSaveClick={onSaveClick}
        onCancelClick={onCancelClick}
        item={item}
        pageTitle={`Editing category '${item.displayName}'`}
        pageSubtitle={`Created at ${item.createdAt}`}
        submitButtonTitle='Save changes'
      />
    </div>
  );
}
