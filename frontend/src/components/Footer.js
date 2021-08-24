import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box';
import { Container, Typography } from '@material-ui/core'

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://Semyonp.com/">
                Semyonp.com
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const Footer = () => {
    return (
        <footer>
            <Container>
                <Box  mt={8}>
                    <Copyright />
                </Box>
            </Container>
        </footer>
    )
}

export default Footer
