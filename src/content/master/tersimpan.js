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
import Logo from '../../assets/images/success.png'

export default function Tersimpan() {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button variant='contained' size='small' type="submit">SIMPAN</Button>
            <Dialog
                ullWidth
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
                }}>
                <DialogTitle>UBAH HAK AKSES</DialogTitle>
                <Grid>
                    <img src={Logo}></img>
                </Grid>
            </Dialog>
        </React.Fragment>
    );
}
