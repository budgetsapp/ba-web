import React from 'react';
import PropTypes from 'prop-types';

import './EditCategoryView.css';

EditCategoryView.propTypes = {
  onSaveClick: PropTypes.func.isRequired
};
EditCategoryView.defaultProps = {};

export function EditCategoryView({ onSaveClick }) {
  return <div className='edit-category-view__container'>Editing category</div>;
}
