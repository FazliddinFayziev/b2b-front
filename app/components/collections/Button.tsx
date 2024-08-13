import React from 'react';
import { Link, Typography } from '@mui/material';
import { buttonBox, activeStyle, noneActive } from './Style';

interface ButtonProp {
    name: string;
    active?: boolean;
    onClick?: () => void;
}

const Button: React.FC<ButtonProp> = ({ name, active = false, onClick }) => {
    return (
        <Link href="#" sx={buttonBox} onClick={onClick}>
            <Typography sx={active ? activeStyle : noneActive}>
                {name}
            </Typography>
        </Link>
    );
};

export default Button;
