import React, { useContext, useEffect } from 'react'
import Pengaturan from '../Pages/Pengaturan'
import { useGetMenu } from '../graphql/services/Menu'

export const PengaturanContainer = ({user}) => {
    const { data, loading, error } = useGetMenu()

    if (loading) return "Loading"
    if (error) return `Submission error! ${error.message}`;

    const menuItem = data.getMenu

    return <Pengaturan menuItem={menuItem} user={user} />
}
