import React from 'react';
import { Button, Table, Pagination } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './ExpensesList.css';

ExpensesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      amount: PropTypes.string, // with currency
      categoryName: PropTypes.string,
      createdAt: PropTypes.string,
      description: PropTypes.string
    })
  ).isRequired,
  onAddClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  onItemsRequest: PropTypes.func.isRequired,
  activePage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  loading: PropTypes.bool
};
ExpensesList.defaultProps = {
  loading: false
};

export function ExpensesList({
  onAddClick,
  onRemoveClick,
  items,
  activePage,
  onItemsRequest,
  totalPages,
  loading
}) {
  return (
    <div className='expenses-list__container'>
      <Table celled striped compact size='small'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Amount</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.HeaderCell>Created</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell collapsing colSpan='1'></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {items.map(item => {
            return (
              <Table.Row key={item.id}>
                <Table.Cell>{item.amount}</Table.Cell>
                <Table.Cell>{item.categoryName}</Table.Cell>
                <Table.Cell>{item.createdAt}</Table.Cell>
                <Table.Cell>{item.description}</Table.Cell>
                <Table.Cell collapsing>
                  <Button
                    disabled={loading}
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
        className='expenses-list__add-button'
        circular
        icon='plus'
        size='big'
        onClick={() => onAddClick()}
      />
    </div>
  );
}
