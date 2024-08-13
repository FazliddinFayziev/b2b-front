import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

interface ModalProp {
    title: string;
    text: string;
    open: boolean;
    close: () => void;
    action: () => void;
}

const Modal:React.FC<ModalProp> = ({ title, text, open, close, action }) => {
    return (
        <Dialog open={open} onClose={close}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent><DialogContentText>{text}</DialogContentText></DialogContent>
            <DialogActions>
                <Button onClick={close}>Cancel</Button>
                <Button onClick={action} color="error">Delete</Button>
            </DialogActions>
        </Dialog>
    )
}

export default Modal