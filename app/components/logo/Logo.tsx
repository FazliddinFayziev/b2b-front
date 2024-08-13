import { Box, Typography } from "@mui/material";
import logo from "../assets/blue-logo.png";

const logoText = { 
    color: '#005D93', 
    fontFamily: 'Dosis', 
    fontSize: 20, 
    fontWeight: '800' 
};
  
const Logo: React.FC = () => (
    <Box sx={{ display: 'flex', justifyContent: 'flex-start',  alignItems: "center", my: 2, mx: 2 }}>
        <img style={{ width: 40 }} src={logo} alt="Coolness.ai logo" />
        <Typography variant="h5" sx={logoText}>Coolness AI</Typography>
    </Box>
);

export default Logo;