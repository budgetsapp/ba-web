import { gql } from 'apollo-boost';

export const GET_MY_CATEGORIES_QUERY = gql`
  query getMyCategories($first: Int!, $offset: Int!) {
    myCategories(first: $first, offset: $offset) {
      id
      userId
      createdAt
      displayName
    }
  }
`;
