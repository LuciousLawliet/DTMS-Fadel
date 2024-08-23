import React from "react";
import { Container, Box, Button, Stack, Typography } from '@mui/material'
import MasterTable from "./MasterTable";
import SearchIcon from '@mui/icons-material/Search';
import TambahHakAkses from "../content/master/tambahhakakses";

const Content = () => {
    const handleClick = () =>{
        //<UbahHakAkses />
    }
    return (
        <Box
            sx={{
                width: '70%',
                marginTop: '0.8%',
                marginRight: '2%',
                right: 0,
                position: 'fixed',
                height: '74%',
                backgroundColor: '#F6F1F1',
                padding: '2% 3% 0% 3%',
                borderRadius: '5px'
            }}
        >
            <Typography sx={{ fontWeight: 400, fontSize: '20px', textAlign: "center" }}>
                Master Hak Akses
            </Typography>

            <TambahHakAkses />

            <SearchIcon sx={{ marginLeft: '93%', marginBottom: '1%' }}></SearchIcon>
            <MasterTable />
            <Container
                sx={{
                    justifyContent: 'center',
                    textAlign: 'center',

                }}
            >
            </Container>
        </Box>
    )
}

export default Content