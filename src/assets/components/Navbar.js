import * as React from 'react';
import {AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem, Fab } from '@mui/material';
import NavigationIcon from '@mui/icons-material/Menu';
import embdLogo from '../images/embd-logo-black.png';
import { Rowing } from '@mui/icons-material';
import { typography } from '@mui/system';


const pages = ['Products', 'Pricing', 'Blog', 'about', 'services'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box>
    <AppBar position="static">
      {/* <Container maxWidth="lg"> */}
        <Toolbar disableGutters>
            
         

          
          
          <Box sx={{ display: { xs: 'flex' } }}>
            {/* How do I set the logo to a set width and height */}
            <img src={embdLogo} alt="dance logo" className='Nav-Logo'  /> 
            
          </Box>
  <Box sx={{ flexGrow: 1, flexDirection: "row", display: "flex", justifyContent: "space-evenly" }}> 
                {pages.map((page) => (
                
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
              </Box>
          <Box sx={{ flexGrow: 0, width: "385px", justifyContent: "flex-end", display: "flex" }}>
           
            <Fab variant="extended" size='medium' color="secondary" aria-label="add">
               {/* <NavigationIcon sx={{ mr: 1 }} /> */}
                  book your first lesson
            </Fab>
          </Box>
        </Toolbar>
      {/* </Container> */}
    </AppBar>
    <AppBar sx={{height: "68.5px", justifyContent: "center"}} color="transparent" position="static">
      <Typography sx={{fontFamily:"tangerine" }}align='center' variant='h4' >Welcome to the world of Ballroom Dance</Typography>
    </AppBar>
    </Box>
  );
};
export default ResponsiveAppBar;


