import React from 'react';
import { Button, Table, Pagination } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './CategoriesList.css';

CategoriesList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAddClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  onItemsRequest: PropTypes.func.isRequired,
  activePage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired
};
CategoriesList.defaultProps = {};

export function CategoriesList({
  onAddClick,
  onEditClick,
  onRemoveClick,
  items,
  activePage,
  onItemsRequest,
  totalPages
}) {
  return (
    <div className='categories-list__container'>
      <Table celled striped compact size='small'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Image</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.HeaderCell>Created</Table.HeaderCell>
            <Table.HeaderCell collapsing colSpan='2'></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {items.map(item => {
            return (
              <Table.Row key={item.id}>
                <Table.Cell>{item.image_url}</Table.Cell>
                <Table.Cell>{item.displayName}</Table.Cell>
                <Table.Cell>{item.createdAt}</Table.Cell>
                <Table.Cell collapsing>
                  <Button
                    circular
                    icon='edit'
                    size='mini'
                    onClick={() => onEditClick(item.id)}
                  />
                </Table.Cell>
                <Table.Cell collapsing>
                  <Button
                    circular
                    icon='trash'
                    size='mini'
                    onClick={() => onRemoveClick(item.id)}
                  />
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
        {totalPages > 1 && (
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='5'>
                <Pagination
                  floated='right'
                  activePage={activePage}
                  boundaryRange={2}
                  onPageChange={(e, data) => onItemsRequest(data.activePage)}
                  size='mini'
                  siblingRange={2}
                  totalPages={totalPages}
                />
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        )}
      </Table>

      <Button
        className='categories-list__add-button'
        circular
        icon='plus'
        size='big'
        onClick={() => onAddClick()}
      />
    </div>
  );
}
