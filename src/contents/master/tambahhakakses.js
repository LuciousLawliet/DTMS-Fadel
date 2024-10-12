import { useState, useEffect, Fragment } from "react";
import {
  Grid,
  Typography,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import {
  useAddHakAkses,
  useHakAkses,
} from "../../graphql/services/HakAkses.js";
import { ButtonCustom } from "../../components/Button.js";
import { StatusModal } from "../../components/Modal.js";

export default function TambahHakAkses({ dataGet }) {
  const [open, setOpen] = useState(false);
  const [kode, setKode] = useState("");
  const [hakAkses, setHakAkses] = useState("");
  const hasil = "Aktif";
  const [salahHakAkses, setSalahHakAkses] = useState(true);
  const [handleModal, setHandleModal] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);
  const [statusTitle, setStatusTitle] = useState("");
  const [statusType, setStatusType] = useState("");
  const [addHakAkses, { loadingAdd }] = useAddHakAkses();
  const { refetch } = useHakAkses();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setHakAkses("");
    setSalahHakAkses(true);
    setOpen(false);
    setHandleModal(false);
    setOpenStatus(false);
    refetch();
  };

  const handleSimpan = () => {
    if (hakAkses !== "" && hakAkses.match(/[^0-9 ]/)) {
      setHandleModal(true);
    } else {
      if (hakAkses === "") {
        setSalahHakAkses(false);
      }
    }
  };

  const handleSave = () => {
    if (dataGet.some((row) => row.nama === hakAkses) === false) {
      addHakAkses({ variables: { kode: kode, nama: hakAkses, status: hasil } });
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
    refetch();
    if (!dataGet.length) {
      setKode("001");
    } else {
      if (Number(dataGet[dataGet.length - 1].kode) < 9) {
        setKode(
          "00" +
            Math.floor(Number(dataGet[dataGet.length - 1].kode) + 1).toString()
        );
      } else {
        setKode(
          "0" +
            Math.floor(Number(dataGet[dataGet.length - 1].kode) + 1).toString()
        );
      }
    }
  }, [refetch, dataGet]);

  const camelCase = (str) => {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toUpperCase() : word.toUpperCase();
      })
      .replace(/\s+/g, " ");
  };

  return (
    <Fragment>
      <ButtonCustom data={"Tambah"} status={"add"} onClick={handleClickOpen} />
      <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
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
                <TextField
                  name="kode"
                  variant="outlined"
                  size="small"
                  onChange={(e) => {
                    setHakAkses(camelCase(e.target.value));
                    if (hakAkses === "") {
                      setSalahHakAkses(true);
                    }
                  }}
                  error={
                    hakAkses === " " ||
                    !salahHakAkses ||
                    hakAkses.match(/[^A-Za-z ]/)
                  }
                  helperText={
                    (hakAkses === " " || !salahHakAkses
                      ? "Hak Akses tidak boleh kosong!"
                      : "") ||
                    (hakAkses.match(/[^A-Za-z ]/) &&
                      "Hak Akses tidak boleh ada angka!")
                  }
                  sx={{
                    width: "100%",
                  }}
                />
              </Grid>
              <Grid item xs={3} sx={{ marginBottom: "5%" }}>
                <DialogContentText
                  sx={{ paddingTop: "14.5%", fontSize: "12", color: "black" }}
                >
                  Status<span style={{ color: "red" }}>*</span>
                </DialogContentText>
              </Grid>
              <Grid item xs={9} sx={{ fontWeight: 600 }}>
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
                <ButtonCustom data={"SIMPAN"} onClick={handleSimpan} />
              </Grid>
              <Grid item>
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
    </Fragment>
  );
}
