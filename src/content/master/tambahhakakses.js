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
import { StatusModal } from "../../Components/Modal";
import { useEffect } from "react";

export default function TambahHakAkses({ dataGet }) {
  const [open, setOpen] = React.useState(false);
  const [kode, setKode] = React.useState("");
  const [hakAkses, setHakAkses] = React.useState("");
  const [hasil, setHasil] = React.useState("Aktif");
  const [handleModal, setHandleModal] = React.useState(false);
  const [openStatus, setOpenStatus] = React.useState(false);
  const [statusTitle, setStatusTitle] = React.useState("");
  const [statusType, setStatusType] = React.useState("");
  const [addHakAkses, { loadingAdd }] = useAddHakAkses();
  const { refetch } = useHakAkses();
  //const { data, loading, error, refetch } = useHakAkses();

  // if (loading) return "Submitting...";
  // if (error) return `Submission error! ${error.message}`;
  // const useHandleDelete = () => {
  //   useDeleteHakAkses(kode)
  // }

  //const rows = data.getHakAksesByKode;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setHandleModal(false);
    setOpenStatus(false);
    refetch();
  };

  const handleSimpan = () => {
    if (hakAkses !== "" && hakAkses.match(/[^0-9 ]/)) {
      setHandleModal(true);
    } else {
    }
  };

  const handleSave = () => {
    if (dataGet.some((row) => row.nama === hakAkses) === false) {
      addHakAkses({ variables: { kode: kode, nama: hakAkses, status: hasil } });
      //setOpen(false);
      setHakAkses("");
      setKode("");
      refetch();
      setOpenStatus(true);
      setStatusTitle("Hak Akses baru berhasil disimpan");
      setStatusType("success");
    } else {
      setOpenStatus(true);
      setStatusTitle(`Hak Akses ${hakAkses} sudah terdaftar!`);
      setStatusType("failed");
    }
  };

  useEffect(() => {
    setKode(
      "0" + Math.floor(Number(dataGet[dataGet.length - 1].kode) + 1).toString()
    );
  });

  function camelCase(str) {
    // Using replace method with regEx
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index == 0 ? word.toUpperCase() : word.toUpperCase();
      })
      .replace(/\s+/g, " ");
  }

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

        <DialogContent dividers sx={{ marginLeft: "5%", marginRight: "5%" }}>
          <DialogContentText id="alert-dialog-description">
            <Grid container>
              <Grid item xs={3} sx={{ marginBottom: "4%" }}>
                <DialogContentText
                  sx={{ fontSize: "12", color: "black", paddingTop: "7%" }}
                >
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
                {/* <TextField
                  name="kode"
                  variant="outlined"
                  size="small"
                  
                  onChange={(e) => {
                    setKode(e.target.value);
                  }}
                  sx={{
                    width: "100%",
                  }}
                /> */}
                <DialogContentText
                  value={kode}
                  sx={{ paddingTop: "2.7%", fontSize: "12", color: "black" }}
                >
                  {kode}
                </DialogContentText>
              </Grid>
              <Grid item xs={3} sx={{ marginBottom: "1%" }}>
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
                  onChange={(e) => {
                    setHakAkses(camelCase(e.target.value));
                  }}
                  error={hakAkses === "" || hakAkses.match(/[^A-Za-z ]/)}
                  helperText={hakAkses === "" && "Hak Akses tidak boleh kosong!" || hakAkses.match(/[^A-Za-z ]/) && "Hak Akses tidak boleh ada angka!"}
                  sx={{
                    width: "100%",
                  }}
                />
              </Grid>
              <Grid item xs={3} sx={{ marginBottom: "5%" }}>
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
                  {hasil}
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
        <StatusModal
          open={handleModal}
          handleClose={() => setHandleModal(false)}
          title={"Yakin ingin menambahkan Hak Akses baru?"}
          status={"warning"}
          actions={[
            <ButtonCustom data={"YA"} onClick={handleSave} />,
            <ButtonCustom
              data={"KEMBALI"}
              status={"cancel"}
              onClick={() => setHandleModal(false)}
            />,
          ]}
          description={
            <Typography
              id="modal-modal-title"
              sx={{
                margin: "10px 18px 36px 18px",
                textAlign: "center",
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              Pastikan data yang akan disimpan sudah benar
            </Typography>
          }
        ></StatusModal>
        <StatusModal
          open={openStatus}
          title={statusTitle}
          status={statusType}
          actions={[
            <ButtonCustom
              data={"OK"}
              onClick={handleClose}
              loading={loadingAdd}
            />,
          ]}
        ></StatusModal>
      </Dialog>
    </React.Fragment>
  );
}
