import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid } from '@mui/material';
import { Divider } from '@mui/material';

export default function UbahHakAkses() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment >
      <Button sx={{
        width: '120px', marginRight: '92%'
      }} variant="contained" color="success" onClick={handleClickOpen}>
        + TAMBAH
      </Button>
      <Dialog
        fullWidth
        maxWidth= "sm"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"TAMBAH HAK AKSES"}
        </DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <text>ID<span style={{ color: 'red' }}>*</span></text>
              </Grid>
              <Grid item xs={9} sx={{fontWeight: 600}}>
                <text>ID</text>
              </Grid>
              <Grid item xs={3}>
                <text>Hak Akses<span style={{ color: 'red' }}>*</span></text>
              </Grid>
              <Grid item xs={9}>
                <input size="45"></input>
              </Grid>
              <Grid item xs={3}>
                <text>Status</text>
              </Grid>
              <Grid item xs={9} sx={{fontWeight: 600}}>
                <text>Aktif</text>              
              </Grid>
            </Grid>
          </DialogContentText>
          <DialogActions>
          <Grid container spacing={3} justifyContent='center' marginBottom='5%'>
            <Grid item>
              <Button variant='contained' size='small' type="submit">SIMPAN</Button>
            </Grid>
            <Grid item>
              <Button variant='contained' size='small' onClick={handleClose}>BATAL</Button>
            </Grid>
          </Grid>
          
        </DialogActions>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
