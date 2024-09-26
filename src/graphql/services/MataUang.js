import { gql, useQuery, useMutation } from "@apollo/client";

// Fetch data from server/database
export const GET_MATA_UANG = gql`
  query GetMataUang {
    getMataUang {
      mata
      nama
      beli
      jual
      tengah
      simbol
      tanggal
      status
    }
  }
`;

// Add data to server/database
export const ADD_MATA_UANG = gql`
  mutation TambahMataUang(
    $mata: String!
    $nama: String!
    $beli: String!
    $jual: String!
    $tengah: String!
    $simbol: String!
    $tanggal: String!
    $status: String!
  ) {
    addMataUang(
      mata: $mata
      mataUang: {
        mata: $mata
        nama: $nama
        beli: $beli
        jual: $jual
        tengah: $tengah
        simbol: $simbol
        tanggal: $tanggal
        status: $status
      }
    ) {
      id
      mata
      nama
      beli
      jual
      tengah
      simbol
      tanggal
      status
    }
  }
`;

// Edit data on server/database
export const EDIT_MATA_UANG = gql`
  mutation EditMataUang(
    $mata: String!
    $nama: String!
    $beli: String!
    $jual: String!
    $tengah: String!
    $simbol: String!
    $tanggal: String!
    $status: String!
  ) {
    editMataUang(
      mata: $mata
      edits: {
        mata: $mata
        nama: $nama
        beli: $beli
        jual: $jual
        tengah: $tengah
        simbol: $simbol
        tanggal: $tanggal
        status: $status
      }
    ) {
      id
      mata
      nama
      beli
      jual
      tengah
      simbol
      tanggal
      status
    }
  }
`;

// Delete data on server/database
export const DELETE_MATA_UANG = gql`
  mutation DeleteMataUang($id: ID!) {
    deleteMataUang(id: $id) {
      mata
      nama
      beli
      jual
      tengah
      simbol
      tanggal
      status
    }
  }
`;

export const useMataUang = (limit, offset) => {
  return useQuery(GET_MATA_UANG, {
    variables: { limit, offset },
  });
};

export const useAddMataUang = () => {
  return useMutation(ADD_MATA_UANG);
};

export const useDeleteMataUang = () => {
  return useMutation(DELETE_MATA_UANG);
};

export const useEditMataUang = () => {
  return useMutation(EDIT_MATA_UANG);
};
