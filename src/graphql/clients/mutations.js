import { gql } from '@apollo/client';

export const ADD_CLIENT = gql`
  mutation addClient ($firstName: String!, $lastName: String!, $cedula: String, $cellphone: String, $address: AddressInput!){
    createClient(
      input: {
        firstName: $firstName
        lastName: $lastName
        cedula: $cedula
        cellphone: $cellphone
        address: $address
      }
    ) {
      __typename
      ... on Client {
        id
        firstName
        lastName
        cedula
        cellphone
      }
    }
  }
`

export const SET_CLIENT = gql`
  mutation setClient ($id: Int!, $firstName: String!, $lastName: String!, $address: AddressInput!){
    updateClient(
      id: $id
      input: {
        firstName: $firstName
        lastName: $lastName
        address: $address
      }
    ) {
      __typename
      ... on Client {
        id
        firstName
        lastName
        cedula
        cellphone
      }
    }
  }
`