import { Button } from "@mui/material";
import styled from '@emotion/styled';

// =============================================================>
// ======================= LAYOUT ========================>
// =============================================================>

export const layoutContainer = (bgImage: string) => ({
  display: 'flex', 
  flexDirection: 'column', 
  position: 'relative',
  width: '100%',
  height: '100vh',
  backgroundImage: `linear-gradient(to left, rgba(135, 206, 250, 0.7), rgba(255, 255, 255, 0.7)), url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  overflow: 'hidden',
});

// =============================================================>
// ======================= BANNER ========================>
// =============================================================>

export const herroContainer = { 
  flex: 1,
  display: 'flex', 
  flexDirection: 'column', 
  justifyContent: 'center', 
  alignItems: 'center', 
  padding: { xs: '20px', sm: '30px', md: '50px' } 
};

export const outlineTextStyles = {
    display: { xs: 'none', sm: 'block', md: 'block' },
    WebkitTextStroke: '1px #005D93',
    WebkitTextFillColor: 'transparent',
    color: 'transparent',
    fontWeight: 900,
    fontFamily: '"Dosis", sans-serif',
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.6)',
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: { xs: '2rem', md: '3rem' }, 
};

export const outlineTextStylesSmall = {
  display: { xs: 'block', sm: 'none', md: 'none' },
  WebkitTextStroke: '1px #005D93',
  WebkitTextFillColor: 'transparent',
  color: 'transparent',
  fontWeight: 900,
  fontFamily: '"Dosis", sans-serif',
  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.6)',
  textAlign: 'center',
  marginBottom: '20px',
  fontSize: { xs: '2rem', md: '3rem' },
}

export const ButtonStart = styled(Button)`
  border-radius: 50px;
  padding: 12px 60px;
  font-weight: bold;
  background-color: #005D93;
  color: #fff;
  font-family: 'Dosis', sans-serif;
  border: 2px solid #005D93; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s, color 0.3s, transform 0.3s;
  margin-top: 20px;

  &:hover {
    background-color: #003b6f;
    color: #fff;
    transform: scale(1.05); 
  }

  &:active {
    background-color: #002d5b;
  }

  @media (max-width: 600px) {
    padding: 12px 30px;
    font-size: 0.875rem;
  }
`;

// =============================================================>
// =========================== NAVBAR ==========================>
// =============================================================>

export const logoText = { 
  color: '#005D93', 
  fontFamily: 'Dosis', 
  fontSize: 30, 
  fontWeight: '800' 
};
