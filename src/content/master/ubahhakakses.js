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
import { Grid, MenuItem, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Select from "../../Components/Select";
import { useEditHakAkses } from "../../graphql/services/HakAkses";
import { GET_HAK_AKSES, useHakAkses } from "../../graphql/services/HakAkses";

const UbahHakAkses = ({ row }) => {
  const [open, setOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [formData, setFormData] = React.useState({ nama: "", status: "" });
  const [editHakAkses, { loading, error }] = useEditHakAkses();
  const { refetch } = useHakAkses({
    refetchQueries: [{ query: GET_HAK_AKSES }],
  });

  const handleClickOpen = () => {
    setOpen(true);
    setSelectedRow(row);
  };

  const handleClose = () => {
    setSelectedRow(null);
    setOpen(false);
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
    setFormData({
      kode: formData.kode,
      nama: formData.nama,
      status: e.target.value,
    });
  };

  useEffect(
    () => {
      if (selectedRow) {
        setFormData({
          kode: selectedRow.kode,
          nama: selectedRow.nama,
          status: selectedRow.status,
        });
      }
    },
    [selectedRow],
    //console.log(formData.kode, formData.nama, formData.status)
  );

  const handleSimpan = () => {
    editHakAkses({
      variables: {
        kode: formData.kode,
        nama: formData.nama,
        status: formData.status,
      },
    });
    refetch();
    setOpen(false);
  };

  if (loading) return "Loading";
  if (error) return `Submission error! ${error.message}`;

  return (
    <React.Fragment>
      <EditIcon variant="outlined" onClick={handleClickOpen}></EditIcon>
      <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
        <DialogTitle>UBAH HAK AKSES</DialogTitle>
        <DialogContent dividers>
          <Grid container marginLeft="5%">
            <Grid item xs={3}>
              <DialogContentText>ID</DialogContentText>
            </Grid>
            <Grid item xs={9}>
              <Typography
                sx={{
                  fontSize: "12",
                  color: "black",
                  fontWeight: 500,
                }}
              >
                {formData.kode}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <DialogContentText sx={{ paddingTop: "15%" }}>
                Hak Akses
              </DialogContentText>
            </Grid>
            <Grid item xs={9}>
              <TextField
                name="nama"
                variant="outlined"
                size="small"
                value={formData.nama}
                onChange={handleChange}
                sx={{
                  width: "90%",
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <DialogContentText sx={{ paddingTop: "10%" }}>
                Status
              </DialogContentText>
            </Grid>
            <Grid item xs={9}>
              <FormControl
                sx={{
                  width: "90%",
                }}
                size="small"
              >
                <NativeSelect
                  variant="outlined"
                  value={formData.status}
                  onChange={handleFieldChange}
                >
                  <option value={"Aktif"}>Aktif</option>
                  <option value={"Tidak Aktif"}>Tidak Aktif</option>
                </NativeSelect>
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
};

export default UbahHakAkses;
