import React from 'react';
import { Grid } from '@mui/material';

import Product from './Product/Product';


const products = [
  { id: 1, name: 'Water Fountain', description: 'A water fountain made for cats.', price: '€19,99', image: 'https://ae01.alicdn.com/kf/S4024092642204ff89ce415e4aadddd43v/Fontaine-eau-silencieuse-lectrique-pour-chat-filtre-automatique-bol-buveur-USB-distributeur-d-eau-pour-animaux.jpg_Q90.jpg_.webp' },
  { id: 2, name: 'Automatic Dispenser', description: 'A see-through version that drops food and water', price: '€34,99', image: 'https://i5.walmartimages.com/asr/d72fb0ff-555a-4bff-a8b8-68ff484e8678.2bef89d3af6eb991235cb34bc1c73190.jpeg' },
  { id: 3, name: 'Automatic Dispenser', description: 'A opaque version that drops food and water', price: '€39,99', image: 'https://ae01.alicdn.com/kf/S68841e23642c4bd78d2fec9fc91b010b8/Automatic-Pet-Feeder-Wet-Dry-Separation-3L-Cat-Food-Bowl-850ML-Water-Bottle-Large-Capacity-Dog.jpg ' },
  { id: 4, name: 'Waterproof Litter', description: "A litter that doesn't leak.", price: '€12,99', image: 'https://cdn.shopify.com/s/files/1/0738/5055/2624/products/mainphoto.jpg?v=1679682644' },
  { id: 5, name: 'Sleeping Cushion', description: "A smotth and silky donut-shaped cushion.", price: '€14,99', image: 'https://m.media-amazon.com/images/I/61GS2jV1dYL._AC_SX466_.jpg' },
  { id: 6, name: 'Sleeping House', description: "A cute little tent in an animal design.", price: '€20,99', image: 'https://cdn.shopify.com/s/files/1/0738/5055/2624/files/British.png?v=1679686267&width=1500' },
  { id: 7, name: 'Sleeping Cushion', description: "A smotth and silky donut-shaped cushion.", price: '€14,99', image: 'https://m.media-amazon.com/images/I/61GS2jV1dYL._AC_SX466_.jpg' },

];


const Products = () => {
    return (
      <main style={{ marginTop: '20px', paddingTop: '75px' }}>
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