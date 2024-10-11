import { gql, useQuery, useMutation } from "@apollo/client";

// Fetch data from server/database
export const GET_HAK_AKSES = gql`
  query GetHakAksesByKode {
    getHakAkses {
      kode
      nama
      status
    }
  }
`;

// Add data to server/database
export const ADD_HAK_AKSES = gql`
  mutation TambahHakAkses($kode: String!, $nama: String!, $status: String!) {
    addHakAksesByKode(
      addHakAksesInput: { kode: $kode, nama: $nama, status: $status }
    ) {
      kode
      nama
      status
    }
  }
`;

// Edit data on server/database
export const EDIT_HAK_AKSES = gql`
  mutation EditMaSit($kode: String!, $nama: String!, $status: String!) {
    editHakAksesByKode(
      editHakAksesInput: { kode: $kode, nama: $nama, status: $status }
    )
  }
`;

// Delete data on server/database
// export const DELETE_HAK_AKSES = gql`
//   mutation DeleteHakAkses($id: ID!) {
//     deleteHakAkses(id: $id) {
//       kode
//       nama
//       status
//     }
//   }
// `;

export const useHakAkses = (limit, offset) => {
  return useQuery(GET_HAK_AKSES, {
    variables: { limit, offset },
  });
};

export const useAddHakAkses = () => {
  return useMutation(ADD_HAK_AKSES);
};

// export const useDeleteHakAkses = () => {
//   return useMutation(DELETE_HAK_AKSES);
// };

export const useEditHakAkses = () => {
  return useMutation(EDIT_HAK_AKSES);
};
