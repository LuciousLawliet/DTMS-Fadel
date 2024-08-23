import React from 'react'
import { AppBar, Container, Typography, Grid, Box, Toolbar } from '@mui/material'
import Menus from '../graphql/services/Menu.json'

const Subnavbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar 
                elevation={0}
                sx={{
                    position: 'fixed',
                    backgroundColor: '#6AC40A',
                    color: '#FFFFFF',
                    height: '4.5%',
                    justifyContent: "center",
                    marginTop: '72px'
                }}
            >
                <Toolbar>
                    <Container sx={{ marginLeft: 0}}>
                        <Grid 
                            container
                            direction="row"
                            spacing={3}
                            sx={{
                                marginLeft: '2',
                                width: '112%'
                            }}
                        >
                            <Grid item key={'BERANDA'}>
                                <Typography 
                                    sx={{ 
                                        fontWeight: 600, 
                                        fontSize: '13px', 
                                        textAlign: 'start', 
                                        color: 'white',
                                        '&:hover': {
                                            cursor: 'pointer'
                                        }
                                    }}
                                    //onClick={handleHomeNavigate}
                                >
                                    BERANDA
                                </Typography>
                            </Grid>
                            {/* <Grid item key={'PESANAN'}>
                                <Typography 
                                    sx={{ 
                                        fontWeight: 600, 
                                        fontSize: '13px', 
                                        textAlign: 'start', 
                                        color: 'white',
                                        '&:hover': {
                                            cursor: 'pointer'
                                        }
                                    }}
                                    //onClick={handleHomeNavigate}
                                >
                                    PESANAN
                                </Typography>
                            </Grid>
                            <Grid item key={'PERSEDIAAN'}>
                                <Typography 
                                    sx={{ 
                                        fontWeight: 600, 
                                        fontSize: '13px', 
                                        textAlign: 'start', 
                                        color: 'white',
                                        '&:hover': {
                                            cursor: 'pointer'
                                        }
                                    }}
                                    //onClick={handleHomeNavigate}
                                >
                                    PERSEDIAAN
                                </Typography>
                            </Grid>
                            <Grid item key={'GUDANG'}>
                                <Typography 
                                    sx={{ 
                                        fontWeight: 600, 
                                        fontSize: '13px', 
                                        textAlign: 'start', 
                                        color: 'white',
                                        '&:hover': {
                                            cursor: 'pointer'
                                        }
                                    }}
                                    //onClick={handleHomeNavigate}
                                >
                                    GUDANG
                                </Typography>
                            </Grid>
                            <Grid item key={'AKUNTANSI'}>
                                <Typography 
                                    sx={{ 
                                        fontWeight: 600, 
                                        fontSize: '13px', 
                                        textAlign: 'start', 
                                        color: 'white',
                                        '&:hover': {
                                            cursor: 'pointer'
                                        }
                                    }}
                                    //onClick={handleHomeNavigate}
                                >
                                    AKUNTANSI
                                </Typography>
                            </Grid>
                            <Grid item key={'KEUANGAN'}>
                                <Typography 
                                    sx={{ 
                                        fontWeight: 600, 
                                        fontSize: '13px', 
                                        textAlign: 'start', 
                                        color: 'white',
                                        '&:hover': {
                                            cursor: 'pointer'
                                        }
                                    }}
                                    //onClick={handleHomeNavigate}
                                >
                                    KEUANGAN
                                </Typography>
                            </Grid>
                            <Grid item key={'LAPORAN'}>
                                <Typography 
                                    sx={{ 
                                        fontWeight: 600, 
                                        fontSize: '13px', 
                                        textAlign: 'start', 
                                        color: 'white',
                                        '&:hover': {
                                            cursor: 'pointer'
                                        }
                                    }}
                                    //onClick={handleHomeNavigate}
                                >
                                    LAPORAN
                                </Typography>
                            </Grid>
                            <Grid item key={'PENGATURAN'}>
                                <Typography 
                                    sx={{ 
                                        fontWeight: 600, 
                                        fontSize: '13px', 
                                        textAlign: 'start', 
                                        color: 'white',
                                        '&:hover': {
                                            cursor: 'pointer'
                                        }
                                    }}
                                    //onClick={handleHomeNavigate}
                                >
                                    PENGATURAN
                                </Typography>
                            </Grid> */}
                            {
                                Menus.map((menu) => {
                                    return (
                                        <Grid item key={menu.name}>
                                            <Typography 
                                                sx={{
                                                    fontWeight: 600, 
                                                    fontSize: '13px', 
                                                    textAlign: 'start', 
                                                    //color: i.name.toLowerCase() === location.pathname.substring(1) ? '#0555AE' : 'white',
                                                    '&:hover': {
                                                        cursor: 'pointer'
                                                    }
                                                }}
                                                key={menu.name}
                                                //
                                                >
                                                    {menu.name}
                                            </Typography>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Container>
                    <Box
                        sx={{ display: { xs: 'none', md: 'flex' } }}
                    >
                        <Container
                            disableGutters
                            sx={{
                                width: '100%',
                            }}
                        >
                            <Typography sx={{ fontWeight: 400, fontSize: '13px', textAlign: 'end', color: 'white'}}>
                                Tanggal Valuta: 9 Agustus 2024
                            </Typography>

                        </Container>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Subnavbar