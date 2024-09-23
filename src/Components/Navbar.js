import React, { useContext } from 'react'
import { AppBar, Container, Typography, Grid, Box, Toolbar, Menu, MenuItem, Divider, IconButton, Avatar } from '@mui/material'
import Logo from '../assets/images/logo-simplified.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

const Navbar = ({user}) => {
    const settings = ['Ubah Profil', 'Buku Panduan', 'Bantuan']

    const [anchorElUser, setAnchorElUser] = React.useState(null)

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    const getInitials = (nama) => {
        const allNames = nama.trim().split(' ')
        const initials = allNames.reduce((acc, curr, index) => {
          if(index === 0 || index === allNames.length - 1){
            acc = `${acc}${curr.charAt(0).toUpperCase()}`
          }
          return acc
        }, '')
        return initials
    }

    const handleMenuItem = async (event, type) => {
        
          handleCloseUserMenu();
    }

    return (
        <Box sx={{ 
            width: '100%',
            flexGrow: 1 }}>
            <AppBar 
                elevation={0}
                sx={{
                    position: 'fixed',
                    backgroundColor: '#0555AE',
                    color: '#FFDC53',
                    height: 72,
                    justifyContent: "center"
                }}
            >
                <Toolbar>
                    <Container sx={{ marginLeft: 0}}>
                        <Grid 
                            container
                            direction="row"
                            spacing="10"
                            width='400px'
                            sx={{
                                marginLeft: '1'
                            }}
                        >
                            <Grid item 
                                xs={2}
                                //onClick={handleHomeNavigate}
                                sx={{
                                    '&:hover': {
                                        cursor: 'pointer'
                                    },
                                }}
                            >
                                <img src={Logo} alt="DTMS 2.0" style={{ width: 50 }}/>
                            </Grid>
                            <Grid item container
                                direction="column"
                                justifyContent="flex-start"
                                alignItems='start'
                                xs={10}
                                //onClick={handleHomeNavigate}
                                sx={{
                                    '&:hover': {
                                        cursor: 'pointer'
                                    },
                                }}
                            >
                                <Grid item>
                                    <Typography sx={{ fontWeight: 700, fontSize: '18px' }}>
                                        DISTRIBUTION AND TRADING
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography sx={{ fontSize: '18px' }}>
                                        MANAGEMENT SYSTEM
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                    
                    <Box sx={{ flexGrow: 1 }} />

                    <Box
                        sx={{ display: { xs: 'none', md: 'flex' } }}
                    >
                        <Container
                            disableGutters
                            sx={{
                                width: 400,
                            }}
                        >
                            <Typography sx={{ fontWeight: 700, fontSize: '12px', textAlign: 'end', color: 'white' }}>
                                {user.nama.toUpperCase()}
                            </Typography>
                            <Typography sx={{ fontWeight: 500, fontSize: '12px', textAlign: 'end', color: 'white' }}>
                                {user.branch_name.toUpperCase()} - {user.departemen.toUpperCase()}
                            </Typography>
                            <Typography sx={{ fontWeight: 500, fontSize: '12px', textAlign: 'end', color: 'white' }}>
                                {user.role_id.toUpperCase()} - {user.role_access.toUpperCase()}
                            </Typography>

                        </Container>

                        <IconButton onClick={handleOpenUserMenu} sx={{ color: 'white', paddingLeft: '8px', marginRight: 0 }}>
                            <ArrowDropDownIcon/>
                        </IconButton>

                        <Avatar alt={user.nama} sx={{ width: 50, height: 50, fontWeight: 700}} >
                            {getInitials(user.nama)}
                        </Avatar>
                        
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                            >
                            {settings.map((setting, i) => (
                                <MenuItem key={setting} onClick={(e) => handleMenuItem(e, i)}>
                                    <Typography textAlign="center" sx={{fontSize: '14px', fontWeight: 500}}>{setting}</Typography>
                                </MenuItem>
                            ))}
                            <Divider />
                            <MenuItem key={'Keluar'} onClick={(e) => handleMenuItem(e, 'keluar')}>
                                <Typography textAlign="center" sx={{fontSize: '14px', fontWeight: 500}}>Keluar</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>  
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar