import React from 'react';
import { logoText } from './Style';
import logo from "./assets/logo.svg";
import { Box, Typography } from '@mui/material';

const Navbar: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: "center", my: 2, mx: 2 }}>
      <img style={{ width: 50 }} src={logo} alt="Coolness.ai logo" />
      <Typography variant="h5" sx={logoText}>Coolness AI</Typography>
    </Box>
  );
}

export default Navbar;