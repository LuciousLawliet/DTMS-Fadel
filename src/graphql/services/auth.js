import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($nik: String!, $password: String!) {
    loginUser(loginInput: { nik: $nik, password: $password }) {
      nik
      nama
      password
      token
      role_access
      role_id
      branch_name
      departemen
      val_date
    }
  }
`;

export const LOGOUT = gql`
  mutation Logout {
    logoutUser
  }
`;
