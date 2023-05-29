import React from 'react';
import { Button, Grid, Link, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'white', padding: '20px', borderTop: '3px solid #f5f5f5' }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>
          <Button href="https://instagram.com/lechat.lala/">
            <InstagramIcon style={{ color: 'black' }} />
          </Button>
        </Grid>
      </Grid>
      <Typography variant="body2" color="text.secondary" align="center">
        <Link color="inherit" href="/refund-policy">
          Refund Policy
        </Link>{' | '}
        <Link color="inherit" href="/privacy-policy">
          Privacy Policy
        </Link>{' | '}
        <Link color="inherit" href="/terms-of-use">
          Terms of Use
        </Link>
      </Typography>
    </footer>
  );
};

export default Footer;