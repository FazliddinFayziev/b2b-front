import React from 'react';
import { Box, Typography } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import { ButtonStart, herroContainer, outlineTextStyles, outlineTextStylesSmall } from './Style';

const Banner: React.FC = () => {
    return (
        <Box sx={herroContainer}>
            <Typography sx={outlineTextStyles}>
                Welcome to Coolness AI - Revolutionizing Customer Service with Intelligent Chatbots!
            </Typography>
            <Typography sx={outlineTextStylesSmall}>
                Welcome to Coolness.ai
            </Typography>
            <form id="login-form" action="/auth/auth0/" method="post">
                <ButtonStart onClick={() => {
                    (document.getElementById("login-form") as any).submit()}} 
                    variant="outlined" 
                    startIcon={<GroupsIcon sx={{color: '#FFF'}} />} 
                >
                    GET STARTED TODAY!
                </ButtonStart>
            </form>
        </Box>
    );
};

export default Banner;
