import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Pengaturan from '../Pages/Pengaturan copy'

export const PengaturanContainer = () => {
    const navigate = useNavigate()
    const location = useLocation()

    console.log(navigate)
    console.log(location)
    console.log('Cek')

    return <Pengaturan menu={location} allMenus={location}/>
}
