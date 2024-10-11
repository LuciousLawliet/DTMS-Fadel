import React, { useEffect } from "react";
import { Container, Box, Typography } from "@mui/material";
import MasterTable from "../../Components/MasterTable";
import SearchIcon from "@mui/icons-material/Search";
import TambahHakAkses from "../master/tambahhakakses";
import { useHakAkses } from "../../graphql/services/HakAkses";

const HakAkses = () => {

  //const { refetch } = useHakAkses()

  const { data, loading, error, refetch } = useHakAkses()

  if (loading) return "Loading";
  if (error) return `Submission error! ${error.message}`;

  const rows = data.getHakAkses

  // useEffect(() => {
  //   refetch()
  // })
  
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
    >
      <Typography
        sx={{ fontWeight: 400, fontSize: "20px", textAlign: "center" }}
      >
        Master Hak Akses
      </Typography>

      <TambahHakAkses dataGet={rows}/>

      <SearchIcon sx={{ marginLeft: "93%", marginBottom: "1%" }}></SearchIcon>
      <MasterTable />
      <Container
        sx={{
          justifyContent: "center",
          textAlign: "center",
        }}
      ></Container>
    </Box>
  );
};

export default HakAkses;
