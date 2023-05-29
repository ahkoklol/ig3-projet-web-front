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

    
    
    {
        id: 1,
        name: 'Water Fountain',
        description: 'A water fountain made for cats.',
        price: 19.99,
        image: 'https://ae01.alicdn.com/kf/S4024092642204ff89ce415e4aadddd43v/Fontaine-eau-silencieuse-lectrique-pour-chat-filtre-automatique-bol-buveur-USB-distributeur-d-eau-pour-animaux.jpg_Q90.jpg_.webp',
      },
      {
        id: 2,
        name: 'Auto Dispenser',
        description: 'A see-through version that drops food and water',
        price: 34.99,
        image: 'https://i5.walmartimages.com/asr/d72fb0ff-555a-4bff-a8b8-68ff484e8678.2bef89d3af6eb991235cb34bc1c73190.jpeg',
      },
      {
        id: 3,
        name: 'Automatic Dispenser',
        description: 'An opaque version that drops food and water',
        price: 39.99,
        image: 'https://ae01.alicdn.com/kf/S68841e23642c4bd78d2fec9fc91b010b8/Automatic-Pet-Feeder-Wet-Dry-Separation-3L-Cat-Food-Bowl-850ML-Water-Bottle-Large-Capacity-Dog.jpg',
      },
      {
        id: 4,
        name: 'Waterproof Litter',
        description: "A litter that doesn't leak.",
        price: 12.99,
        image: 'https://cdn.shopify.com/s/files/1/0738/5055/2624/products/mainphoto.jpg?v=1679682644',
      },
      {
        id: 5,
        name: 'Sleeping Cushion',
        description: 'A smooth and silky donut-shaped cushion.',
        price: 14.99,
        image: 'https://m.media-amazon.com/images/I/61GS2jV1dYL._AC_SX466_.jpg',
      },
      {
        id: 6,
        name: 'Sleeping House',
        description: 'A cute little tent in an animal design.',
        price: 20.99,
        image: 'https://cdn.shopify.com/s/files/1/0738/5055/2624/files/British.png?v=1679686267&width=1500',
      },
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
        Superuser Editing Page
      </Typography>

      {cartItems.length === 0 ? (
        <Typography variant="body1">Add products</Typography>
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
        Add product
      </Button>
    </Grid>
  )}
</Container>
);
};

export default Cart;