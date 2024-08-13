import { TextField } from '@mui/material';
import styled from '@emotion/styled';

// ===============================================>
// ===================== CHAT ====================>
// ===============================================>

export const chat = { 
  display: 'flex', 
  flexDirection: 'column', 
  height: '100%', 
  backgroundColor: '#f4f4f4' 
}

export const topBox = { 
  display: 'flex', 
  justifyContent: 'space-between', 
  alignItems: 'center', 
  borderBottom: '1px solid #ddd', 
  px: 2, 
  py: 1, 
  backgroundColor: '#fff', 
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)' 
}

export const topText = { 
  color: '#333', 
  fontFamily: 'Dosis', 
  fontWeight: 800,
}

export const buttons = { 
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
  gap: 2 
}

export const viewCode = { 
  textDecoration: 'none', 
  padding: '10px 20px', 
  backgroundColor: '#005D93', 
  borderRadius: 8 
}

export const viewCodeText = { 
  color: '#fff', 
  fontFamily: 'Dosis' 
}

export const leftIcon = { 
  display: { xs: 'block', md: 'none' }, 
  cursor: 'pointer', 
  fontSize: 35 
}

// ====================================================>
// ====================== DROPDOWN ====================>
// ====================================================>

export const formContol = {
  m: 1,
  minWidth: 120,
  border: '1.5px solid #005D93',
  borderRadius: 2,
  '& .MuiInputLabel-root': {
    color: '#888',
    fontFamily: 'Dosis',
    fontWeight: 500
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'transparent',
    },
  },
}

// ===============================================>
// ==================== MESSAGES =================>
// ===============================================>

export const middleBox = { 
  flex: 1, 
  backgroundColor: '#fff', 
  overflowY: 'auto', 
  padding: '25px 20px' 
}

export const messageBox = {
    display: 'flex',
    margin: '0 auto',
    flexDirection: 'column',
}

export const bubble = (message:any) => {
    return {
        alignSelf: message.type === 'USER' ? 'flex-end' : 'flex-start',
        backgroundColor: message.type === 'USER' ? '#007AFF' : '#E1E1E1',
        color: message.type === 'USER' ? '#fff' : '#000',
        borderRadius: '15px',
        padding: '10px 15px',
        margin: '5px 0',
        maxWidth: '75%',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        wordWrap: 'break-word',
    }
}

export const content = { fontFamily: 'Dosis' }


// ====================================================>
// ====================== FORM ========================>
// ====================================================>

export const bottomBox = { 
  padding: 2, 
  backgroundColor: '#fff', 
  boxShadow: '0 -2px 4px rgba(0,0,0,0.1)' 
}

export const inputBox = {
  display: 'flex', 
  justifyContent: "center", 
  alignItems: "center", 
  gap: 1
}

export const StyledTextField = styled(TextField)`
  .MuiInputBase-input::placeholder {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    font-family: 'Dosis'
  }   
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: #4A90E2; 
    }
    &:hover fieldset {
      border-color: #357ABD; 
    }
    &.Mui-focused fieldset {
      border-color: #2A579A; 
    }
  }
`;

export const field = { 
  width: '100%',
  '& .MuiInputBase-root': {
    fontFamily: 'Dosis',
  },
};

export const sendButton = { 
  padding: "15px", 
  backgroundColor: "#005D93",
  ':hover': {
    backgroundColor: "#00467D",
  },
  color: 'white',
};

export const send = { color: "#FFF" }

// ====================================================>
// ====================== NO CHAT =====================>
// ====================================================>

export const noChat = { 
  height: '100%', 
  display: 'flex', 
  flexDirection: 'column', 
  justifyContent: "center", 
  alignItems: "center" 
}

export const noChatIcon = { color: '#888', fontSize: 60 }

export const noChatText = { color: "#888", fontFamily: 'Dosis', fontSize: 25 }



