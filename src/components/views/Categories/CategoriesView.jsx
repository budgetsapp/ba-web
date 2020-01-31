import React from 'react';
import PropTypes from 'prop-types';

import { NoItems } from '../../../components/molecules/NoItems/NoItems';
import { CategoriesList } from '../../../components/molecules/CategoriesList/CategoriesList';
import './Categories.css';

CategoriesView.propTypes = {
  onAddClick: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};

CategoriesView.defaultProps = {};

export function CategoriesView({ onAddClick, items }) {
  return (
    <div className='categories-view__container'>
      {items.length !== 0 ? (
        <CategoriesList items={items} onAddClick={onAddClick} />
      ) : (
        <NoItems onAddClick={onAddClick} />
      )}
    </div>
  );
}
