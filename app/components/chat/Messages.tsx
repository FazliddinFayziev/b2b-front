import { Box, Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { bubble, content, messageBox } from './Style';
import { useGlobalContext } from '~/contexts/context';

const Messages: React.FC = () => {
    const { messages, sent } = useGlobalContext();

    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <Box sx={messageBox}>
            {messages.map((message, index) => (
                <Box key={index} sx={bubble(message)}>
                    <Typography sx={content} variant="body1">
                        {message.content}
                    </Typography>
                </Box>
            ))}
            {sent ? 'Typing...' : null}
            <div ref={messagesEndRef} />
        </Box>
    );
};

export default Messages;