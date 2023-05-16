import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';

const ProductPage = () => {
  const product = {
    id: 1,
    name: 'Example Product',
    description: "This is an example product description. Replace it with your own content.",
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
            This water fountain for cats is designed to provide them with a continuous source of clean and fresh water. With its minimalist design, it seamlessly blends into any type of home, easily complementing the surrounding decor.
          </Typography>
          <Typography variant="body1" gutterBottom style={{ textAlign: 'justify' }}>
            It features a water outlet spout that allows cats to drink directly from the source, which can encourage more regular hydration. Its 1.5L capacity is ideal for cats and provides enough water for several days. It also offers 3 water flow speed modes, allowing you to adjust the flow to your cat's preference and provide clean water to maintain their health.
          </Typography>
          <Typography variant="body1" gutterBottom style={{ textAlign: 'justify' }}>
            Made with food-grade materials, this cat fountain is non-toxic, tasteless, and environmentally friendly. It is equipped with a silent pump with a unique design that minimizes noise to avoid disturbing your cat during their moments of relaxation.
          </Typography>
          <Typography variant="body1" gutterBottom style={{ textAlign: 'justify' }}>
            With its minimalist design, this fountain seamlessly integrates into any type of home, effortlessly blending into the surrounding decor. Its quick-release structure allows for easy and efficient cleaning to ensure the health and well-being of your cat.
          </Typography>
          <Typography variant="body1" gutterBottom style={{ textAlign: 'justify' }}>
            The cat fountain provides a continuous supply of clean and fresh water to reduce the risk of hydration-related illnesses. With its 1.5L capacity, it meets the water needs of cats of various sizes and provides enough water for several days.
          </Typography>
          
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductPage;