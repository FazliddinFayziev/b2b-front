import React from 'react';
import { Box } from '@mui/material';
import DrawerBox from './DrawerBox';
import DrawerMobile from './DrawerMobile';
import { useLocation } from 'react-router-dom';
import { childrenBox, drawerContainer } from './Style';

interface DrawerProps {
    children: React.ReactNode
}

const Drawer: React.FC<DrawerProps> = ({ children }) => {
    const location:any = useLocation()
    const path = location.pathname
    return (
        <Box sx={drawerContainer}>
            <DrawerBox path={path} />
            <DrawerMobile path={path} />
            <Box sx={childrenBox}>
                {children}
            </Box>
        </Box>
    );
}

export default Drawer