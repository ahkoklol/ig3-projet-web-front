import React from 'react';
import { Container, Typography, Grid, CardMedia, Button } from '@mui/material';

const ProductPage = () => {
  const product = {
    id: 5,
    name: 'Sleeping Cushion',
    description: "This is an example product description. Replace it with your own content.",
    price: '€14,99',
    imageUrl: 'https://m.media-amazon.com/images/I/61GS2jV1dYL._AC_SX466_.jpg', // Replace with your product image URL
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
          Give your cat the comfort it deserves with this cozy and plush bed. This donut-shaped cat bed is an attractive decorative element for your interior while providing your pet with a safe and comfortable place to rest.          
          </Typography>
          <Typography variant="body1" gutterBottom style={{ textAlign: 'justify' }}>
          The raised and padded edge of this bed allows your cat to curl up in it like a nest, while the plush and thick cushioning gives them the feeling of sleeping on a cloud. Additionally, the non-slip feature of this bed ensures a stable seating for your cat.          
          </Typography>
          <Typography variant="body1" gutterBottom style={{ textAlign: 'justify' }}>
          This cat bed has been specially designed to meet the needs of felines and is recommended for cats of all sizes.          
          </Typography>
          <Typography variant="body1" gutterBottom style={{ textAlign: 'justify', marginBottom: '40px' }}>
          The filling of this bed is made of cotton, a naturally soft and comfortable material for your cat. Your cat will love lounging in this cozy and plush bed, designed to cater to all their needs.          
          </Typography>
          
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductPage;