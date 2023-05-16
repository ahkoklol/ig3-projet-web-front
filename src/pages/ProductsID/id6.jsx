import React from 'react';
import { Container, Typography, Grid, CardMedia, Button } from '@mui/material';

const ProductPage = () => {
  const product = {
    id: 6,
    name: 'Sleeping House',
    description: "This is an example product description. Replace it with your own content.",
    price: '€20,99',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0738/5055/2624/files/British.png?v=1679686267&width=1500', // Replace with your product image URL
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
          Discover our cat tent bed, the perfect cocoon for your four-legged companion! This tent bed is designed to keep your cat warm with a cozy cushion inside, ideal for winter nights. The small ball attached to the top of the entrance frame is a playful accessory that will allow your cat to play and entertain itself.          
          </Typography>
          <Typography variant="body1" gutterBottom style={{ textAlign: 'justify' }}>
          Our cat tent bed is practical and easy to move, and it can be placed anywhere in your home so that your cat can feel comfortable and cozy. It is made of cotton, making it soft and pleasant for your cat.          
          </Typography>
          <Typography variant="body1" gutterBottom style={{ textAlign: 'justify' }}>
          This cat tent bed is also a beautiful decorative accessory for your interior. With its elegant and gentle design, it blends perfectly with the tones of your home to create a peaceful and pleasant environment for your little companion.          
          </Typography>
          <Typography variant="body1" gutterBottom style={{ textAlign: 'justify', marginBottom: '40px' }}>
          Give your cat a comfortable and cozy space where it can rest and play safely with our cat tent bed.          
          </Typography>
          
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductPage;