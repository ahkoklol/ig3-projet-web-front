import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography, useMediaQuery, Menu, MenuItem } from '@mui/material';
import { ShoppingCart, Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import logo from '../../assets/new logo sized.png';

const Navbar = () => {
  const isMobile = useMediaQuery('(max-width: 600px)'); // Define the mobile screen size

  const [anchorEl, setAnchorEl] = React.useState(null); // Define state for the menu anchor element

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); // Set the menu anchor element to the click target
  };

  const handleClose = () => {
    setAnchorEl(null); // Reset the menu anchor element
  };

  return (
    <AppBar position="fixed" color="inherit">
      <Toolbar style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ flexGrow: 1 }}>
          <img src={logo} alt="Lala le chat" height="90px" style={{ marginLeft: '25px', marginTop: '25px', marginBottom: '25px' }} />
        </div>
        {isMobile ? ( // If on mobile, render the menu button instead of the navigation buttons
          <>
            <IconButton aria-label="Menu" color="inherit" onClick={handleClick}>
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
              <MenuItem component={Link} to="/" onClick={handleClose}>Home</MenuItem>
              <MenuItem component={Link} to="/catalog" onClick={handleClose}>Catalog</MenuItem>
              <MenuItem component={Link} to="/contact" onClick={handleClose}>Contact</MenuItem>
              <MenuItem component={Link} to="/about" onClick={handleClose}>About Us</MenuItem>
            </Menu>
          </>
        ) : ( // If not on mobile, render the navigation buttons as usual
          <>
            <div style={{ flexGrow: 1 }}>
              <IconButton component={Link} to="/" aria-label="Home" color="inherit">
                <Typography variant="h6">
                  Home
                </Typography>
              </IconButton>
              <IconButton component={Link} to="/catalog" aria-label="Catalog" color="inherit">
                <Typography variant="h6">
                  Catalog
                </Typography>
              </IconButton>
              <IconButton component={Link} to="/contact" aria-label="Contact" color="inherit">
                <Typography variant="h6">
                  Contact
                </Typography>
              </IconButton>
              <IconButton component={Link} to="/about" aria-label="About" color="inherit">
                <Typography variant="h6">
                  About Us
                </Typography>
              </IconButton>
            </div>
          </>
        )}
        <div>
          <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
            <Badge badgeContent={2} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;