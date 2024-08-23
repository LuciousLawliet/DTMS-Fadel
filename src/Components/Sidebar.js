import React from "react";
import { Container, Box, Button, Stack, Typography, Menu } from '@mui/material'
import MenuItem from "./MenuItem";
import BasicTable from "./MasterTable";
import SearchIcon from '@mui/icons-material/Search';

const Sidebar = () => {
    return (
        <Box
            sx={{
                width: '20%',
                marginTop: '0.8%',
                marginLeft: '1%',
                left: 0,
                position: 'fixed',
                height: '76%',
                backgroundColor: '#F6F1F1',
                paddingTop: '1%',
                borderRadius: '5px'
            }}
        >
            <Typography sx={{ fontWeight: 700, fontSize: '16px', paddingLeft: '5%'}}>
                PENGATURAN
            
            </Typography>
            <MenuItem />
        </Box>
    )
}

export default Sidebar