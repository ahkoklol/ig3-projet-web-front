import React, { useContext } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { ShopContext } from '../../../context/shopContext';
import useStyles from './styles';

const Product = ({ product }) => {
  const classes = useStyles();

  const { id, name, description, price, image } = product;

  const { addProduct } = useContext(ShopContext);

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} title={name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {name}
          </Typography>
          <Typography variant="h5">
            {price}
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary">{description}</Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={() => addProduct(id)}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Product;