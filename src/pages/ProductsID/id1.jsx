import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';

const ProductPage = () => {
  const product = {
    id: 1,
    name: 'Example Product',
    description: 'This is an example product description. Replace it with your own content.',
    price: '$9.99',
    imageUrl: 'https://example.com/product-image.jpg', // Replace with your product image URL
  };

  const handleAddToCart = () => {
    // Add to cart logic goes here
    console.log('Product added to cart');
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '200px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          
            <CardMedia component="img" alt={product.name} height="500" image={product.imageUrl} />
          
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" component="div" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            {product.price}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {product.description}
          </Typography>
          <Button variant="contained" color="primary" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductPage;