import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Grid,
  Divider,
  Typography,
  TextField,
  FormHelperText,
} from "@mui/material";
import {
  GET_MATA_UANG,
  useAddMataUang,
  useMataUang,
} from "../../graphql/services/MataUang";
import { ButtonCustom } from "../../Components/Button";
import { StatusModal } from "../../Components/Modal";

export default function TambahMataUang({ dataGet }) {
  const [open, setOpen] = React.useState(false);
  const [mata, setMata] = React.useState("");
  const [nama, setNama] = React.useState("");
  const [beli, setBeli] = React.useState("");
  const [jual, setJual] = React.useState("");
  const [tengah, setTengah] = React.useState("0");
  const [simbol, setSimbol] = React.useState("");
  const [kesalahan, setKesalahan] = React.useState(false);
  const [status, setStatus] = React.useState("Aktif");
  const [handleModal, setHandleModal] = React.useState(false);
  const [openStatus, setOpenStatus] = React.useState(false);
  const [statusTitle, setStatusTitle] = React.useState('')
  const [statusType, setStatusType] = React.useState('');
  const current = new Date();
  const tanggal = `${("0" + current.getDate()).slice(-2)}/${(
    "0" +
    (current.getMonth() + 1)
  ).slice(-2)}/${current.getFullYear()}`;
  const { data, loading, error } = useMataUang();
  const [addMataUang, { loadingAdd }] = useAddMataUang();
  const { refetch } = useMataUang({
    refetchQueries: [{ query: GET_MATA_UANG }],
  });

  //const formatedNumber = this.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;
  // const useHandleDelete = () => {
  //   useDeleteHakAkses(kode)
  // }

  const rows = data.getMataUang;

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
    setOpen(false);
    setHandleModal(false);
    setOpenStatus(false);
    refetch();
  };

  const handleSave = () => {
    if (rows.some((row) => row.mata === mata) === false) {
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
      setStatusTitle('Mata Uang baru berhasil disimpan');
      setStatusType('success');
    } else {
      setOpenStatus(true);
      setStatusTitle(`Mata Uang ${mata} sudah terdaftar!`);
      setStatusType('failed');
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

  const handleSimpan = () => {
    
    if (
      mata !== "" &&
      mata.length === 3 &&
      mata.match(/[^0-9]/) &&
      //rows.some((row) => row.mata === mata) === false &&
      nama !== "" &&
      nama.match(/[^0-9 ]/) &&
      //rows.some((row) => row.nama === nama) === false &&
      beli !== "" &&
      beli.match(/[^A-Za-z]/) &&
      //rows.some((row) => row.beli === beli) === false &&
      jual !== "" &&
      jual.match(/[^A-Za-z]/) &&
      //rows.some((row) => row.jual === jual) === false &&
      //tengah !== "" &&
      simbol !== "" &&
      simbol.length === 1 &&
      tanggal !== "" &&
      status !== ""
    ) {
      let coba = handleKursTengah(beli, jual);
      setTengah(coba);
      setHandleModal(true);
    } else {
    }
  };

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
                  }}
                  error={
                    mata === "" ||
                    mata.length < 3 ||
                    mata.length > 3 ||
                    mata.match(/[^A-Z]/)
                  }
                  helperText={
                    mata === ""
                      ? "Mata Uang tidak boleh kosong!"
                      : (mata.length < 3 || mata.length > 3
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
                  }}
                  error={nama === "" || nama.match(/[^A-Z ]/)}
                  helperText={
                    nama === ""
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
                  }}
                  error={beli === "" || beli.match(/[^0-9.,]/)}
                  helperText={
                    beli === ""
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
                  }}
                  error={jual === "" || jual.match(/[^0-9.,]/)}
                  helperText={
                    jual === ""
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
                    //setTengah(handleKursTengah(jual, beli));
                  }}
                  error={simbol === "" || simbol.length > 1}
                  helperText={
                    simbol === ""
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
                <ButtonCustom
                  data={"SIMPAN"}
                  onClick={handleSimpan}
                  
                />
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
