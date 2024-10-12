import { gql, useQuery } from "@apollo/client";

export const GET_USER = gql`
  query GetUser {
    user {
      nama
      branch_name
      departemen
      role_id
      role_access
      val_date
    }
  }
`;

export const GET_USERS = gql`
  query GetUser {
    getUser {
      nik
      nama
      branch_name
      departemen
      role_id
      role_access
      val_date
    }
  }
`;

export const GET_SESSION_USER = gql`
  mutation GetSessionUser($nik: String) {
    getSessionUser(sessionInput: { nik: $nik }) {
      nama
      role_access
      role_id
      branch_name
      departemen
      val_date
    }
  }
`;

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

export const useGetUser = () => {
  return useQuery(GET_USER);
};
