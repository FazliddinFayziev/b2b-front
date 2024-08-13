import * as React from 'react';
import Main from './Main';
import { control } from './Style';
import { Box } from '@mui/material';
import RightDrawer from './RightDrawer';

const Control: React.FC = () => {
    return (
        <>
            <Box sx={control}><Main /></Box>
            <RightDrawer><Main /></RightDrawer>
        </>
    )
}

export default Control;