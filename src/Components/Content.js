import React, { useState } from "react";
import { Container, Box, Button, Stack, Typography, Grid } from "@mui/material";
import MasterTable from "./MasterTable";
import SearchIcon from "@mui/icons-material/Search";
import TambahHakAkses from "../content/master/tambahhakakses";
import HakAkses from "../content/master/hakakses";
import MataUang from "../content/master/matauang";
import { useLocation } from "react-router-dom";

const RenderComponent = ({ indeks }) => {
  switch (indeks) {
    case "12":
      return <HakAkses />;
      break;
    case "40":
      return <MataUang />;
      break;

    default:
      return (
        <Box
          // sx={{
          //   width: "70%",
          //   marginTop: "0",
          //   marginRight: "2%",
          //   right: 0,
          //   position: "fixed",
          //   height: "74%",
          //   backgroundColor: "#F6F1F1",
          //   padding: "2% 3% 0% 3%",
          //   borderRadius: "5px",
          // }}
        />
      );
      break;
  }
};

const Content = ({ isSelected }) => {
  return <RenderComponent indeks={isSelected} />;
};

export default Content;
