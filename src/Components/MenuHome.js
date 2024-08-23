import React, { useState } from 'react'
import Box from '@mui/material/Box'

const MenuHome = ({ data, route, allMenus }) => {
    //const navigate = useNavigate()

    /*const handleClick = async (event) => {
        navigate(`/${route.toLowerCase()}`, { state: {data, allMenus} })
    }*/
    
    return (
        <>
            <Box
                //onClick={handleClick}
                variant="contained"
                sx = {{
                    backgroundColor: '#0555AE',
                    width: '100%',
                    height: '107px',
                    textAlign: 'center',
                    alignContent: 'center',
                    fontWeight: 600,
                    color: '#000000',
                    borderRadius: '20px',
                    '&:hover': {
                        backgroundColor: '#CACACA',
                        boxShadow: '2',
                        cursor: 'pointer'
                    },
                }}
            >     
                MASTER
            </Box>
        </>
        
    )
}

export default MenuHome
