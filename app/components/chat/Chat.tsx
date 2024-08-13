import React from 'react';
import Form from './Form';
import NoChat from './NoChat';
import Dropdown from './Dropdown';
import Messages from './Messages';
import { Box, Button, Typography } from '@mui/material';
import { useGlobalContext } from '~/contexts/context';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { bottomBox, buttons, chat, leftIcon, middleBox, topBox, topText, viewCode, viewCodeText } from './Style';
import CodeModal from './CodeModal';

const examples = [
  { id: 0, title: 'Example_1' },
  { id: 1, title: 'Example_2' },
  { id: 2, title: 'Example_3' },
];

const Chat: React.FC = () => {
  const { messages, toggleRightDrawer } = useGlobalContext();
  const [selectedValue, setSelectedValue] = React.useState<string>('');
  const [isModalOpen, setModalOpen] = React.useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <Box sx={chat}>
      <Box sx={topBox}>
        <Typography sx={topText}>Chat</Typography>
        <Box sx={buttons}>
          <Dropdown 
            values={examples} 
            initial="Examples" 
            selectedValue={selectedValue} 
            setSelectedValue={setSelectedValue} 
          />
          <Button style={viewCode} onClick={openModal}>
            <Typography sx={viewCodeText}>View Code</Typography>
          </Button>
          <KeyboardDoubleArrowLeftIcon 
            sx={leftIcon} 
            onClick={toggleRightDrawer('right', true)} 
          />
        </Box>
      </Box>
      <Box sx={middleBox}>
        {messages.length > 0 ? <Messages /> : <NoChat />}
      </Box>
      <Box sx={bottomBox}>
        <Form />
      </Box>
      <CodeModal open={isModalOpen} handleClose={closeModal} />
    </Box>
  );
};

export default Chat;
