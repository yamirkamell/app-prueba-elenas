import { gql } from '@apollo/client';

export const GET_CLIENTS = gql`
  query {
    clientsSearch {
      results {
        id
        registerDate
        firstName
        lastName
        cedula
        address
        cellphone
      }
    }
  }
`