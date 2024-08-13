import React from 'react';
import { File } from '../types';
import { folder } from '../Style';
import { InsertDriveFile, Delete } from '@mui/icons-material';
import { Box, IconButton, List, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction } from '@mui/material';

interface FilesProp {
    files: File[];
}

const Files: React.FC<FilesProp> = ({ files }) => {
    return (
        <List>
            {files.map((file, index) => (
                <ListItem key={file.id}>
                    <ListItemIcon><InsertDriveFile /></ListItemIcon>
                    <ListItemText primary={<Box sx={folder}>{file.name}</Box>} />
                    <ListItemSecondaryAction>
                        <IconButton color='error'><Delete /></IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    );
};

export default Files;
