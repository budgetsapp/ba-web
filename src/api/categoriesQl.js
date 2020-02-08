import { gql } from 'apollo-boost';

export const GET_MY_CATEGORIES_QUERY = gql`
  query getMyCategories($first: Int!, $offset: Int!) {
    myCategoriesTotal
    myCategories(first: $first, offset: $offset) {
      id
      userId
      createdAt
      displayName
      expensesTotal
    }
  }
`;

export const GET_MY_CATEGORIES_TOTAL_QUERY = gql`
  query getMyCategoriesTotal {
    myCategoriesTotal
  }
`;

export const GET_SEARCH_MY_CATEGORIES_QUERY = gql`
  query searchMyCategories($query: String!) {
    searchMyCategories(query: $query) {
      id
      displayName
    }
  }
`;

export const GET_MY_CATEGORY_QUERY = gql`
  query getMyCategory($id: ID!) {
    category(id: $id) {
      id
      userId
      createdAt
      displayName
    }
  }
`;

export const CREATE_CATEGORY_MUTATION = gql`
  mutation createCategory($displayName: String!) {
    createCategory(displayName: $displayName) {
      category {
        id
        createdAt
        displayName
      }
    }
  }
`;

export const EDIT_CATEGORY_MUTATION = gql`
  mutation editCategory($id: ID!, $categoryInput: CategoryInput!) {
    editCategory(id: $id, categoryInput: $categoryInput) {
      category {
        id
        createdAt
        displayName
      }
    }
  }
`;

export const DELETE_CATEGORY_MUTATION = gql`
  mutation deleteCategory($id: ID!) {
    deleteCategory(id: $id) {
      category {
        id
        createdAt
        displayName
      }
    }
  }
`;
