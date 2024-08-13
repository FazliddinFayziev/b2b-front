import * as React from 'react';
import Box from '@mui/material/Box';
import { rightDrawer } from './Style';
import Drawer from '@mui/material/Drawer';
import { useGlobalContext } from '~/contexts/context';

interface RightDrawerProp {
    children: React.ReactNode;
}

const RightDrawer: React.FC<RightDrawerProp> = ({ children }) => {
    const { state, toggleRightDrawer } = useGlobalContext();

    const list = (children: React.ReactNode) => (
        <Box sx={{ width: 250 }} role="presentation">
            {children}
        </Box>
    );

    return (
        <Drawer
            anchor="right"
            sx={rightDrawer}
            open={state.right}
            onClose={toggleRightDrawer('right', false)}
        >
            <Box sx={{ padding: 4 }}>
                {list(children)}
            </Box>
        </Drawer>
    );
};

export default RightDrawer;