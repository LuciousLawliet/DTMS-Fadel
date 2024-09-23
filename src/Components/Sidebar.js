import React from "react";
import { Box, Typography } from "@mui/material";
import MenuItem from "./MenuItem";
import { useGetMenu } from "../graphql/services/Menu";

// const menuData = [
//   {
//     name: 'Level 1',
//     children: [
//       {
//         name: 'Level 1.1',
//         children: [
//           {
//             name: 'Level 1.1.1',
//             children: [
//               {
//                 name: 'Level 1.1.1.1',
//                 children: [
//                   {
//                     name: 'Level 1.1.1.1.1',
//                     children: [],
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//       {
//         name: 'Level 1.2',
//         children: [
//             {
//                 name: 'Level 1.2.1',
//                 children: [
//                     {
//                         name: 'Level 1.2.1.1',
//                         children: [
//                             {
//                                 name: 'level 1.2.1.1.1',
//                                 children: [],
//                             }
//                         ],
//                     }
//                 ],
//               },
//         ],
//       },
//     ],
//   },
// ];

const Sidebar = ({ menuItem, isSelected, setIsSelected, setPathName }) => {
  //const { data, loading, error } = useGetMenu();

  //if (loading) return "Loading";
  //if (error) return `Submission error! ${error.message}`;
  //const rows = data.getMenu;
  

  return (
    <Box
      // sx={{
      //   width: "100%",
      //   marginTop: "0",
      //   marginLeft: "1%",
      //   left: 0,
      //   position: "fixed",
      //   height: "100%",
      //   backgroundColor: "#F6F1F1",
      //   paddingTop: "1%",
      //   borderRadius: "5px",
      // }}
      
    >
      <Typography sx={{ fontWeight: 700, fontSize: "15px", paddingLeft: "5%" }}>
        PENGATURAN
      </Typography>
      <MenuItem menuData={menuItem} levelPref='l' isSelected={isSelected} setIsSelected={setIsSelected} setPathName={setPathName}/>
    </Box>
  );
};

export default Sidebar;
