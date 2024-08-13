import React from 'react';
import { loading } from './Style';
import { CircularProgress, Box } from '@mui/material';

const Loading:React.FC = () => {
    return (
        <Box sx={loading}>
            <CircularProgress size={80} />
        </Box>
    );
};

export default Loading;
