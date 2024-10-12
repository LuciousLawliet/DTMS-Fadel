import React from "react";
import { Container, Box, Typography } from "@mui/material";
import MataUangTable from "../../tables/master/mataUangTable.js";
import SearchIcon from "@mui/icons-material/Search.js";
import { useMataUang } from "../../graphql/services/MataUang.js";
import TambahMataUang from "./tambahmatauang.js";

const MataUang = () => {
  const { data, loading, error } = useMataUang();

  if (loading) return "Loading";
  if (error) return `Submission error! ${error.message}`;

  const rows = data.getMataUang;

  return (
    <Box>
      <Typography
        sx={{ fontWeight: 400, fontSize: "20px", textAlign: "center" }}
      >
        Master Mata Uang
      </Typography>

      <TambahMataUang dataGet={rows} />

      <SearchIcon sx={{ marginLeft: "93%", marginBottom: "1%" }}></SearchIcon>

      <MataUangTable />

      <Container
        sx={{
          justifyContent: "center",
          textAlign: "center",
        }}
      ></Container>
    </Box>
  );
};

export default MataUang;
