import React, { useState } from 'react';
import {
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  IconButton,
  Box,
} from '@mui/material';
import { Delete, Add, Remove } from '@mui/icons-material';



const Cart = (props) => {
  

  

  const [cartItems, setCartItems] = useState([

    
    { id: 1, name: 'Water Fountain', price: '€19,99', quantity: 2, image: 'https://ae01.alicdn.com/kf/S4024092642204ff89ce415e4aadddd43v/Fontaine-eau-silencieuse-lectrique-pour-chat-filtre-automatique-bol-buveur-USB-distributeur-d-eau-pour-animaux.jpg_Q90.jpg_.webp' },
    { id: 2, name: 'Auto Dispenser', price: '€34,99', quantity: 1, image: 'https://i5.walmartimages.com/asr/d72fb0ff-555a-4bff-a8b8-68ff484e8678.2bef89d3af6eb991235cb34bc1c73190.jpeg' },
    // Add more items as needed
    
  ]);

  
  

  // Function to increment the quantity of an item
  const incrementQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to decrement the quantity of an item
  const decrementQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  // Function to remove an item from the cart
  const removeItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };
  
  

  return (
    <Container maxWidth="md" style={{ marginTop: '200px', marginBottom:'50px' }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        <Grid container spacing={2}>
          {cartItems.map((item) => (
            <Grid item xs={12} key={item.id}>
              <Card style={{ display: 'flex' }}>
                <CardMedia
                  component="img"
                  style={{ width: 150, objectFit: 'contain' }}
                  image={item.image} // Placeholder image URL
                  alt={item.name}
                />
                <CardContent style={{ flex: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {item.name}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Price: {item.price}
                  </Typography>
                  <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={() => decrementQuantity(item.id)}
                      style={{ padding: 0, marginRight: '5px', color: 'black' }}
                    >
                      <Remove fontSize="small" />
                    </IconButton>
                    <Typography variant="body1" gutterBottom>
                      Quantity: {item.quantity}
                    </Typography>
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={() => incrementQuantity(item.id)}
                      style={{ padding: 0, marginLeft: '5px', color: 'black' }}
                    >
                      <Add fontSize="small" />
                    </IconButton>
                  </Box>
                </CardContent>
                <IconButton
                  size="small"
                  color="primary"
                  onClick={() => removeItem(item.id)}
                  style={{ alignSelf: 'center', color: 'black' }}
                >
                  <Delete />
                </IconButton>
              </Card>
            </Grid>
          ))}
    </Grid>
  )}

  {cartItems.length > 0 && (
    <Grid container justifyContent="flex-end" sx={{ mt: 4 }}>
      <Button variant="contained" color="primary" style={{ backgroundColor: 'black', color: 'white', textTransform:'none' }} href='/checkout' >
        Proceed to Checkout
      </Button>
    </Grid>
  )}
</Container>
);
};

export default Cart;