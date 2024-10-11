import { gql, useQuery } from "@apollo/client";

export const GET_MENU = gql`
  query GetMenu {
    # getMenu {
    #     id
    #     nama
    #     hasChildren
    #     path_menu
    #     children {
    #         id
    #         nama
    #         hasChildren
    #         path_menu
    #         children {
    #             id
    #             nama
    #             hasChildren
    #             path_menu
    #         }
    #     }
    # }
    getMenuList {
      menu_id
      nama
      path_menu
      hasChild
      child {
        menu_id
        nama
        path_menu
        hasChild
        child {
          menu_id
          nama
          path_menu
          hasChild
        }
      }
    }
  }
`;

export const GET_MENU_ITEM = gql`
  query GetMenuItem {
    getMenuItem {
      nama
    }
  }
`;

export const GET_NAV = gql`
  query GetNavMenu {
    getNavList {
      nama
    }
  }
`;

export const useGetMenu = () => {
  return useQuery(GET_MENU);
};

export const useGetMenuItem = () => {
  return useQuery(GET_MENU_ITEM);
};

export const useGetNav = () => {
  return useQuery(GET_NAV);
};
