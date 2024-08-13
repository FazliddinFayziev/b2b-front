import { blue, grey } from '@mui/material/colors';

export const main = { 
    display: 'flex', 
    gap: 2, 
    justifyContent: 'space-between', 
    alignItems: 'center',
    my: 4
};

export const topText = { 
    fontFamily: 'Dosis', 
    fontWeight: 800, 
    fontSize: 20 
}

export const collectionContainer = { maxHeight: '80vh', overflowY: 'auto' }
export const createModal = { overflowY: 'auto', px: 4 }
export const createText = { fontFamily: 'Dosis', marginBottom: 2 }
export const createCollectionCon = { padding: 4, backgroundColor: 'white', margin: '100px auto', borderRadius: 2, maxWidth: 400 }
export const folder = { fontFamily: 'Dosis', fontSize: 15, fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '200px', color: '#000' }
export const goBack = { textDecoration: 'none', color: '#000', display: 'flex', justifyContent: 'center', alignItems: "center" }
export const buttonBox = { 
    textDecoration: 'none', 
    backgroundColor: blue[700],
    borderRadius: 6,
    marginTop: 2,
    display: 'flex',
    alignItems: 'center',
    transition: 'background-color 0.3s ease',
    '&:hover': {
        backgroundColor: blue[900],
    },
};

export const activeStyle = { 
    fontFamily: 'Dosis', 
    fontWeight: 300, 
    color: '#FFF', 
    padding: '10px 15px', 
    fontSize: '1.1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
};

export const noneActive = { 
    fontFamily: 'Dosis', 
    fontWeight: 300, 
    color: grey[500], 
    padding: '10px 15px',
    fontSize: '1.1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
};

export const addButtonStyle = { 
    color: blue[600],
    fontFamily: 'Dosis',
    fontWeight: 300,
    padding: '10px 15px',
    borderRadius: 6,
    fontSize: '1rem',
    textTransform: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    '&:hover': {
        backgroundColor: blue[900],
        color: '#FFF',
    },
};

export const fileStyle = { 
    padding: '10px 16px', 
    borderBottom: `1px solid ${grey[300]}`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'background-color 0.2s ease',
    '&:hover': {
        backgroundColor: grey[100],
    },
    fontFamily: 'Dosis',
    fontSize: '1rem',
};

export const collectionStyle = { 
    padding: '15px', 
    backgroundColor: grey[100], 
    marginBottom: '10px', 
    borderRadius: 8,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.2s ease, box-shadow 0.2s ease',
    '&:hover': {
        backgroundColor: grey[200],
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    },
    cursor: 'pointer',
    fontFamily: 'Dosis',
    fontSize: '1.1rem',
};

export const fileInCollectionStyle = { 
    padding: '8px 0', 
    paddingLeft: '20px', 
    borderBottom: `1px solid ${grey[200]}`,
    transition: 'background-color 0.2s ease',
    '&:hover': {
        backgroundColor: grey[100],
    },
    fontFamily: 'Dosis',
    fontSize: '1rem',
};
