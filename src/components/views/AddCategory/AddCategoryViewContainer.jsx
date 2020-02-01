import React from 'react';
import PropTypes from 'prop-types';

import { AddCategoryView } from './AddCategoryView';

AddCategoryViewContainer.propTypes = {};
AddCategoryViewContainer.defaultProps = {};

export function AddCategoryViewContainer() {
  function handleSaveClick() {}
  return <AddCategoryView onSaveClick={handleSaveClick} />;
}
