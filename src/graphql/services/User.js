import { gql, useQuery } from "@apollo/client";

export const GET_USER = gql`
  query GetUser {
    getUser {
      nama
      branch_name
      departemen
      role_id
      role_access
      val_date
    }
  }
`;

export const useGetUser = () => {
  return useQuery (GET_USER)
}
