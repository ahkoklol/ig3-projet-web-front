import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import useStyles from './styles';

const Product = (props) => {
  const classes = useStyles();
  const { product, onAdd } = props;

  const { id, name, description, price, image } = product;

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
        <IconButton aria-label="Add to Cart" onClick={onAdd} >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;