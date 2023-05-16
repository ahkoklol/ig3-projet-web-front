import React from 'react';
import { Container, Typography, Grid, CardMedia, Button } from '@mui/material';

const ProductPage = () => {
  const product = {
    id: 2,
    name: 'Automatic Dispenser',
    description: "This is an example product description. Replace it with your own content.",
    price: '€34,99',
    imageUrl: 'https://i5.walmartimages.com/asr/d72fb0ff-555a-4bff-a8b8-68ff484e8678.2bef89d3af6eb991235cb34bc1c73190.jpeg', // Replace with your product image URL
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
          <Typography variant="body1" gutterBottom style={{ textAlign: 'justify', marginBottom: '40px' }}>
          The automatic dispenser for cats uses wet and dry separation to keep the food dry and prevent it from getting wet and spoiled. With its minimalist design, it seamlessly blends into any type of apartment, easily complementing the surrounding decor. The dispenser is designed with a clear and visible design, allowing you to easily see if it's necessary to add food or water for your pet. The dispenser also features an anti-blocking function to prevent obstructions in the feeding system. With its simple and elegant design, the automatic pet food and water dispenser is easy to use and clean. The top part is removable, making it convenient for cleaning and maintaining your pet's health.
          </Typography>
          
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductPage;