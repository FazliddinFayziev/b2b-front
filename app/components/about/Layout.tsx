import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import { Box } from '@mui/material';
import bgImage from './assets/future.gif';
import { layoutContainer } from './Style';

const AboutLayout: React.FC = () => {
  return (
    <Box sx={layoutContainer(bgImage)}>
      <Navbar />
      <Banner />
    </Box>
  );
}

export default AboutLayout;