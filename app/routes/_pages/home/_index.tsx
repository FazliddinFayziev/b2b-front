import React from 'react';
import { Box } from '@mui/material';
import { Chat, Control } from '~/components';
import { useGlobalContext } from '~/contexts/context';

// Styles
const playground = { display: 'flex', height: '100%' }
const chat = { width: { xs: '100%', md: '75%' }, height: '100%' }
const control = { display: { xs: 'none', md: 'block' }, width: '25%', border: '1px solid #DDD', height: '100%' }

const generateBotResponse = () => {
  const botResponses = [
      "Hello! How can I assist you today?",
      "Thank you for reaching out to Coolness AI!",
      "We are here to help you with any questions.",
      "Your message has been received. We'll get back to you shortly.",
  ];
  const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
  return randomResponse;
};

const Playground:React.FC = () => {
  const { sent, setSent, messages, setMessages } = useGlobalContext();

  React.useEffect(() => {
    if (sent) {
      setTimeout(() => {
        const botMessageId = `${Date.now()}-${Math.random()}`;
        const botMessage = { 
          id: botMessageId, 
          content: generateBotResponse(), 
          type: "BOT" 
        };
        setMessages([...messages, botMessage]);
        setSent(false);
      }, 1000);
    }
  }, [sent]);

  return (
    <Box sx={playground}>
      <Box sx={chat}><Chat /></Box>
      <Box sx={control}><Control /></Box>
    </Box>
  );
};

export default Playground;