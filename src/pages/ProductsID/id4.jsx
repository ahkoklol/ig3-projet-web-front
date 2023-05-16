import React from 'react';
import { Container, Typography, Grid, CardMedia, Button } from '@mui/material';

const ProductPage = () => {
  const product = {
    id: 4,
    name: 'Waterproof Litter',
    description: "This is an example product description. Replace it with your own content.",
    price: '€12,99',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0738/5055/2624/products/mainphoto.jpg?v=1679682644', // Replace with your product image URL
  };

  const handleAddToCart = () => {
    // Add to cart logic goes here
    console.log('Product added to cart');
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '200px' }}>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6}>
          <CardMedia component="img" alt={product.name} height="500" image={product.imageUrl} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" component="div" gutterBottom style={{ textAlign: 'justify' }}>
            {product.name}
          </Typography>
          <Typography variant="h5" color="text.secondary" gutterBottom style={{ textAlign: 'justify' }}>
            {product.price}
          </Typography>
          <Button variant="contained" color="primary" onClick={handleAddToCart} style={{ marginTop: '15px', marginBottom: '30px', width: '100%', backgroundColor: 'black', textTransform:'none' }}>
            Add to Cart
          </Button>
          <Typography variant="body1" gutterBottom style={{ textAlign: 'justify' }}>
          Are you tired of constantly cleaning up your cat's litter spills? This waterproof litter mat is the essential accessory to keep your environment clean and hygienic. With its textured surface, it effectively collects small litter particles, while its 0.8cm high border prevents litter from spreading on the floor.          
          </Typography>
          <Typography variant="body1" gutterBottom style={{ textAlign: 'justify' }}>
          Made from 100% silicone, this mat is easy to maintain and clean. You can simply vacuum or shake off the litter to retrieve it, or rinse it with water.          
          </Typography>
          <Typography variant="body1" gutterBottom style={{ textAlign: 'justify', marginBottom: '40px' }}>
          The silica gel material provides a soft and pleasant sensation for your cat's paws, and is suitable even for the most sensitive cats. By preventing urine from spreading everywhere, this mat not only keeps your home clean but also helps you save on litter. Look no further, this accessory is essential for all cat owners!
            </Typography>
          
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductPage;