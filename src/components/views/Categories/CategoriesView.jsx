import React from 'react';
import PropTypes from 'prop-types';

import { NoItems } from '../../../components/molecules/NoItems/NoItems';
import { CategoriesList } from '../../../components/molecules/CategoriesList/CategoriesList';
import './Categories.css';

CategoriesView.propTypes = {
  onAddClick: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onEditClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  onItemsRequest: PropTypes.func.isRequired,
  activePage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired
};

CategoriesView.defaultProps = {};

export function CategoriesView({
  onAddClick,
  onEditClick,
  onRemoveClick,
  onItemsRequest,
  items,
  activePage,
  totalPages
}) {
  return (
    <div className='categories-view__container'>
      {totalPages !== 0 ? (
        <CategoriesList
          items={items}
          onAddClick={onAddClick}
          onEditClick={onEditClick}
          onRemoveClick={onRemoveClick}
          onItemsRequest={onItemsRequest}
          activePage={activePage}
          totalPages={totalPages}
        />
      ) : (
        <NoItems onAddClick={onAddClick} />
      )}
    </div>
  );
}
