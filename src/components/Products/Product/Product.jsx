import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import useStyles from './styles';
import axios from 'axios';
import { SessionContext } from '../../../context/sessionContext';


const Product = (props) => {
  const classes = useStyles();
  const { product } = props;

  const { id, name, description, price, image } = product;

  const { sessionID } = useContext(SessionContext); // Get the session ID from the context

  const handleAddToCart = () => {
    const productID = id;

    axios
      .post(`${process.env.REACT_APP_API_URL}/cart-item`, { sessionID, productID })
      .then((response) => {
        console.log('Product added to cart:', response.data);
        // Handle the successful addition of the product to the cart
      })
      .catch((error) => {
        console.error('Error adding product to cart:', error);
        // Handle the error case
      });
  };

  return (
    <Card className={classes.root}>
      <Link to={`/products/${id}`} style={{ textDecoration: 'none' }}>
        <CardMedia className={classes.media} image={image} title={name} />
      </Link>
      <CardContent>
        <div className={classes.cardContent}>
          <Link to={`/products/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
            <Typography variant="h5" gutterBottom>
              {name}
            </Typography>
          </Link>
          <Typography variant="h5">{price}</Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;