import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

import logo from '../../assets/new logo sized.png';

const Navbar = () => {
  return (
    <AppBar position="fixed" color="inherit">
      <Toolbar>
        <img src={logo} alt="Lala le chat" height="50px" style={{ marginRight: '10px' }} />
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Lala le chat
        </Typography>
        <IconButton aria-label="Show cart items" color="inherit">
          <Badge badgeContent={2} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;