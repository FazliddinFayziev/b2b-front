import { styled } from '@mui/material/styles';
// ===============================================>
// ===================== CONTROL =================>
// ===============================================>

export const control = { height: '100%', padding: 2, backgroundColor: '#FFF' }

// ===============================================>
// ================= RIGHT DRAWER ================>
// ===============================================>

export const rightDrawer = {display: { xs: 'block', md: 'none' }}

// ===============================================>
// ===================== MAIN ====================>
// ===============================================>

export const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export const topButtons = { 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    gap: 3 
}

export const upload = { 
    textTransform: 'none', 
    fontSize: '1rem', 
    padding: '10px 20px', 
    fontFamily: 'Dosis' 
}

export const model = { 
    textTransform: 'none', 
    fontSize: '1rem', 
    padding: '10px 20px', 
    fontFamily: 'Dosis' 
}


export const tokensBox = { marginTop: 3 }
export const tokenText = { 
    marginBottom: 1, 
    fontFamily: 'Dosis', 
    color: '#888', 
    fontWeight: 300 
}

export const propmtBox = { marginTop: 1 }
export const prompts = {
    '& .MuiInputBase-root': {
      fontFamily: 'Dosis',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: 2,
      },
    },
}

export const compare = { marginTop: 3 }
export const compareButton = { 
    textTransform: 'none', 
    padding: '10px 20px', 
    fontFamily: 'Dosis', 
    width: '100%' 
} 




