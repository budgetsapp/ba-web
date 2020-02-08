import { gql } from 'apollo-boost';

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
