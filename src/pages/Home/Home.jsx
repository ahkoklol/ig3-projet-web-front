import React from 'react';
import { Typography, Container, Grid, Button, Box } from '@mui/material';

import catEnjoying from '../../assets/cat-enjoying-the-view.jpg';
import siameseCat from '../../assets/siamese-cat-laying-in-white-bedding.jpg';

const Home = () => {
  return (
    <React.Fragment>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${catEnjoying}), url(${siameseCat})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '79vh',
          position: 'relative',
          maxWidth: '100%',
          mt: 19.5,
          zIndex: 1,
        }}
      >
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
            <Button
              variant="contained"
              style={{ backgroundColor: 'black', color: 'white', textTransform:'none' }}
              href="/catalog"
            >
              View Catalog
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="md" style={{ marginTop: '50px', marginBottom: '50px' }}>
        {/* Featured Products */}
        <Typography variant="h4" align="center" gutterBottom style={{ marginTop: '100px', marginBottom: '35px'}}>
          Best sellers
        </Typography>
        {/* Add your featured products here */}
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <a href="/products/4">
                <img
                  src="https://cdn.shopify.com/s/files/1/0738/5055/2624/products/mainphoto.jpg?v=1679682644"
                  alt="Featured Product 1"
                  style={{ width: '100%', height: '300px', objectFit: 'cover', marginBottom: '10px' }}
                />
              </a>
              <Typography variant="h6" align="center" component="a" href="/products/4" sx={{ color: 'black', marginTop: '5px', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                Waterproof Litter
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <a href="/products/3">
                <img
                  src="https://ae01.alicdn.com/kf/S68841e23642c4bd78d2fec9fc91b010b8/Automatic-Pet-Feeder-Wet-Dry-Separation-3L-Cat-Food-Bowl-850ML-Water-Bottle-Large-Capacity-Dog.jpg"
                  alt="Featured Product 2"
                  style={{ width: '100%', height: '300px', objectFit: 'cover', marginBottom: '10px' }}
                />
              </a>
              <Typography variant="h6" align="center" component="a" href="/products/3" sx={{ color: 'black', marginTop: '5px', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                Automatic Dispenser
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <a href="/products/1">
                <img
                  src="https://ae01.alicdn.com/kf/S4024092642204ff89ce415e4aadddd43v/Fontaine-eau-silencieuse-lectrique-pour-chat-filtre-automatique-bol-buveur-USB-distributeur-d-eau-pour-animaux.jpg_Q90.jpg_.webp"
                  alt="Featured Product 3"
                  style={{ width: '100%', height: '300px', objectFit: 'cover', marginBottom: '10px' }}
                />
              </a>
              <Typography variant="h6" align="center" component="a" href="/products/1" sx={{ color: 'black', marginTop: '5px', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                Water Fountain
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg" style={{ display: 'flex', alignItems: 'center', marginTop: '100px', marginBottom: '35px' }}>
        <Box sx={{ flexGrow: 1 }}>
          <img
            src="https://cdn.shopify.com/s/files/1/0738/5055/2624/files/food_dispenser.png?v=1679350528&width=750"
            alt="Image"
            style={{ width: '100%', height: 'auto', maxWidth: '600px', display: 'block' }}
          />
        </Box>
        <Box sx={{ flexGrow: 6, paddingLeft: '30px' }}>
          <Typography variant="h5" align="left" gutterBottom style={{ marginBottom: '15px' }}>
            The food and water dispenser
          </Typography>
          <Typography variant="body1" align="left" gutterBottom style={{ textAlign: 'justify' }}>
            As Lala was going to be alone for two weeks, a solution had to be found to ensure that he wouldn't run out of food and water.
          </Typography>
          <Typography variant="body1" align="left" gutterBottom style={{ textAlign: 'justify' }}>
            Our automatic dispenser is easy to fill and operates with gravity to provide a constant supply of food to your cat throughout the day. The water and kibble compartment is large enough to provide a sufficient quantity for your cat for several days.
          </Typography>
          <Typography variant="body1" align="left" gutterBottom style={{ textAlign: 'justify' }}>
            This device has been designed to ensure that your cat remains fed during your short trips, so you can travel with peace of mind knowing that your cat has access to water and food at all times.
          </Typography>
          <Typography variant="body1" align="left" gutterBottom style={{ textAlign: 'justify' }}>
            Our automatic water and kibble dispenser for cats is easy to use and does not require complex technological features to operate. It is easy to maintain and clean to ensure the health and well-being of your cat.
          </Typography>
          <Button variant="contained" style={{ backgroundColor: 'black', color: 'white', marginTop: '20px', marginLeft: '350px', textTransform:'none' }} href="/products/2">
            See the product
          </Button>
        </Box>
      </Container>
      <Container maxWidth="lg" style={{ display: 'flex', alignItems: 'center', marginTop: '100px', marginBottom: '35px' }}>
        <Box sx={{ flexGrow: 6, paddingRight: '30px' }}>
          <Typography variant="h5" align="left" gutterBottom style={{ marginBottom: '15px' }}>
            The water fountain
          </Typography>
          <Typography variant="body1" align="left" gutterBottom style={{ textAlign: 'justify' }}>
          Lala loves playing with water. Watching water flow fascinates her.          
          </Typography>
          <Typography variant="body1" align="left" gutterBottom style={{ textAlign: 'justify' }}>
          Our water fountain is designed to provide your cat with a continuous source of fresh and filtered water, encouraging them to drink more and stay hydrated throughout the day. It is easy to use, easy to clean, and features an efficient filtration system that removes impurities and odors.
          </Typography>
          <Typography variant="body1" align="left" gutterBottom style={{ textAlign: 'justify' }}>
          Thanks to its sleek, modern, and minimalist design, our cat water fountain seamlessly blends into any interior decor.          
          </Typography>
          <Button variant="contained" style={{ backgroundColor: 'black', color: 'white', marginTop: '20px', marginLeft: '325px', textTransform:'none' }} href="/products/1">
            See the product
          </Button>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <img
            src="https://cdn.shopify.com/s/files/1/0738/5055/2624/files/S031cd85a815a4689b88bc32f3d22cfcfe.jpg?v=1679349663&width=750"
            alt="Image"
            style={{ width: '100%', height: 'auto', maxWidth: '600px', display: 'block' }}
          />
        </Box>
      </Container>
      <Container maxWidth="lg" style={{ display: 'flex', alignItems: 'center', marginTop: '100px', marginBottom: '35px' }}>
        <Box sx={{ flexGrow: 1 }}>
          <img
            src="https://cdn.shopify.com/s/files/1/0738/5055/2624/files/British.png?v=1679686267&width=750"
            alt="Image"
            style={{ width: '100%', height: 'auto', maxWidth: '600px', display: 'block' }}
          />
        </Box>
        <Box sx={{ flexGrow: 6, paddingLeft: '30px' }}>
          <Typography variant="h5" align="left" gutterBottom style={{ marginBottom: '15px' }}>
            Lala's sleeping house
          </Typography>
          <Typography variant="body1" align="left" gutterBottom style={{ textAlign: 'justify' }}>
          Lala loves playing with tennis balls. By bringing the ball to his bed, there's no need to go searching for the ball in the backyard! In addition to being entertained, this bed tent provides warmth and comfort!          
          </Typography>
          <Typography variant="body1" align="left" gutterBottom style={{ textAlign: 'justify' }}>
          Our cat bed tent is designed to keep your cat warm with a cozy cushion inside and a small ball for play. Convenient and easy to move, this cotton bed tent is also a beautiful decorative accessory for your interior.          
          </Typography>
          <Button variant="contained" style={{ backgroundColor: 'black', color: 'white', marginTop: '20px', marginLeft: '350px', textTransform:'none' }} href="/products/6">
            See the product
          </Button>
        </Box>
      </Container>
      <Container maxWidth="lg" style={{ display: 'flex', alignItems: 'center', marginTop: '100px', marginBottom: '35px' }}>
        <Box sx={{ flexGrow: 6, paddingRight: '30px' }}>
          <Typography variant="h5" align="left" gutterBottom style={{ marginBottom: '15px' }}>
          The waterproof Litter
          </Typography>
          <Typography variant="body1" align="left" gutterBottom style={{ textAlign: 'justify' }}>
          Lala has never had a litter box. However, having to clean and change the litter frequently is a cumbersome task. With this mat, all it takes is a shake and the job is done!
          </Typography>
          <Typography variant="body1" align="left" gutterBottom style={{ textAlign: 'justify' }}>
          This waterproof litter mat is the essential accessory to keep your environment clean and hygienic. With its textured surface, it effectively collects small litter balls, while its 0.8 cm high border prevents litter from spreading on the floor. Made of 100% silicone, this mat is easy to maintain and clean. Avoid litter spills and save on litter with this practical accessory for all cat owners.
          </Typography>
          <Button variant="contained" style={{ backgroundColor: 'black', color: 'white', marginTop: '20px', marginLeft: '325px', textTransform:'none' }} href="/products/4">
          See the product
          </Button>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
        <img
        src="https://cdn.shopify.com/s/files/1/0738/5055/2624/files/main_photo.jpg?v=1679686245&width=750"
        alt="Image"
        style={{ width: '100%', height: 'auto', maxWidth: '1000px', display: 'block' }}
        />
        </Box>
      </Container>
      <Container maxWidth="sm" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px', marginBottom: '35px' }}>
        <Typography variant="h4" align="center" gutterBottom style={{ marginBottom: '15px' }}>
          Coming Soon...
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
        More products are coming to our store! Visit us frequently to stay updated on our new products. Lala is excited to show you his best toys.        
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
        In the meantime, why not explore all the products? Go ahead!        
        </Typography>
        <Button variant="contained" style={{ backgroundColor: 'black', color: 'white', marginTop: '20px', textTransform: 'none' }} href="/catalog">
          See all products
        </Button>
      </Container>
    </React.Fragment>
  );
};

export default Home;