import React from "react";
import { Box, Typography } from "@mui/material";
import MenuItem from "./MenuItem.js";

const Sidebar = ({ menuItem, isSelected, setIsSelected, setPathName }) => {
  return (
    <Box>
      <Typography sx={{ fontWeight: 700, fontSize: "15px", paddingLeft: "5%" }}>
        PENGATURAN
      </Typography>
      <MenuItem
        menuData={menuItem}
        levelPref="l"
        isSelected={isSelected}
        setIsSelected={setIsSelected}
        setPathName={setPathName}
      />
    </Box>
  );
};

export default Sidebar;
