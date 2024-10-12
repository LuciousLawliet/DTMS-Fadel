import React from "react";
import { Container, Box, Typography } from "@mui/material";
import HakAksesTable from "../../tables/master/hakAksesTable.js";
import SearchIcon from "@mui/icons-material/Search.js";
import TambahHakAkses from "./tambahhakakses.js";
import { useHakAkses } from "../../graphql/services/HakAkses.js";

const HakAkses = () => {
  const { data, loading, error } = useHakAkses();

  if (loading) return "Loading";
  if (error) return `Submission error! ${error.message}`;

  const rows = data.getHakAkses;

  return (
    <Box>
      <Typography
        sx={{ fontWeight: 400, fontSize: "20px", textAlign: "center" }}
      >
        Master Hak Akses
      </Typography>

      <TambahHakAkses dataGet={rows} />

      <SearchIcon sx={{ marginLeft: "93%", marginBottom: "1%" }}></SearchIcon>
      <HakAksesTable rows={rows} />
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
