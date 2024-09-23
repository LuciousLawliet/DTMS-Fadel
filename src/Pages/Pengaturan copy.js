import React, { useState } from "react";
import Navbar from "../Components/Navbar"
import Subnavbar from "../Components/Subnavbar";
import MenuHome from "../Components/MenuHome";
import Sidebar from "../Components/Sidebar";
import Content from "../Components/Content";
import Footer from "../Components/Footer";
import { Typography } from "@mui/material";

const Pengaturan = ({ menu, allMenus }) => {
    const [pathName, setPathName] = useState(window.location.hash.slice(1) || menu.path_name)
    const [last, setLast] = useState('0')
    
    return (
        <div>
            <Navbar />
            <Subnavbar />
            {/* <MenuHome /> */}
            <Typography sx={{fontSize: 12, fontWeight: 500, marginTop: '7%', marginLeft: '1%'}}>
                PENGATURAN {'>'} MASTER {'>'}  Master Hak Akses
            </Typography>
            <Sidebar />
            <Content /> 
            <Footer />
        </div>
    )
}

export default Pengaturan