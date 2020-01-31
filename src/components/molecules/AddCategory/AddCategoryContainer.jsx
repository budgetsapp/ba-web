import React from 'react';
import PropTypes from 'prop-types';

import { AddCategory } from './AddCategory';

AddCategoryContainer.propTypes = {};
AddCategoryContainer.defaultProps = {};

export function AddCategoryContainer() {
  function handleSaveClick() {}
  return <AddCategory onSaveClick={handleSaveClick} />;
}
