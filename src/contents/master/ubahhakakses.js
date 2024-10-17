import { useEffect, useState, Fragment } from "react";
import {
  Grid,
  MenuItem,
  Select,
  Typography,
  FormControl,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { useEditHakAkses } from "../../graphql/services/HakAkses.js";
import { GET_HAK_AKSES, useHakAkses } from "../../graphql/services/HakAkses.js";
import { ButtonCustom, ButtonAction } from "../../components/Button.js";
import { StatusModal } from "../../components/Modal.js";

const UbahHakAkses = ({ rows, row }) => {
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  //const [formData, setFormData] = useState({ nama: "", status: "" });
  const [kode, setKode] = useState("");
  const [hakAkses, setHakAkses] = useState("");
  const [status, setStatus] = useState("");
  const [editHakAkses, { loadingEdit }] = useEditHakAkses();
  const [handleModal, setHandleModal] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);
  const [statusTitle, setStatusTitle] = useState("");
  const [statusType, setStatusType] = useState("");
  const { refetch } = useHakAkses({
    refetchQueries: [{ query: GET_HAK_AKSES }],
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
    setStatus(e.target.value);
  };

  useEffect(
    () => {
      if (selectedRow) {
        // setFormData({
        //   kode: selectedRow.kode,
        //   nama: selectedRow.nama,
        //   status: selectedRow.status,
        // });
        setKode(selectedRow.kode);
        setHakAkses(selectedRow.nama);
        setStatus(selectedRow.status);
      }
    },
    [selectedRow]
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

  return (
    <Fragment>
      <ButtonAction type={"edit"} onClick={handleClickOpen} />
      <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
        <Typography
          sx={{ paddingLeft: "5%", paddingTop: "4%", fontSize: "25px" }}
        >
          UBAH HAK AKSES
        </Typography>
        <DialogContent dividers sx={{ marginLeft: "5%", marginRight: "5%" }}>
          <Grid container>
            <Grid item xs={3} sx={{ marginBottom: "3%" }}>
              <DialogContentText sx={{ fontSize: "12", color: "black" }}>
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
            <Grid item xs={3} sx={{ marginBottom: "3%" }}>
              <DialogContentText
                sx={{ paddingTop: "9%", fontSize: "12", color: "black" }}
              >
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
                  setHakAkses(e.target.value);
                }}
                error={hakAkses === "" || hakAkses.match(/[^A-Za-z ]/)}
                helperText={
                  (hakAkses === "" && "Hak Akses tidak boleh kosong!") ||
                  (hakAkses.match(/[^A-Za-z ]/) && "Hak Akses harus huruf!")
                }
                sx={{
                  width: "100%",
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <DialogContentText
                sx={{ paddingTop: "10%", fontSize: "12", color: "black" }}
              >
                Status
              </DialogContentText>
            </Grid>
            <Grid item xs={9}>
              <FormControl
                sx={{
                  width: "100%",
                  marginTop: "1%",
                }}
                size="small"
              >
                <Select value={status} onChange={handleFieldChange}>
                  <MenuItem value={"Aktif"}>Aktif</MenuItem>
                  <MenuItem value={"Tidak Aktif"}>Tidak Aktif</MenuItem>
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
          title={`Yakin ingin mengubah Hak Akses?`}
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
              loading={loadingEdit}
            />,
          ]}
        ></StatusModal>
      </Dialog>
    </Fragment>
  );
};

export default UbahHakAkses;
