import React from 'react';
import { navs } from './data';
import { Link } from '@remix-run/react';
import { useLogout } from '@refinedev/core';
import { Box, Button, Typography } from '@mui/material';
import { activeLink, activeVal, drawerBox, helpBox, 
helpText, navStyle, nonActiveLink, nonActiveVal } from './Style';

interface DrawerBoxProp {
    path: string
}

const DrawerBox:React.FC<DrawerBoxProp> = ({ path }) => {
    const { mutate: logout } = useLogout();
    const handleLogout = async () => {
        try {
            await logout(); 
        } catch (error) {
            console.error("Logout failed", error);
        }
    };
    return (
        <Box sx={drawerBox}>
            <Box sx={navStyle}>
                <>
                    {navs.map((nav) => {
                        const active = path.startsWith(nav.link)
                        return (
                            <Link key={nav.id} to={`${nav.link}`} style={active ? activeLink : nonActiveLink}>
                                <Typography sx={active ? activeVal : nonActiveVal}>
                                    {nav.val}
                                </Typography>
                            </Link>
                        )
                    })}
                    <Box onClick={handleLogout} sx={nonActiveLink}>
                        <Typography sx={nonActiveVal}>
                            Logout
                        </Typography>
                    </Box>
                </>
            </Box>

            <Box sx={helpBox}>
                <Typography sx={helpText}>Need help?</Typography>
            </Box>
        </Box>
    )
}

export default DrawerBox