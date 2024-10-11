import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Subnavbar from "../Components/Subnavbar";
import Sidebar from "../Components/Sidebar";
import Content from "../Components/Content";
import Footer from "../Components/Footer";
import { Typography, Box, Grid } from "@mui/material";
import { useGetNav } from "../graphql/services/Menu";
import { AuthContext } from "../auth/AuthWrapper";
import { useNavigate } from "react-router-dom";

const Pengaturan = ({ menuItem, user }) => {
  const { data, loading, error } = useGetNav();
  const [isSelected, setIsSelected] = useState("0");
  const [pathName, setPathName] = useState(
    window.location.hash.slice(1) || "PENGATURAN"
  );

  if (loading) return "Loading";
  if (error) return `Submission error! ${error.message}`;

  const nav = data.getNavList;
  console.log("pengaturan, ", user.nik);
  return (
    <div>
      <Navbar user={user} />
      <Subnavbar nav={nav} user={user} />
      <div
        style={{
          marginTop: 109,
          padding: "16px 21px 16px 21px",
          alignItems: "left",
        }}
      >
        <Typography sx={{ fontSize: 12, fontWeight: 500, paddingLeft: "5px" }}>
          {pathName}
        </Typography>
        <Grid container>
          <Grid
            item
            xs={2}
            sx={{
              paddingTop: 2,
              paddingBottom: 2,
              paddingLeft: 1,
              paddingRight: 1,
              marginRight: 1,
              backgroundColor: "#F6F1F1",
              borderRadius: "5px",
              overflowY: "scroll",
              overflowX: "hidden",
              marginTop: "15px",
              height: "77vh",
              "&::-webkit-scrollbar": {
                width: "0.1em",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#E0DFDF",
                borderRadius: "6px",
                outline: "1px solid #E0DFDF",
              },
            }}
          >
            <Box>
              <Sidebar
                menuItem={menuItem}
                isSelected={isSelected}
                setIsSelected={setIsSelected}
                setPathName={setPathName}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={9.3}
            sx={{
              marginTop: "15px",
              marginLeft: "10px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                backgroundColor: "#FCFAFA",
                paddingTop: 4,
                paddingLeft: 4,
                paddingRight: 4,
                paddingBottom: 4,
                borderRadius: "5px",
                overflowY: "scroll",
                overflowX: "hidden",
                height: "70.5vh",
                "&::-webkit-scrollbar": {
                  width: "0.1em",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#E0DFDF",
                  borderRadius: "6px",
                  outline: "1px solid #E0DFDF",
                },
              }}
            >
              <Typography sx={{ fontSize: 13 }}>
                <Content isSelected={isSelected} />
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default Pengaturan;
