import React, { useState } from "react";
import Navbar from "../Components/Navbar"
import Subnavbar from "../Components/Subnavbar";
import MenuHome from "../Components/MenuHome";
import Sidebar from "../Components/Sidebar";
import Content from "../Components/Content";
import Footer from "../Components/Footer";
import { Button, Typography } from "@mui/material";

const Pengaturan = () => {
    const [pathName, setPathName] = useState()
    
    return (
        <div>
            <Navbar />
            <Subnavbar />
            {/* <MenuHome /> */}
            <Typography sx={{fontSize: 12, fontWeight: 500, marginTop: '7%', marginLeft: '1%'}}>
                PENGATURAN {'<'} MASTER {'<'}  Master Hak Akses
            </Typography>
            <Sidebar />
            <Content /> 
            <Footer />
        </div>
    )
}

export default Pengaturan