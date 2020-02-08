import React from 'react';
import PropTypes from 'prop-types';

import { NoItems } from '../../../components/molecules/NoItems/NoItems';
import { CategoriesListContainer } from '../../../components/molecules/CategoriesList/CategoriesListContainer';
import './Categories.css';

CategoriesView.propTypes = {
  onAddClick: PropTypes.func.isRequired,
  totalItems: PropTypes.number.isRequired
};

export function CategoriesView({ onAddClick, totalItems }) {
  return (
    <div className='categories-view__container'>
      {totalItems !== 0 ? (
        <CategoriesListContainer />
      ) : (
        <NoItems onAddClick={onAddClick} />
      )}
    </div>
  );
}
