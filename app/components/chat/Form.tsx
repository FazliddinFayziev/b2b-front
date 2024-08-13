import React from 'react';
import { Box, Button } from '@mui/material';
import { useGlobalContext } from '~/contexts/context';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { field, inputBox, send, sendButton, StyledTextField } from './Style';

const Form: React.FC = () => {
    const { content, setContent, onSend } = useGlobalContext();

    const onContent = (e: React.ChangeEvent<HTMLInputElement>) => setContent(e.target.value);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            onSend(content);
        }
    };

    const handleSendClick = () => {
        onSend(content);
    };

    return (
        <Box sx={inputBox}>
            <StyledTextField 
                sx={field} 
                id="message" 
                value={content}
                variant="outlined" 
                onChange={onContent}
                onKeyDown={handleKeyDown}
                placeholder='Ask about Coolness AI...' 
            />
            <Button onClick={handleSendClick} sx={sendButton}>
                <SendRoundedIcon sx={send} />
            </Button>
        </Box>
    );
};

export default Form;