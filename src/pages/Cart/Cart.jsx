import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@mui/material';
import { CartContext } from '../../context/cartContext';

const styles = {
  title: {
    marginBottom: '1rem'
  },
  emptyCartText: {
    marginTop: '1rem'
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem'
  },
  cartItemImage: {
    width: '100px',
    marginRight: '1rem'
  },
  cartItemContent: {
    flexGrow: 1
  },
  cartItemTitle: {
    marginBottom: '0.5rem'
  },
  cartItemPrice: {
    fontWeight: 'bold',
    marginBottom: '0.5rem'
  },
  cartItemQuantity: {
    marginBottom: '0.5rem'
  },
  removeButton: {
    marginTop: '0.5rem'
  },
  cartActions: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '2rem'
  },
  checkoutButton: {
    marginLeft: 'auto'
  }
};

const Cart = () => {
  const { cartItems, removeProduct, clearCart } = useContext(CartContext);

  const handleRemoveProduct = (productId) => {
    removeProduct(productId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <>
      <Typography variant="h4" style={styles.title}>Cart</Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body1" style={styles.emptyCartText}>Your cart is empty.</Typography>
      ) : (
        <>
          <Grid container spacing={3}>
            {cartItems.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <div style={styles.cartItem}>
                  <img src={item.image} alt={item.name} style={styles.cartItemImage} />
                  <div style={styles.cartItemContent}>
                    <Typography variant="h6" style={styles.cartItemTitle}>{item.name}</Typography>
                    <Typography variant="body1" style={styles.cartItemPrice}>{item.price}</Typography>
                    <Typography variant="body2" style={styles.cartItemQuantity}>Quantity: {item.quantity}</Typography>
                    <Button variant="outlined" color="secondary" onClick={() => handleRemoveProduct(item.id)} style={styles.removeButton}>Remove</Button>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
          <div style={styles.cartActions}>
            <Button variant="outlined" color="secondary" onClick={handleClearCart}>Clear cart</Button>
            <Button variant="contained" color="primary" component={Link} to="/checkout" style={styles.checkoutButton}>Checkout</Button>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;