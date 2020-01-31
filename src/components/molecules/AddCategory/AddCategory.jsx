import React from 'react';
import { Button, Icon, Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './AddCategory.css';

AddCategory.propTypes = {
  onSaveClick: PropTypes.func.isRequired
};
AddCategory.defaultProps = {};

export function AddCategory({ onSaveClick }) {
  return <div className='add-category__container'>Adding category</div>;
}
