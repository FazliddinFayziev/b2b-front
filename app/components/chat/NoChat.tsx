import React from 'react';
import { Box, Typography } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import { noChat, noChatIcon, noChatText } from './Style';

const NoChat:React.FC = () => {
    return (
        <Box sx={noChat}>
            <ForumIcon sx={noChatIcon} />
            <Typography sx={noChatText}>
                Start Chatting!
            </Typography>
        </Box>
    )
}

export default NoChat;