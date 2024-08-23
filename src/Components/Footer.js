import React from 'react'
import { Container, Box, Typography } from '@mui/material'

const Footer = () => {
    
    return (
        <Box
            sx={{
                width: '100%',
                bottom: 0,
                position: 'fixed',
                height: '4%',
                backgroundColor: '#0555AE'
            }}
        >
            <Container
                sx={{
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '7px 10px',
                }}
            >
                <Typography
                    variant="caption"
                    sx={{
                        fontWeight: 500,
                        color: 'white'
                    }}
                >
                    {/* Copyright © 2024 IT Team PT Rajawali Nusindo */}
                    2024 © Copyright IT - TEAM
                </Typography>
            </Container>
        </Box>
        
    )
}

export default Footer
