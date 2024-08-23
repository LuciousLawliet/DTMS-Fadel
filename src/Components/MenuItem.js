import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { Close, Rotate90DegreesCcw } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';

export default function MenuItem() {
    const [open, setOpen] = React.useState(true);
    const tidak = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Grid container direction='row' paddingLeft= '25px' onClick={() => setOpen(!open)}>
            <Grid item xs={1}>
                <ArrowRightIcon sx={{
                         transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
                         transition: 'transform 0.3s ease',
                    }} />
            </Grid>
            <Grid item xs={11}>
                <Typography fontWeight={700}>
                    MASTER
                </Typography>
            </Grid>
        </Grid>
        // <List
        //     sx={{ width: '100%', maxWidth: 360 }}
        //     component="nav"
        // //aria-labelledby="nested-list-subheader"
        // >
        //     <ListItemButton onClick={() => setOpen(!open)}>
        //         <ListItemIcon>
        //             <ArrowRightIcon sx={{
        //                 transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
        //                 transition: 'transform 0.3s ease',
        //             }}
        //             />
        //         </ListItemIcon>
        //         <ListItemText primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium', lineHeight: '1 qpx'}} primary="MASTER" />
        //     </ListItemButton>
        //     <Collapse in={open}>
        //         <List component="div" disablePadding>
        //             <ListItemButton sx={{ pl: 4 }}>
        //                 <ListItemIcon>
        //                     <ArrowRightIcon sx={{
        //                         transform: !open ? 'rotate(90deg)' : 'rotate(0deg)',
        //                         transition: 'transform 0.3s ease'
        //                     }}
        //                     />
        //                 </ListItemIcon>
        //                 <ListItemText primary="Master Struktur" />
        //             </ListItemButton>
        //         </List>
        //     </Collapse>
        //     <Collapse in={open} timeout="auto" unmountOnExit>
        //         <List component="div" disablePadding>
        //             <ListItemButton sx={{ pl: 4 }}>
        //                 <ListItemIcon>
        //                     <ArrowRightIcon sx={{
        //                         transform: !open ? 'rotate(90deg)' : 'rotate(0deg)',
        //                         transition: 'transform 0.3s ease'
        //                     }}
        //                     />
        //                 </ListItemIcon>
        //                 <ListItemText primary="Master Posisi" />
        //             </ListItemButton>
        //         </List>
        //     </Collapse>
        //     <Collapse in={open} timeout="auto" unmountOnExit>
        //         <List component="div" disablePadding>
        //             <ListItemButton sx={{ pl: 4 }}>
        //                 <ListItemIcon>
        //                     <ArrowRightIcon sx={{
        //                         transform: !open ? 'rotate(90deg)' : 'rotate(0deg)',
        //                         transition: 'transform 0.3s ease'
        //                     }}
        //                     />
        //                 </ListItemIcon>
        //                 <ListItemText primary="Master Pemasok" />
        //             </ListItemButton>
        //         </List>
        //     </Collapse>
        //     <Collapse in={open} timeout="auto" unmountOnExit>
        //         <List component="div" disablePadding>
        //             <ListItemButton sx={{ pl: 4 }}>
        //                 <ListItemIcon>
        //                     <ArrowRightIcon sx={{
        //                         transform: !open ? 'rotate(90deg)' : 'rotate(0deg)',
        //                         transition: 'transform 0.3s ease'
        //                     }}
        //                     />
        //                 </ListItemIcon>
        //                 <ListItemText primary="Master Barang" />
        //             </ListItemButton>
        //         </List>
        //     </Collapse>
        //     <Collapse in={open} timeout="auto" unmountOnExit>
        //         <List component="div" disablePadding>
        //             <ListItemButton sx={{ pl: 4 }}>
        //                 <ListItemIcon>
        //                     <ArrowRightIcon sx={{
        //                         transform: !open ? 'rotate(90deg)' : 'rotate(0deg)',
        //                         transition: 'transform 0.3s ease'
        //                     }}
        //                     />
        //                 </ListItemIcon>
        //                 <ListItemText primary="Master Pelanggan" />
        //             </ListItemButton>
        //         </List>
        //     </Collapse>
        //     <Collapse in={open} timeout="auto" unmountOnExit>
        //         <List component="div" disablePadding>
        //             <ListItemButton sx={{ pl: 4 }}>
        //                 <ListItemIcon>
        //                     <ArrowRightIcon sx={{
        //                         transform: !open ? 'rotate(90deg)' : 'rotate(0deg)',
        //                         transition: 'transform 0.3s ease'
        //                     }}
        //                     />
        //                 </ListItemIcon>
        //                 <ListItemText primary="Master bank" />
        //             </ListItemButton>
        //         </List>
        //     </Collapse>
        //     <Collapse in={open} timeout="auto" unmountOnExit>
        //         <List component="div" disablePadding>
        //             <ListItemButton sx={{ pl: 4 }}>
        //                 <ListItemIcon>
        //                     <ArrowRightIcon sx={{
        //                         transform: !open ? 'rotate(90deg)' : 'rotate(0deg)',
        //                         transition: 'transform 0.3s ease'
        //                     }}
        //                     />
        //                 </ListItemIcon>
        //                 <ListItemText primary="Master COA" />
        //             </ListItemButton>
        //         </List>
        //     </Collapse>
        //     <Collapse in={open} timeout="auto" unmountOnExit>
        //         <List component="div" disablePadding>
        //             <ListItemButton sx={{ pl: 4 }}>
        //                 <ListItemIcon>
        //                     <ArrowRightIcon sx={{
        //                         transform: !open ? 'rotate(90deg)' : 'rotate(0deg)',
        //                         transition: 'transform 0.3s ease'
        //                     }}
        //                     />
        //                 </ListItemIcon>
        //                 <ListItemText primary="Master GL" />
        //             </ListItemButton>
        //         </List>
        //     </Collapse>
        //     <Collapse in={open} timeout="auto" unmountOnExit>
        //         <List component="div" disablePadding>
        //             <ListItemButton sx={{ pl: 4 }}>
        //                 <ListItemText primary="Master Karyawan" />
        //             </ListItemButton>
        //         </List>
        //     </Collapse>
        //     <Collapse in={open} timeout="auto" unmountOnExit>
        //         <List component="div" disablePadding>
        //             <ListItemButton sx={{ pl: 4 }}>
        //                 <ListItemText primary="Master User" />
        //             </ListItemButton>
        //         </List>
        //     </Collapse>
        //     <Collapse in={open} timeout="auto" unmountOnExit>
        //         <List component="div" disablePadding>
        //             <ListItemButton sx={{ pl: 4 }}>
        //                 <ListItemText primary="Master Hak Akses" />
        //             </ListItemButton>
        //         </List>
        //     </Collapse>
        //     <Collapse in={open} timeout="auto" unmountOnExit>
        //         <List component="div" disablePadding>
        //             <ListItemButton sx={{ pl: 4 }}>
        //                 <ListItemText primary="Master Unit" />
        //             </ListItemButton>
        //         </List>
        //     </Collapse>
        //     <Collapse in={open} timeout="auto" unmountOnExit>
        //         <List component="div" disablePadding>
        //             <ListItemButton sx={{ pl: 4 }}>
        //                 <ListItemText primary="Master Gudang" />
        //             </ListItemButton>
        //         </List>
        //     </Collapse>
        // </List>
    );
}












