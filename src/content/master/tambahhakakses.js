import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid, Divider, Typography, TextField } from "@mui/material";
import {
  GET_HAK_AKSES,
  useAddHakAkses,
  useHakAkses,
} from "../../graphql/services/HakAkses";
import { ButtonCustom } from "../../Components/Button";

export default function UbahHakAkses() {
  const [open, setOpen] = React.useState(false);
  const [kode, setKode] = React.useState("");
  const [hakAkses, setHakAkses] = React.useState("");
  const [hasil, setHasil] = React.useState("Aktif");
  const [addHakAkses, { loadingAdd, error }] = useAddHakAkses();
  const { refetch } = useHakAkses({
    refetchQueries: [{ query: GET_HAK_AKSES }],
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSimpan = () => {
    addHakAkses({ variables: { kode: kode, nama: hakAkses, status: hasil } });
    setOpen(false);
    refetch();
  };

  if (loadingAdd) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;
  // const useHandleDelete = () => {
  //   useDeleteHakAkses(kode)
  // }

  return (
    <React.Fragment>
      {/* <Button
        sx={{
          width: "120px",
          marginRight: "92%",
        }}
        variant="contained"
        color="success"
        onClick={handleClickOpen}
      >
        + TAMBAH
      </Button> */}
      <ButtonCustom data={"Tambah"} status={"add"} onClick={handleClickOpen} />
      <Dialog
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        // aria-labelledby="alert-dialog-title"
        // aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle id="alert-dialog-title">{"TAMBAH HAK AKSES"}</DialogTitle> */}
        <Typography
          sx={{ paddingLeft: "5%", paddingTop: "4%", fontSize: "25px" }}
        >
          TAMBAH HAK AKSES
        </Typography>
        
        <DialogContent dividers sx={{ marginLeft: '5%', marginRight: "5%" }}>
          <DialogContentText id="alert-dialog-description">
            <Grid container>
              <Grid item xs={3} sx={{marginBottom: '4%'}}>
                <DialogContentText sx={{ fontSize: "12", color: "black", paddingTop: "7%" }}>
                  ID<span style={{ color: "red" }}>*</span>
                </DialogContentText>
              </Grid>
              <Grid item xs={9}>
                {/* <input
                  value={kode}
                  onChange={(e) => {
                    setKode(e.target.value);
                  }}
                  size="45"
                ></input> */}
                <TextField
                  name="kode"
                  variant="outlined"
                  size="small"
                  value={kode}
                  onChange={(e) => {
                    setKode(e.target.value);
                  }}
                  sx={{
                    width: "100%",
                  }}
                />
              </Grid>
              <Grid item xs={3} sx={{marginBottom: '1%'}}>
                <DialogContentText
                  sx={{ fontSize: "12", color: "black", paddingTop: "7%" }}
                >
                  Hak Akses<span style={{ color: "red" }}>*</span>
                </DialogContentText>
              </Grid>
              <Grid item xs={9}>
                {/* <input
                  value={hakAkses}
                  onChange={(e) => {
                    setHakAkses(e.target.value);
                  }}
                  size="45"
                ></input> */}
                <TextField
                  name="kode"
                  variant="outlined"
                  size="small"
                  value={hakAkses}
                  onChange={(e) => {
                    setHakAkses(e.target.value);
                  }}
                  sx={{
                    width: "100%",
                  }}
                />
              </Grid>
              <Grid item xs={3} sx={{marginBottom: '5%'}}>
                {/* <text>Status</text> */}
                <DialogContentText
                  sx={{ paddingTop: "14.5%", fontSize: "12", color: "black" }}
                >
                  Status<span style={{ color: "red" }}>*</span>
                </DialogContentText>
              </Grid>
              <Grid item xs={9} sx={{ fontWeight: 600 }}>
                {/* <input
                  value={hasil}
                  onChange={(e) => {
                    setHasil(e.target.value);
                  }}
                  size="45"
                ></input> */}
                {/* <text value={hasil}>Aktif</text> */}
                <DialogContentText
                  value={hasil}
                  sx={{ paddingTop: "5%", fontSize: "12", color: "black" }}
                >
                  Aktif
                </DialogContentText>
              </Grid>
            </Grid>
          </DialogContentText>
          <DialogActions>
            <Grid
              container
              spacing={3}
              justifyContent="center"
              marginBottom="5%"
            >
              <Grid item>
                {/* <Button
                  variant="contained"
                  size="small"
                  type="submit"
                  onClick={handleSimpan}
                >
                  SIMPAN
                </Button> */}
                <ButtonCustom data={"SIMPAN"} onClick={handleSimpan} />
              </Grid>
              <Grid item>
                {/* <Button variant="contained" size="small" onClick={handleClose}>
                  BATAL
                </Button> */}
                <ButtonCustom
                  data={"BATAL"}
                  status={"cancel"}
                  onClick={handleClose}
                />
              </Grid>
            </Grid>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
