export const drawerContainer = { 
    display: 'flex', 
    width: '100%',
    height: '100%'
}

export const drawerBox = {
    display: { xs: 'none', md: 'flex' },
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    width: '20%',
    height: "100%",
    backgroundColor: "#FFF",
    color: '#FFF',
    borderRight: '1px solid #DDD',
    pt: 4,
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
}

export const navStyle = { 
    display: "flex", 
    flexDirection: 'column', 
    gap: 2, 
    width: '100%', 
    px: 3 
}

export const activeLink = { textDecoration: 'none', border: '1px solid #005D93', backgroundColor: '#005D93', cursor: 'pointer', padding: '10px 10px', borderRadius: 6 }
export const nonActiveLink = { textDecoration: 'none', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }
export const activeVal = { fontFamily: 'Dosis', color: '#FFF' }
export const nonActiveVal = { fontFamily: 'Dosis', color: '#888', padding: '10px 10px', cursor: 'pointer' }

export const helpBox = { 
    display: 'flex', 
    height: '100%', 
    width: '100%', 
    justifyContent: "flex-start", 
    alignItems: "flex-end", 
    pb: 4, 
    pl: 4 
}

export const helpText = { 
    color: '#888', 
    fontFamily: 'Dosis', 
    fontWeight: 300 
}

export const childrenBox = { 
    width: { xs: '100%', md: '80%' }, 
    height: '100%',
    backgroundColor: '#F5F5F5' 
}

// MOBILE

export const mobile = { 
    display: { xs: 'block', md: 'none' },
    '& .MuiDrawer-paper': {
        width: '50%',
        padding: 2
    }
}

export const topLogo = { 
    display: 'flex', 
    justifyContent: "center", 
    alignItems: "center", 
    width: "100%", 
    padding: '10px 20px', 
    margin: '20px 0' 
}

export const logoText = { 
    flexGrow: 1, 
    color: '#005D93', 
    fontFamily: 'Dosis', 
    fontSize: { xs: 12, sm: 20, md: 25 }, 
    fontWeight: '800' 
}

export const imgBox = { 
    width: { xs: 30, md: 50 }
}
export const logoImg = { 
    width: '100%'
}

export const bottom = { 
    width: '100%', 
    height: '100%', 
    padding: '30px 10px' 
}

export const bottomHelp = { color: "#888", fontFamily: 'Dosis' }