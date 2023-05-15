import React from 'react';
import { Typography, Container, Grid, Button } from '@mui/material';

import catEnjoying from '../../assets/cat-enjoying-the-view.jpg';
import siameseCat from '../../assets/siamese-cat-laying-in-white-bedding.jpg';

const Home = () => {
  return (
    <div style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${catEnjoying}), url(${siameseCat})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      
    }}>
      <Container sx={{
        mt: 18,
        position: 'relative',
        zIndex: 1,
        
      }}>
        <style>
          {`
            .white-text {
              color: white;
            }
          `}
        </style>
        <Typography variant="h3" align="center" gutterBottom className="white-text">
          Welcome to Our Online Store!
        </Typography>
        <Typography variant="body1" align="center" gutterBottom className="white-text">
          Here you will find a wide selection of high-quality products at affordable prices.
        </Typography>
        <Typography variant="body1" align="center" gutterBottom className="white-text">
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
    </div>
    
      

  );
};

export default Home;