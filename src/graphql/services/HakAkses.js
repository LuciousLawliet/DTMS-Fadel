import { gql, useQuery, useMutation } from "@apollo/client"

export const GET_HAK_AKSES = gql`
    query GetHakAksesByKode {
        getHakAksesByKode {
            kode,
            nama,
            status
        }
    }`

export const ADD_HAK_AKSES = gql`
    mutation TambahHakAkses (
        $kode: String!,
        $nama: String!,
        $status: String!
    ) {
        tambahHakAkses (
            input: {
                kode: $kode
                nama: $nama
                status: $status
            }
        )
    }`

export const useHakAkses = () => {
    return useQuery(GET_HAK_AKSES)
}

export const useAddHakAkses = () => {
    return useMutation(ADD_HAK_AKSES)
}