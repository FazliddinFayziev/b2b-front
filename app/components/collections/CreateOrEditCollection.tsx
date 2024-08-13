import React from 'react';
import { createCollectionCon, createModal, createText } from './Style';
import { Modal, Stack, Typography, TextField, Button, Container } from '@mui/material';

interface CreateOrEditProp {
    name: string;
    isEdit: boolean;
    isCreate: boolean;
    close: () => void;
    setName: (name: string) => void;
    createCollection: (name:string) => void;
    editCollection: (name: string) => void;
}

const CreateOrEditCollection: React.FC<CreateOrEditProp> = (
    { isCreate, isEdit, close, name, setName, createCollection, editCollection }
) => {
    return (
        <Modal sx={createModal} open={isCreate || isEdit} onClose={close}>
            <Container sx={createCollectionCon}>
                <Typography sx={createText} variant="h6">{isCreate ? 'Create a New Collection' : 'Edit Collection'}</Typography>
                <TextField fullWidth value={name} margin="normal" label="Collection Name" onChange={(e) => setName(e.target.value)}/>
                <Stack direction="row" spacing={2} sx={{ marginTop: 2 }}>
                    {isEdit && <Button variant="contained" onClick={() => editCollection(name)} disabled={!name}>Save edit</Button>}
                    {isCreate && <Button variant="contained" onClick={() => createCollection(name)} disabled={!name}>Create</Button>}
                    <Button variant="outlined" onClick={close}>Cancel</Button>
                </Stack>
            </Container>
        </Modal>
    );
}

export default CreateOrEditCollection;
