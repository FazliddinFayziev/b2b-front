import React from 'react';
import { navs } from './data';
import { Link } from '@remix-run/react';
import logoImage from "./assets/logo.svg";
import { useLogout } from '@refinedev/core';
import { useGlobalContext } from '~/contexts/context';
import { Box, Button, Drawer, Typography } from '@mui/material';
import { activeLink, activeVal, bottom, bottomHelp, imgBox, 
logoImg, logoText, mobile, nonActiveLink, nonActiveVal, topLogo } from './Style';

interface DrawerMobileProp {
    path: string
}

const DrawerMobile: React.FC<DrawerMobileProp> = ({ path }) => {
    const { openDrawer, toggleDrawer } = useGlobalContext();
    const { mutate: logout } = useLogout();

    const handleLogout = async () => {
        try {
            await logout(); 
            toggleDrawer();
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    return (
        <Drawer sx={mobile} open={openDrawer} onClose={toggleDrawer}>
            <Box sx={topLogo}>
                <Typography variant="h5" sx={logoText}>Coolness AI</Typography>
                <Box sx={imgBox}>
                    <img src={logoImage} alt='CoolnessAI' style={logoImg} />
                </Box>
            </Box>

            {navs.map((nav) => {
                const active = path.startsWith(nav.link)
                return (
                    <Link key={nav.id} to={`${nav.link}`} style={active ? activeLink : nonActiveLink} onClick={toggleDrawer}>
                        <Typography sx={active ? activeVal : nonActiveVal}>
                            {nav.val}
                        </Typography>
                    </Link>
                )
            })}

            <Button onClick={handleLogout} sx={nonActiveLink} style={{ textTransform: 'none' }}>
                <Typography sx={nonActiveVal}>
                    Logout
                </Typography>
            </Button>

            <Box sx={bottom}>
                <Typography sx={bottomHelp}>Need help?</Typography>
            </Box>
        </Drawer>
    );
}

export default DrawerMobile;
