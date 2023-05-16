import React from 'react';
import { Typography, Button } from '@mui/material';

const AboutUs = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', paddingTop: '50px' }}>
      <div style={{ maxWidth: '800px', padding: '0 16px' }}>
        <Typography variant="h4" component="h1" style={{ marginBottom: '32px' }}>
          About Us
        </Typography>
        <Typography variant="body1" style={{ textAlign: 'justify', marginTop: '16px', marginBottom: '32px' }}>
          At Lala Le Chat, we are passionate about the well-being of our feline friends and understand how important it is to ensure that they always have access to fresh food and water. That is why our team tests all of our products to ensure that users benefit from the highest range on the market. The products we choose are of high quality and have been selected with the aim of making cats happier. All of our products have been tested by Lala before being sold.
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" style={{ backgroundColor: 'black', color: 'white', textTransform:'none' }} href="/story">
            More on Lala
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;