import { gql } from '@apollo/client';

export const DO_LOGIN = gql`
  mutation doLogin($cellphone: String!, $password: String!) {
    login(
      cellphone: $cellphone
      password: $password
    )
    {
      __typename
      ... on AuthInfo  {
        token
      } 
    }
  }
`