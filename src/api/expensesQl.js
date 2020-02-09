import { gql } from 'apollo-boost';

export const GET_MY_EXPENSES_QUERY = gql`
  query getMyExpenses($first: Int!, $offset: Int!) {
    myExpensesTotal
    myExpenses(first: $first, offset: $offset) {
      id
      userId
      amount
      description
      createdAt
      category {
        displayName
      }
    }
  }
`;

export const GET_MY_EXPENSES_TOTAL_QUERY = gql`
  query getMyExpensesTotal {
    myExpensesTotal
  }
`;

export const CREATE_EXPENSE_MUTATION = gql`
  mutation createExpense(
    $categoryId: ID!
    $amount: Float!
    $description: String
  ) {
    createExpense(
      categoryId: $categoryId
      amount: $amount
      description: $description
    ) {
      expense {
        id
        userId
        amount
        description
        createdAt
      }
    }
  }
`;

export const DELETE_EXPENSE_MUTATION = gql`
  mutation deleteExpense($id: ID!) {
    deleteExpense(id: $id) {
      expense {
        id
        userId
        amount
        description
        createdAt
      }
    }
  }
`;
