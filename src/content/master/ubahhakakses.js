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
import { useEditHakAkses } from "../../graphql/services/HakAkses";
import { GET_HAK_AKSES, useHakAkses } from "../../graphql/services/HakAkses";
import { ButtonCustom } from "../../Components/Button";
import { StatusModal } from "../../Components/Modal";
import HakAkses from "./hakakses";

const UbahHakAkses = ({ rows, row }) => {
  const [open, setOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);
  //const [formData, setFormData] = React.useState({ nama: "", status: "" });
  const [kode, setKode] = React.useState("");
  const [hakAkses, setHakAkses] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [editHakAkses, { loading, error }] = useEditHakAkses();
  const [handleModal, setHandleModal] = React.useState(false);
  const [openStatus, setOpenStatus] = React.useState(false);
  const [statusTitle, setStatusTitle] = React.useState("");
  const [statusType, setStatusType] = React.useState("");
  const { refetch } = useHakAkses({
    refetchQueries: [{ query: GET_HAK_AKSES }],
  });

  const handleClickOpen = () => {
    setOpen(true);
    setSelectedRow(row);
  };

  const handleClose = () => {
    setSelectedRow(null);
    setHandleModal(false)
    setOpen(false);
    setOpenStatus(false);
    refetch();
  };

  // Mengatasi perubahan komponen-komponen
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // Mengatasi perubahan komponen, hanya select
  const handleFieldChange = (e) => {
    // setFormData({
    //   kode: formData.kode,
    //   nama: formData.nama,
    //   status: e.target.value,
    // });
    setStatus(e.target.value)
  };

  useEffect(
    () => {
      if (selectedRow) {
        // setFormData({
        //   kode: selectedRow.kode,
        //   nama: selectedRow.nama,
        //   status: selectedRow.status,
        // });
        setKode(selectedRow.kode)
        setHakAkses(selectedRow.nama)
        setStatus(selectedRow.status)
      }
    },
    [selectedRow],
    //console.log(formData.kode, formData.nama, formData.status)
  );

  const handleSimpan = () => {
    if (hakAkses !== "" && hakAkses.match(/[^0-9 ]/)) {
      setHandleModal(true);
    } else {
    }
  };

  const handleSave = () => {
    if (rows.some((g) => g.nama === hakAkses) === false) {
      editHakAkses({
        variables: {
          kode: kode,
          nama: hakAkses,
          status: status,
        },
      });
      //setOpen(false);
      // setHakAkses("");
      // setKode("");
      refetch();
      setOpenStatus(true);
      setStatusTitle("Hak Akses baru berhasil disimpan");
      setStatusType("success");
    } else if (row.nama === hakAkses) {
      editHakAkses({
        variables: {
          kode: kode,
          nama: hakAkses,
          status: status,
        },
      });
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

  if (loading) return "Loading";
  if (error) return `Submission error! ${error.message}`;

  return (
    <React.Fragment >
      <EditIcon variant="outlined" onClick={handleClickOpen}></EditIcon>
      <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
        {/* <DialogTitle sx={{paddingTop: '0'}}>UBAH HAK AKSES</DialogTitle> */}
        <Typography sx={{paddingLeft: '5%', paddingTop: '4%', fontSize: '25px'}}>UBAH HAK AKSES</Typography>
        <DialogContent dividers sx={{marginLeft: '5%', marginRight: '5%'}}>
          <Grid container >
            <Grid item xs={3} sx={{marginBottom: '3%'}}>
              <DialogContentText sx={{ fontSize: '12', color: 'black' }}>
                ID
              </DialogContentText>
            </Grid>
            <Grid item xs={9}>
              <Typography
                sx={{
                  fontSize: "12",
                  color: "black",
                  fontWeight: 500,
                }}
              >
                {kode}
              </Typography>
            </Grid>
            <Grid item xs={3} sx={{marginBottom: '3%'}}>
              <DialogContentText sx={{ paddingTop: "9%", fontSize: '12', color: 'black' }}>
                Hak Akses
              </DialogContentText>
            </Grid>
            <Grid item xs={9}>
              <TextField
                name="nama"
                variant="outlined"
                size="small"
                value={hakAkses}
                onChange={(e) => {
                  setHakAkses(e.target.value)
                }}
                error={hakAkses === "" || hakAkses.match(/[^A-Za-z ]/)}
                helperText={hakAkses === "" && "Hak Akses tidak boleh kosong!" || hakAkses.match(/[^A-Za-z ]/) && "Hak Akses harus huruf!"}
                sx={{
                  width: "100%",
                }}
              />
              {/* <input
                  value={formData.nama}
                  onChange={
                    handleChange
                  }
                  size="45"
                ></input> */}
            </Grid>
            <Grid item xs={3}>
              <DialogContentText sx={{ paddingTop: "10%", fontSize: '12', color: 'black' }}>
                Status
              </DialogContentText>
            </Grid>
            <Grid item xs={9}>
              <FormControl
                
                sx={{
                  width: "100%",
                  marginTop: '1%'
                }}
                size="small"
              >
                {/* <NativeSelect
                  
                  value={formData.status}
                  onChange={handleFieldChange}
                >
                  <option value={"Aktif"}>Aktif</option>
                  <option value={"Tidak Aktif"}>Tidak Aktif</option>
                </NativeSelect> */}
                <Select 
                  value={status}
                  onChange={handleFieldChange}
                >
                  <MenuItem value={"Aktif"}>Aktif</MenuItem>
                  <MenuItem value={"Tidak Aktif"}>Tidak Aktif</MenuItem>
                  {/* <option value={"Aktif"}>Aktif</option>
                  <option value={"Tidak Aktif"}>Tidak Aktif</option> */}
                </Select>
              </FormControl>

            </Grid>
          </Grid>
          <DialogActions>
            <Grid
              container
              spacing={3}
              marginTop="1%"
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
                <ButtonCustom data={"BATAL"} status={"cancel"} onClick={handleClose} />
              </Grid>
            </Grid> 
          </DialogActions>
        </DialogContent>
        <StatusModal
          open={handleModal}
          handleClose={() => setHandleModal(false)}
          title={`Yakin ingin mengubah Hak Akses ${hakAkses}?`}
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

export default UbahHakAkses;
