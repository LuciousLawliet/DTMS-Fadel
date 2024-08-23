import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import { Grid, Stack } from '@mui/material';
import Select from '../../Components/Select';
import Tersimpan from './tersimpan';

export default function UbahHakAkses() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <EditIcon variant="outlined" onClick={handleClickOpen}>
            </EditIcon>
            <Dialog
                fullWidth
                maxWidth="sm"
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        const email = formJson.email;
                        console.log(email);
                        handleClose();
                    },
                }}
            >
                <DialogTitle>UBAH HAK AKSES</DialogTitle>
                <DialogContent dividers>
                    <Grid container marginLeft='5%'>
                        <Grid item xs={3} >
                            <DialogContentText>ID</DialogContentText>

                        </Grid>
                        <Grid item xs={9}>
                            <DialogContentText sx={{ fontWeight: 700 }}>ID</DialogContentText>
                        </Grid>
                        <Grid item xs={3}>
                            <DialogContentText sx={{ paddingTop: '15%' }}>Hak Akses</DialogContentText>
                        </Grid>
                        <Grid item xs={9}>
                            <TextField
                                hiddenLabel
                                autoFocus
                                required
                                size="small"
                                margin="dense"
                                id="hakAkses"
                                name="hakAkses"
                                variant="outlined"
                                sx={{
                                    width: '90%',
                                }}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <DialogContentText sx={{ paddingTop: '10%' }}>Status</DialogContentText>
                        </Grid>
                        <Grid item xs={9}>
                            <Select />
                        </Grid>
                    </Grid>
                    <DialogActions>
                        <Grid container spacing={3} marginTop='1%' justifyContent='center' marginBottom="5%">
                            <Grid item>
                                <Tersimpan />
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
