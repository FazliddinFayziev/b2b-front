import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Modal,
  TextField,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { v4 as uuidv4 } from 'uuid';

const ApiKeys: React.FC = () => {
  const [apiKeys, setApiKeys] = useState<Array<{ id: string; name: string; key: string; createdAt: string }>>([]);
  const [newKeyName, setNewKeyName] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [keyToDelete, setKeyToDelete] = useState<string | null>(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCreateKey = () => {
    const newKey = {
      id: uuidv4(),
      name: newKeyName || `Key ${apiKeys.length + 1}`,
      key: uuidv4(),
      createdAt: new Date().toLocaleString(),
    };
    setApiKeys([...apiKeys, newKey]);
    setNewKeyName('');
    handleClose();
  };

  const handleOpenDeleteModal = (id: string) => {
    setKeyToDelete(id);
    setDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false);
    setKeyToDelete(null);
  };

  const handleDeleteKey = () => {
    if (keyToDelete) {
      setApiKeys(apiKeys.filter(key => key.id !== keyToDelete));
      handleCloseDeleteModal();
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 600, fontFamily: 'Dosis' }}>
          API Keys
        </Typography>
        <Button variant="contained" color="primary" onClick={handleOpen} sx={{ fontFamily: 'Dosis', borderRadius: 2 }}>
          New Key +
        </Button>
      </Box>

      <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600, fontFamily: 'Dosis' }}>Name</TableCell>
              <TableCell sx={{ fontWeight: 600, fontFamily: 'Dosis' }}>API Key</TableCell>
              <TableCell sx={{ fontWeight: 600, fontFamily: 'Dosis' }}>Created At</TableCell>
              <TableCell align="right" sx={{ fontWeight: 600, fontFamily: 'Dosis' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {apiKeys.map(({ id, name, key, createdAt }) => (
              <TableRow key={id}>
                <TableCell sx={{ fontFamily: 'Dosis' }}>{name}</TableCell>
                <TableCell sx={{ fontFamily: 'Dosis' }}>{key.substring(0, 6)}...{key.substring(key.length - 4)}</TableCell>
                <TableCell sx={{ fontFamily: 'Dosis' }}>{createdAt}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleOpenDeleteModal(id)} color="error">
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            width: { xs: '90%', sm: '400px' },
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, fontFamily: 'Dosis', fontWeight: 500 }}>
            Create New API Key
          </Typography>
          <TextField
            fullWidth
            label="Key Name"
            variant="outlined"
            value={newKeyName}
            onChange={(e) => setNewKeyName(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" color="primary" onClick={handleCreateKey} sx={{ fontFamily: 'Dosis', borderRadius: 2 }}>
            Create Key
          </Button>
        </Box>
      </Modal>

      <Modal open={deleteModalOpen} onClose={handleCloseDeleteModal}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            width: { xs: '90%', sm: '400px' },
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, fontFamily: 'Dosis', fontWeight: 500 }}>
            Confirm Deletion
          </Typography>
          <Typography sx={{ mb: 3, fontFamily: 'Dosis' }}>
            Are you sure you want to delete this API key?
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Button variant="outlined" onClick={handleCloseDeleteModal} sx={{ fontFamily: 'Dosis', borderRadius: 2 }}>
              Cancel
            </Button>
            <Button variant="contained" color="error" onClick={handleDeleteKey} sx={{ fontFamily: 'Dosis', borderRadius: 2 }}>
              Delete
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default ApiKeys;
