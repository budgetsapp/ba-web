import React from 'react';
import { Button, Icon, Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './CategoriesList.css';

CategoriesList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onAddClick: PropTypes.func.isRequired
};
CategoriesList.defaultProps = {};

export function CategoriesList({ onAddClick, items }) {
  return (
    <div className='categories-list__container'>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Image</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.HeaderCell>Edit</Table.HeaderCell>
            <Table.HeaderCell>Remove</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {items.map(item => {
            return (
              <Table.Row>
                <Table.Cell>{item.image_url}</Table.Cell>
                <Table.Cell>{item.display_name}</Table.Cell>
                <Table.Cell>Edit</Table.Cell>
                <Table.Cell>Remove</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>

      <Button
        className='categories-list__add-button'
        circular
        icon='plus'
        size='massive'
        onClick={() => onAddClick()}
      />
    </div>
  );
}
