import { gql, useQuery } from "@apollo/client";

export const GET_MENU = gql`
    query GetMenu {
        getMenu {
            nama
        }
    }
`;

export const GET_MENU_ITEM = gql`
    query GetMenuItem {
        getMenuItem {
            nama
        }
    }`

export const useGetMenu = () => {
    return useQuery (GET_MENU);
}

export const useGetMenuItem = () => {
    return useQuery (GET_MENU_ITEM);
}