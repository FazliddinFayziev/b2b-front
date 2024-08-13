import React from 'react';
import logoImage from "./assets/logo.svg";
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Toolbar, Typography, Avatar, Link } from '@mui/material';
import { api, apiBox, apiText, appBar, avatarBox, docs, docsText, imgBox, 
logoBox, logoImg, logoText, menuIcon, toolbar, topBar } from './Style';
import { useGlobalContext } from '~/contexts/context';
import { useGetIdentity } from '@refinedev/core';

type IUser = {
    id: number;
    name: string;
    avatar: string;
};

const TopBar: React.FC = () => {
    const { toggleDrawer } = useGlobalContext();
    const { data: user } = useGetIdentity<IUser>();
    return (
        <Box sx={topBar}>
            <AppBar sx={appBar} position="static">
                <Toolbar sx={toolbar} variant="dense">
                    <Box sx={logoBox}>
                        <MenuIcon onClick={toggleDrawer} sx={menuIcon} />
                        <Typography variant="h5" sx={logoText}>Coolness AI</Typography>
                        <Box sx={imgBox}>
                            <img src={logoImage} alt='CoolnessAI' style={logoImg} />
                        </Box>
                    </Box>
                    <Box sx={apiBox}>
                        <Link sx={docs} href="/docs">
                            <Typography sx={docsText}>Docs</Typography>
                        </Link>
                        {(user?.avatar || user?.name) && (
                        <Link sx={avatarBox} href='/profile'>
                            <Avatar src={user?.avatar} alt="User Avatar" />
                        </Link>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default TopBar;