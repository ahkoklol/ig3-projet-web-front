import React from 'react';
import { Container, Typography, Grid, CardMedia, Button } from '@mui/material';

const ProductPage = () => {
  const product = {
    id: 3,
    name: 'Automatic Dispenser',
    description: "This is an example product description. Replace it with your own content.",
    price: '€39,99',
    imageUrl: 'https://ae01.alicdn.com/kf/S68841e23642c4bd78d2fec9fc91b010b8/Automatic-Pet-Feeder-Wet-Dry-Separation-3L-Cat-Food-Bowl-850ML-Water-Bottle-Large-Capacity-Dog.jpg', // Replace with your product image URL
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
          This pet food and water dispenser is brand new and of high quality. With its minimalist design, it seamlessly blends into any type of apartment, easily complementing the surrounding decor.          
          </Typography>
          <Typography variant="body1" gutterBottom style={{ textAlign: 'justify', marginBottom: '40px' }}>
          It features a large capacity food bucket of 3 liters and a 0.85-liter water bucket, which automatically refill to meet the water and food needs of cats and small dogs for 4 to 5 days. The water bucket is detachable, making it easy to fill, and uses the principle of Siphon to keep the water clean and hygienic. The design of the sealed cover keeps the pet food dry and fresh. This dispenser is made of high-quality ABS and PET materials, which are non-toxic and safe for pets. It has a visual window that allows you to easily see the remaining water and food level without requiring electricity.          
          </Typography>
          
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductPage;