import React from "react";
import { Box } from "@mui/material";
import HakAkses from "../contents/master/hakakses.js";
import MataUang from "../contents/master/matauang.js";

const RenderComponent = ({ indeks }) => {
  switch (indeks) {
    case "12":
      return <HakAkses />;
    case "41":
      return <MataUang />;

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
  }
};

const Content = ({ isSelected }) => {
  return <RenderComponent indeks={isSelected} />;
};

export default Content;
