import React from 'react';
import { Grid } from '@mui/material';

import Product from './Product/Product';


const products = [
  { id: 1, name: 'Water Fountain', description: 'A water fountain made for cats.', price: '€19,99', image: 'https://ae01.alicdn.com/kf/S4024092642204ff89ce415e4aadddd43v/Fontaine-eau-silencieuse-lectrique-pour-chat-filtre-automatique-bol-buveur-USB-distributeur-d-eau-pour-animaux.jpg_Q90.jpg_.webp' },
  { id: 2, name: 'Automatic Dispenser', description: 'A food dispenser that drops food and water.', price: '€34,99', image: 'https://i5.walmartimages.com/asr/d72fb0ff-555a-4bff-a8b8-68ff484e8678.2bef89d3af6eb991235cb34bc1c73190.jpeg' },
];


const Products = () => {
  return (
    <main style={{ marginTop: '80px' }}>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} style={{ display: 'flex', flexDirection: 'column', minHeight: '450px' }}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Products;