import React from 'react'
import { Modal, Box, Typography, Grid, Container, Divider } from "@mui/material"

export const StatusModal = ({ open, handleClose, title, description, actions, status}) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: 430,
                transform: 'translate(-50%, -50%)',
                bgcolor: 'white',
                borderRadius: 2,
                boxShadow: 10,
                p: 4
            }}>
                {status !== '' ? <Container maxWidth="sm">
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: "center",
                            alignItems: 'center'
                        }}
                    >
                    <img
                        src={require(`../assets/images/${status}.png`)}
                        width={120}
                        alt="modal"
                    />
                    </Box>
                </Container> : <></>
                }
                <Typography id="modal-modal-title"
                    sx={{
                        margin: '26px 18px 0 18px',
                        textAlign: "center",
                        fontSize: '18px',
                        fontWeight: 500
                    }}
                >
                    {title}
                </Typography>
                <Typography id="modal-modal-title"
                    sx={{
                        margin: '10px 18px 36px 18px',
                        textAlign: "center",
                        fontSize: '15px',
                        fontWeight: 500
                    }}
                >
                    {description}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <Grid item container
                        justifyContent="center"
                        display="flex"
                        alignItems="center"
                        spacing="30"
                    >
                        {actions.map((action, index) => (
                            <Grid item key={index}>
                                {action}
                            </Grid>
                        ))}
                    </Grid>
                </Typography>
            </Box>
        </Modal>
    )
}

export const DefaultModal = ({ open, handleClose, title, status, actions, description, size }) => {

    return (
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: size === "big" ? 1000 : 700,
                transform: 'translate(-50%, -50%)',
                bgcolor: 'white',
                borderRadius: 2,
                boxShadow: 10,
                p: 4
            }}>
                <Typography id="modal-modal-title" variant="h6" component="h2"
                    sx={{
                        marginBottom: '6px'
                    }}
                >
                    {title}
                </Typography>
                <Divider />
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <Grid 
                        container
                        direction="column"
                        justifyContent="flex-start"
                    >
                        {description}
                        <Grid item container
                            justifyContent="center"
                            display="flex"
                            alignItems="center"
                            spacing="30"
                        >
                            {actions.map((action, index) => (
                                <Grid item key={index}>
                                    {action}
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Typography>
            </Box>
        </Modal>
    )
}