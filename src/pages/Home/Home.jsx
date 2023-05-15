import React from 'react';
import { Typography, Container, Grid, Button } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 25 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Welcome to Our Online Store!
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Here you will find a wide selection of high-quality products at affordable prices.
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Take a look at our catalog to see all the products we have available.
      </Typography>
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
        <Grid item>
          <Button variant="contained" sx={{ backgroundColor: 'black', color: 'white', textTransform: 'none' }} href="/catalog">
            View Catalog
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;