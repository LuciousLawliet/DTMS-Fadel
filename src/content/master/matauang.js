import React, { useEffect } from "react";
import { Container, Box, Typography } from "@mui/material";
import MataUangTable from "../../tables/master/mataUangTable";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid, Divider, TextField } from "@mui/material";
import {
  useMataUang,
  useAddMataUang,
  useEditMataUang,
} from "../../graphql/services/MataUang";
import { ButtonCustom } from "../../Components/Button";
import TambahMataUang  from "../master/tambahmatauang"

const MataUang = () => {
  const { refetch } = useMataUang()

  useEffect(() => {
    refetch()
  })
  
  return (
    <Box>
      <Typography
        sx={{ fontWeight: 400, fontSize: "20px", textAlign: "center" }}
      >
        Master Mata Uang
      </Typography>

      {/* <TambahHakAkses /> */}
      <TambahMataUang />

      <SearchIcon sx={{ marginLeft: "93%", marginBottom: "1%" }}></SearchIcon>
      {/* <MasterTable /> */}
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
