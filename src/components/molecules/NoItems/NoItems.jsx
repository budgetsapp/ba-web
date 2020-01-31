import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './NoItems.css';

NoItems.propTypes = {
  onAddClick: PropTypes.func.isRequired
};
NoItems.defaultProps = {};

export function NoItems({ onAddClick }) {
  return (
    <div className='no-items__container'>
      <h2 className='no-items__message'>There are no items yet</h2>
      <h3 className='no-items__message'>
        Click {<Icon name='plus' size='small' />} to add
      </h3>
      <Button
        circular
        icon='plus'
        size='massive'
        onClick={() => onAddClick()}
      />
    </div>
  );
}
