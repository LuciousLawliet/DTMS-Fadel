import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid, Divider } from "@mui/material";
import { GET_HAK_AKSES, useAddHakAkses, useHakAkses } from "../../graphql/services/HakAkses";

export default function UbahHakAkses() {
  const [open, setOpen] = React.useState(false);
  const [kode, setKode] = React.useState("");
  const [hakAkses, setHakAkses] = React.useState("");
  const [hasil, setHasil] = React.useState("Aktif");
  const [addHakAkses, { loadingAdd, error }] = useAddHakAkses();
  const { refetch } = useHakAkses({refetchQueries: [{ query: GET_HAK_AKSES}]})

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSimpan = () => {
    addHakAkses({ variables: { kode: kode, nama: hakAkses, status: hasil } });
    setOpen(false);
    refetch()
  };

  if (loadingAdd) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;
  // const useHandleDelete = () => {
  //   useDeleteHakAkses(kode)
  // }

  return (
    <React.Fragment>
      <Button
        sx={{
          width: "120px",
          marginRight: "92%",
        }}
        variant="contained"
        color="success"
        onClick={handleClickOpen}
      >
        + TAMBAH
      </Button>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"TAMBAH HAK AKSES"}</DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <text>
                  ID<span style={{ color: "red" }}>*</span>
                </text>
              </Grid>
              <Grid item xs={9} sx={{ fontWeight: 600 }}>
                <input
                  value={kode}
                  onChange={(e) => {
                    setKode(e.target.value);
                  }}
                  size="45"
                ></input>
              </Grid>
              <Grid item xs={3}>
                <text>
                  Hak Akses<span style={{ color: "red" }}>*</span>
                </text>
              </Grid>
              <Grid item xs={9}>
                <input
                  value={hakAkses}
                  onChange={(e) => {
                    setHakAkses(e.target.value);
                  }}
                  size="45"
                ></input>
              </Grid>
              <Grid item xs={3}>
                <text>Status</text>
              </Grid>
              <Grid item xs={9} sx={{ fontWeight: 600 }}>
                {/* <input
                  value={hasil}
                  onChange={(e) => {
                    setHasil(e.target.value);
                  }}
                  size="45"
                ></input> */}
                <text value={hasil}>
                  Aktif
                </text>
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
                <Button
                  variant="contained"
                  size="small"
                  type="submit"
                  onClick={handleSimpan}
                >
                  SIMPAN
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" size="small" onClick={handleClose}>
                  BATAL
                </Button>
              </Grid>
            </Grid>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
