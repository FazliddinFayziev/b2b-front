import React from 'react';
import { Link } from '@remix-run/react';
import { topText } from '../chat/Style';
import { Add, ArrowBack } from '@mui/icons-material';
import { addButtonStyle, goBack, main } from './Style';
import { Button as MuiButton, Box, Stack, Typography } from '@mui/material';

interface TopProps {
    name: string;
    back?: boolean;
    upload?: boolean;
    uploadText: string;
    action?: () => void;
}

const Top: React.FC<TopProps> = ({ name, back, uploadText, upload, action }) => {
    return (
        <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={main}>
                {back && (<Link to="/storage" style={goBack}><ArrowBack /></Link>)} 
                <Typography sx={topText}>{name}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: "center", gap: 2 }}>
                {upload ? (
                    <label htmlFor="upload-file">
                        <input
                            type="file"
                            id="upload-file"
                            style={{ display: 'none' }}
                            // onChange={handleFileChange}
                        />
                        <MuiButton variant="outlined" component="span" sx={addButtonStyle}>
                            <Add /> {uploadText}
                        </MuiButton>
                    </label>
                ) : (
                    <MuiButton onClick={action} variant="outlined" component="span" sx={addButtonStyle}>
                        <Add /> {uploadText}
                    </MuiButton>
                )}
            </Box>
        </Stack>
    );
}

export default Top;
