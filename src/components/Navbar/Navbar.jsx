import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import logo from '../../assets/new logo sized.png';

const Navbar = () => {
  return (
    <AppBar position="fixed" color="inherit">
      <Toolbar style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <img src={logo} alt="Lala le chat" height="90px" style={{ marginRight: '25px', marginLeft: '175px', marginTop: '25px', marginBottom: '25px' }} />
        </div>
        <div style={{ flexGrow: 1 }} />
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
        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
          <Badge badgeContent={2} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;