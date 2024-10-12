import * as React from "react";
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
  GET_MATA_UANG,
  useAddMataUang,
  useMataUang,
} from "../../graphql/services/MataUang.js";
import { ButtonCustom } from "../../components/Button.js";
import { StatusModal } from "../../components/Modal.js";

export default function TambahMataUang({ dataGet }) {
  const [open, setOpen] = React.useState(false);
  const [mata, setMata] = React.useState("");
  const [nama, setNama] = React.useState("");
  const [beli, setBeli] = React.useState("");
  const [jual, setJual] = React.useState("");
  const [tengah, setTengah] = React.useState("0");
  const [simbol, setSimbol] = React.useState("");
  const [salahMata, setSalahMata] = React.useState(true);
  const [salahNama, setSalahNama] = React.useState(true);
  const [salahBeli, setSalahBeli] = React.useState(true);
  const [salahJual, setSalahJual] = React.useState(true);
  const [salahsimbol, setSalahSimbol] = React.useState(true);
  const status = "Aktif";
  const [handleModal, setHandleModal] = React.useState(false);
  const [openStatus, setOpenStatus] = React.useState(false);
  const [statusTitle, setStatusTitle] = React.useState("");
  const [statusType, setStatusType] = React.useState("");
  const current = new Date();
  const tanggal = `${("0" + current.getDate()).slice(-2)}/${(
    "0" +
    (current.getMonth() + 1)
  ).slice(-2)}/${current.getFullYear()}`;
  const [addMataUang, { loadingAdd }] = useAddMataUang();
  const { refetch } = useMataUang({
    refetchQueries: [{ query: GET_MATA_UANG }],
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setBeli("");
    setMata("");
    setJual("");
    setTengah("");
    setNama("");
    setSimbol("");
    setSalahMata(true);
    setSalahNama(true);
    setSalahBeli(true);
    setSalahJual(true);
    setSalahSimbol(true);
    setOpen(false);
    setHandleModal(false);
    setOpenStatus(false);
    refetch();
  };

  const handleSimpan = () => {
    if (
      mata !== "" &&
      mata.length === 3 &&
      mata.match(/[^0-9]/) &&
      nama !== "" &&
      nama.match(/[^0-9 ]/) &&
      beli !== "" &&
      beli.match(/[^A-Za-z]/) &&
      jual !== "" &&
      jual.match(/[^A-Za-z]/) &&            
      simbol !== "" &&
      simbol.length === 1 &&
      tanggal !== "" &&
      status !== ""
    ) {
      let coba = handleKursTengah(beli, jual);
      setTengah(coba);
      setHandleModal(true);
    }

    if (mata === "") {
      setSalahMata(false);
    }
    if (nama === "") {
      setSalahNama(false);
    }
    if (beli === "") {
      setSalahBeli(false);
    }
    if (jual === "") {
      setSalahJual(false);
    }
    if (simbol === "") {
      setSalahSimbol(false);
    }
  };

  const handleSave = () => {
    if (dataGet.some((row) => row.mata === mata) === false) {
      addMataUang({
        variables: {
          mata: mata,
          nama: nama,
          beli: beli,
          jual: jual,
          tengah: tengah,
          simbol: simbol,
          tanggal: tanggal,
          status: status,
        },
      });
      //setOpen(false);
      setBeli("");
      setMata("");
      setJual("");
      setTengah("");
      setNama("");
      setSimbol("");
      refetch();
      setOpenStatus(true);
      setStatusTitle("Mata Uang baru berhasil disimpan");
      setStatusType("success");
    } else {
      setOpenStatus(true);
      setStatusTitle(`Mata Uang ${mata} sudah terdaftar!`);
      setStatusType("failed");
    }
  };

  const handleKursTengah = (pertama, kedua) => {
    var hasil =
      (Number(pertama.replace(/,/gi, "")) + Number(kedua.replace(/,/gi, ""))) /
      2;
    hasil = hasil.toString();
    hasil = hasil.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return hasil;
  };

  return (
    <React.Fragment>
      <ButtonCustom data={"Tambah"} status={"add"} onClick={handleClickOpen} />
      <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
        <Typography
          sx={{ paddingLeft: "5%", paddingTop: "4%", fontSize: "25px" }}
        >
          TAMBAH MATA UANG
        </Typography>

        <DialogContent dividers sx={{ marginLeft: "5%", marginRight: "5%" }}>
          <DialogContentText id="alert-dialog-description">
            <Grid container>
              <Grid item xs={4} sx={{ marginBottom: "4%" }}>
                <DialogContentText
                  sx={{ fontSize: "12", color: "black", paddingTop: "7%" }}
                >
                  Mata Uang<span style={{ color: "red" }}>*</span>
                </DialogContentText>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  name="mata"
                  variant="outlined"
                  size="small"
                  value={mata}
                  onChange={(e) => {
                    setMata(e.target.value.toUpperCase());
                    if (mata === "") {
                      setSalahMata(true);
                    }
                  }}
                  error={
                    mata === " " ||
                    !salahMata ||
                    (mata.length < 3 && mata.length !== 0) ||
                    (mata.length > 3 && mata.length !== 0) ||
                    mata.match(/[^A-Z]/)
                  }
                  helperText={
                    mata === " " || !salahMata
                      ? "Mata Uang tidak boleh kosong!"
                      : ((mata.length < 3 && mata.length !== 0) ||
                        (mata.length > 3 && mata.length !== 0)
                          ? "Harus tiga karakter!"
                          : "") ||
                        (mata.match(/[^A-Z]/) && "Tidak boleh angka")
                  }
                  inputProps={{ inputMode: "text" }}
                  sx={{
                    width: "100%",
                  }}
                />
              </Grid>
              <Grid item xs={4} sx={{ marginBottom: "4%" }}>
                <DialogContentText
                  sx={{ fontSize: "12", color: "black", paddingTop: "7%" }}
                >
                  Nama Mata Uang<span style={{ color: "red" }}>*</span>
                </DialogContentText>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  name="nama"
                  variant="outlined"
                  size="small"
                  value={nama}
                  onChange={(e) => {
                    setNama(e.target.value.toUpperCase());
                    if (nama === "") {
                      setSalahNama(true);
                    }
                  }}
                  error={nama === " " || !salahNama || nama.match(/[^A-Z ]/)}
                  helperText={
                    nama === " " || !salahNama
                      ? "Nama Mata Uang tidak boleh kosong!"
                      : nama.match(/[^A-Z ]/) && "Masukkan dengan benar!"
                  }
                  sx={{
                    width: "100%",
                  }}
                />
              </Grid>
              <Grid item xs={4} sx={{ marginBottom: "4%" }}>
                <DialogContentText
                  sx={{ fontSize: "12", color: "black", paddingTop: "7%" }}
                >
                  Kurs Beli<span style={{ color: "red" }}>*</span>
                </DialogContentText>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  name="beli"
                  variant="outlined"
                  size="small"
                  onChange={(e) => {
                    setBeli(
                      e.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    );
                    if (beli === "") {
                      setSalahBeli(true);
                    }
                  }}
                  error={beli === " " || !salahBeli || beli.match(/[^0-9.,]/)}
                  helperText={
                    beli === " " || !salahBeli
                      ? "Kurs Beli tidak boleh kosong!"
                      : beli.match(/[^0-9,.]/) && "Harus angka!"
                  }
                  sx={{
                    width: "100%",
                  }}
                />
                {console.log(beli)}
              </Grid>
              <Grid item xs={4} sx={{ marginBottom: "4%" }}>
                <DialogContentText
                  sx={{ fontSize: "12", color: "black", paddingTop: "7%" }}
                >
                  Kurs Jual<span style={{ color: "red" }}>*</span>
                </DialogContentText>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  name="jual"
                  variant="outlined"
                  size="small"
                  onChange={(e) => {
                    setJual(
                      e.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    );
                    if (jual === "") {
                      setSalahJual(true);
                    }
                  }}
                  error={jual === " " || !salahJual || jual.match(/[^0-9.,]/)}
                  helperText={
                    jual === " " || !salahJual
                      ? "Kurs Jual tidak boleh kosong!"
                      : jual.match(/[^0-9.,]/) && "Harus angka!"
                  }
                  sx={{
                    width: "100%",
                  }}
                />
              </Grid>
              <Grid item xs={4} sx={{ marginBottom: "4%" }}>
                <DialogContentText
                  sx={{ fontSize: "12", color: "black", paddingTop: "5%" }}
                >
                  Kurs Tengah<span style={{ color: "red" }}>*</span>
                </DialogContentText>
              </Grid>
              <Grid item xs={8}>
                <DialogContentText
                  value={tengah}
                  sx={{
                    fontSize: "12",
                    color: "black",
                    paddingTop: "2.5%",
                    fontWeight: 600,
                  }}
                >
                  {handleKursTengah(beli, jual)}
                </DialogContentText>
              </Grid>
              <Grid item xs={4} sx={{ marginBottom: "4%" }}>
                <DialogContentText
                  sx={{ fontSize: "12", color: "black", paddingTop: "5%" }}
                >
                  Simbol<span style={{ color: "red" }}>*</span>
                </DialogContentText>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  name="simbol"
                  variant="outlined"
                  size="small"
                  value={simbol}
                  onChange={(e) => {
                    setSimbol(e.target.value);
                    if (simbol === "") {
                      setSalahSimbol(true);
                    }                  
                  }}
                  error={simbol === " " || !salahsimbol || simbol.length > 1}
                  helperText={
                    simbol === " " || !salahsimbol
                      ? "Simbol mata uang tidak boleh kosong!"
                      : simbol.length > 1 && "Maksimal satu karakter!"
                  }
                  sx={{
                    width: "100%",
                  }}
                />
              </Grid>
              <Grid item xs={4} sx={{ marginBottom: "2%" }}>
                <DialogContentText
                  sx={{ fontSize: "12", color: "black", paddingTop: "5%" }}
                >
                  Tanggal Efektif<span style={{ color: "red" }}>*</span>
                </DialogContentText>
              </Grid>
              <Grid item xs={8}>
                <DialogContentText
                  value={tanggal}
                  sx={{
                    paddingTop: "2.5%",
                    fontSize: "12",
                    color: "black",
                    fontWeight: 600,
                  }}
                >
                  {tanggal}
                </DialogContentText>
              </Grid>
              <Grid item xs={4} sx={{ marginBottom: "5%" }}>
                <DialogContentText
                  sx={{ paddingTop: "11.5%", fontSize: "12", color: "black" }}
                >
                  Status
                </DialogContentText>
              </Grid>
              <Grid item xs={8}>
                <DialogContentText
                  value={status}
                  sx={{ paddingTop: "5.5%", fontSize: "12", color: "black" }}
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
          title={"Yakin ingin menambahkan Mata Uang baru?"}
          status={"warning"}
          actions={[
            <ButtonCustom data={"YA"} onClick={handleSave} />,
            <ButtonCustom
              data={"KEMBALI"}
              status={"cancel"}
              onClick={() => setHandleModal(false)}
              loading={loadingAdd}
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
