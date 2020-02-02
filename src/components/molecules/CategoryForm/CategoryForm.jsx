import React from 'react';
import PropTypes from 'prop-types';

import './CategoryForm.css';

CategoryForm.propTypes = {
  item: PropTypes.object.isRequired,
  onSaveClick: PropTypes.func.isRequired
};

export function CategoryForm({ onSaveClick, item }) {
  return <div className='category-form__container'></div>;
}
