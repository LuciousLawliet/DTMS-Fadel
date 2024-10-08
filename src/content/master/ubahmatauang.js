import * as React from "react";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import EditIcon from "@mui/icons-material/Edit";
import { Grid, Menu, MenuItem, Select, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import {
  GET_MATA_UANG,
  useMataUang,
  useEditMataUang,
} from "../../graphql/services/MataUang";
import { ButtonCustom } from "../../Components/Button";
import { StatusModal } from "../../Components/Modal";

const UbahMataUang = ({ rows, row }) => {
  const [open, setOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [formData, setFormData] = React.useState({
    mata: "",
    nama: "",
    beli: "",
    jual: "",
    tengah: "",
    simbol: "",
    status: "",
  });
  const [mata, setMata] = React.useState("");
  const [nama, setNama] = React.useState("");
  const [beli, setBeli] = React.useState("");
  const [jual, setJual] = React.useState("");
  const [tengah, setTengah] = React.useState("");
  const [simbol, setSimbol] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [editHakAkses, { loading, error }] = useEditMataUang();
  const [handleModal, setHandleModal] = React.useState(false);
  const [openStatus, setOpenStatus] = React.useState(false);
  const [statusTitle, setStatusTitle] = React.useState("");
  const [statusType, setStatusType] = React.useState("");
  const current = new Date();
  const tanggal = `${("0" + current.getDate()).slice(-2)}/${(
    "0" +
    (current.getMonth() + 1)
  ).slice(-2)}/${current.getFullYear()}`;
  const { refetch } = useMataUang({
    refetchQueries: [{ query: GET_MATA_UANG }],
  });

  const handleClickOpen = () => {
    setOpen(true);
    setSelectedRow(row);
  };

  const handleClose = () => {
    setSelectedRow(null);
    setHandleModal(false);
    setOpen(false);
    setOpenStatus(false);
    refetch();
  };

  // Mengatasi perubahan komponen-komponen
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Mengatasi perubahan komponen, hanya select
  const handleFieldChange = (e) => {
    // setFormData({
    //   mata: mata,
    //   nama: nama,
    //   beli: beli.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    //   jual: jual.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    //   tengah: tengah.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    //   simbol: simbol,
    //   status: e.target.value,
    // });
    // setMata(mata)
    // setNama(nama)
    // setBeli(beli)
    // setJual(jual)
    // setTengah(tengah)
    // setSimbol(simbol)
    setStatus(e.target.value);
  };

  useEffect(
    () => {
      if (selectedRow) {
        // setFormData({
        //   mata: selectedRow.mata,
        //   nama: selectedRow.nama,
        //   beli: selectedRow.beli,
        //   jual: selectedRow.jual,
        //   tengah: selectedRow.tengah,
        //   simbol: selectedRow.simbol,
        //   status: selectedRow.status,
        // });
        setMata(selectedRow.mata);
        setNama(selectedRow.nama);
        setBeli(selectedRow.beli);
        setJual(selectedRow.jual);
        setTengah(selectedRow.tengah);
        setSimbol(selectedRow.simbol);
        setStatus(selectedRow.status);
      }
    },
    [selectedRow]
    //console.log(formData.kode, formData.nama, formData.status)
  );

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
      let coba = handleKursTengah(beli, beli);
      setTengah(coba);
      setHandleModal(true);
    }
  };

  const handleSave = () => {
    if (rows.some((row) => row.mata === mata) === false) {
      editHakAkses({
        variables: {
          mata: mata,
          nama: nama,
          beli: beli.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          jual: jual.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          tengah: tengah.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          simbol: simbol,
          tanggal: tanggal,
          status: status,
        },
      });
      //setOpen(false);
      refetch();
      setOpenStatus(true);
      setStatusTitle("Mata Uang baru berhasil disimpan");
      setStatusType("success");
    } else if (row.mata === mata) {
      editHakAkses({
        variables: {
          mata: mata,
          nama: nama,
          beli: beli.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          jual: jual.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          tengah: tengah.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          simbol: simbol,
          tanggal: tanggal,
          status: status,
        },
      });
      //setOpen(false);
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

  if (loading) return "Loading";
  if (error) return `Submission error! ${error.message}`;

  return (
    <React.Fragment>
      <EditIcon variant="outlined" onClick={handleClickOpen}></EditIcon>
      <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
        {/* <DialogTitle sx={{paddingTop: '0'}}>UBAH HAK AKSES</DialogTitle> */}
        <Typography
          sx={{ paddingLeft: "5%", paddingTop: "4%", fontSize: "25px" }}
        >
          UBAH MATA UANG
        </Typography>
        <DialogContent dividers sx={{ marginLeft: "5%", marginRight: "5%" }}>
          <DialogContentText id="alert-dialog-description">
            <Grid container>
              <Grid item xs={4} sx={{ marginBottom: "3%" }}>
                <DialogContentText
                  sx={{ fontSize: "12", color: "black", paddingTop: "7%" }}
                >
                  Mata Uang<span style={{ color: "red" }}>*</span>
                </DialogContentText>
              </Grid>
              <Grid item xs={8}>
                <DialogContentText
                  sx={{
                    color: "black",
                    fontSize: "12",
                    fontWeight: 600,
                    paddingTop: "3.6%",
                  }}
                >
                  {mata}
                </DialogContentText>
              </Grid>
              <Grid item xs={4} sx={{ marginBottom: "4%" }}>
                <DialogContentText
                  sx={{ fontSize: "12", color: "black", paddingTop: "7%" }}
                >
                  Nama Mata Uang<span style={{ color: "red" }}>*</span>
                </DialogContentText>
              </Grid>
              <Grid item xs={8}>
                <DialogContentText
                  sx={{
                    color: "black",
                    fontSize: "12",
                    fontWeight: 600,
                    paddingTop: "3.6%",
                  }}
                >
                  {nama}
                </DialogContentText>
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
                  value={beli}
                  variant="outlined"
                  size="small"
                  onChange={(e) => {
                    setBeli(e.target.value);
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
                  value={jual}
                  variant="outlined"
                  size="small"
                  onChange={(e) => {
                    setJual(e.target.value);
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
                <DialogContentText
                  sx={{
                    color: "black",
                    fontSize: "12",
                    fontWeight: 600,
                    paddingTop: "2.5%",
                  }}
                >
                  {simbol}
                </DialogContentText>
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
                <FormControl
                  sx={{
                    width: "100%",
                    marginTop: "1%",
                  }}
                  size="small"
                >
                  <Select
                    value={status}
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                  >
                    <MenuItem value={"Aktif"}>Aktif</MenuItem>
                    <MenuItem value={"Tidak Aktif"}>Tidak Aktif</MenuItem>
                  </Select>
                </FormControl>
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
          title={`Yakin ingin mengubah Mata Uang ${mata}?`}
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
              loading={loading}
            />,
          ]}
        ></StatusModal>
      </Dialog>
    </React.Fragment>
  );
};

export default UbahMataUang;
