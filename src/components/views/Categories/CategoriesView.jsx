import React from 'react';
import PropTypes from 'prop-types';

import { NoItems } from '../../../components/molecules/NoItems/NoItems';
import './Categories.css';

CategoriesView.propTypes = {
  onAddClick: PropTypes.func.isRequired
};

export function CategoriesView({ onAddClick }) {
  return (
    <div className='categories-view__container'>
      <p style={{ color: 'grey', fontSize: 25 }}>Categories</p>
      <NoItems onAddClick={onAddClick} />
    </div>
  );
}
