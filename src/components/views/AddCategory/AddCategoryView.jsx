import React from 'react';
import PropTypes from 'prop-types';

import './AddCategoryView.css';

AddCategoryView.propTypes = {
  onSaveClick: PropTypes.func.isRequired
};
AddCategoryView.defaultProps = {};

export function AddCategoryView({ onSaveClick }) {
  return <div className='add-category-view__container'>Adding category</div>;
}
