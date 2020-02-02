import React from 'react';
import { Button, Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './ExpensesList.css';

ExpensesList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onAddClick: PropTypes.func.isRequired
};
ExpensesList.defaultProps = {};

export function ExpensesList({ onAddClick, items }) {
  return (
    <div className='expenses-list__container'>
      <Table celled striped compact size='small'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Amount</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.HeaderCell>Created</Table.HeaderCell>
            <Table.HeaderCell collapsing colSpan='1'></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {items.map(item => {
            return (
              <Table.Row key={item.id}>
                <Table.Cell>{item.amount}</Table.Cell>
                <Table.Cell>{item.category.displayName}</Table.Cell>
                <Table.Cell>{item.createdAt}</Table.Cell>
                <Table.Cell collapsing>
                  <Button circular icon='trash' size='mini' />
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
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
