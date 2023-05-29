import React, { useState, useEffect } from 'react';
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
import axios from 'axios';

const Cart = (props) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch the cart items from the backend
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/cartItems`);
      const fetchedCartItems = response.data;
      setCartItems(fetchedCartItems);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/cartItems/${id}`);
      // Remove the deleted item from the cart items array
      const updatedCartItems = cartItems.filter((item) => item.id !== id);
      setCartItems(updatedCartItems);
    } catch (error) {
      console.error('Error deleting cart item:', error);
    }
  };

  const handleIncrement = async (id) => {
    try {
      const cartItemToUpdate = cartItems.find((item) => item.id === id);
      const updatedQuantity = cartItemToUpdate.quantity + 1;
      await axios.put(`${process.env.REACT_APP_API_URL}/cartItems/${id}`, {
        quantity: updatedQuantity,
      });
      // Update the quantity of the cart item in the cart items array
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: updatedQuantity,
          };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    } catch (error) {
      console.error('Error updating cart item:', error);
    }
  };

  const handleDecrement = async (id) => {
    try {
      const cartItemToUpdate = cartItems.find((item) => item.id === id);
      const updatedQuantity = cartItemToUpdate.quantity - 1;
      if (updatedQuantity === 0) {
        // If the quantity becomes 0, delete the cart item
        handleDelete(id);
        return;
      }
      await axios.put(`${process.env.REACT_APP_API_URL}/cartItems/${id}`, {
        quantity: updatedQuantity,
      });
      // Update the quantity of the cart item in the cart items array
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: updatedQuantity,
          };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    } catch (error) {
      console.error('Error updating cart item:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body1">Your cart is empty</Typography>
      ) : (
        <Grid container spacing={2}>
          {cartItems.map((item) => (
            <Grid item xs={12} md={6} key={item.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="200px"
                  src={item.image}
              alt={item.title}
            />
            <CardContent>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="subtitle1">Price: ${item.price}</Typography>
              <Typography variant="subtitle1">Quantity: {item.quantity}</Typography>
              <Box mt={2}>
                <IconButton
                  aria-label="Remove"
                  onClick={() => handleDecrement(item.id)}
                >
                  <Remove />
                </IconButton>
                <IconButton
                  aria-label="Add"
                  onClick={() => handleIncrement(item.id)}
                >
                  <Add />
                </IconButton>
                <IconButton
                  aria-label="Delete"
                  onClick={() => handleDelete(item.id)}
                >
                  <Delete />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )}
</Container>
);
};

export default Cart;





