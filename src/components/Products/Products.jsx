import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles'
/*const products = [
  { id: 1, name: 'Oils', description: 'Natural oil', price: '$10', image: 'https://s3.amazonaws.com/images.ecwid.com/images/27698867/1410981364.jpg' },
  { id: 2, name: 'Soap', description: 'Natural oil', price: '$15', image: 'https://s3.amazonaws.com/images.ecwid.com/images/27698867/1410981364.jpg' },
  { id: 3, name: 'Oils', description: 'Natural oil', price: '$50', image: 'https://s3.amazonaws.com/images.ecwid.com/images/27698867/1410981364.jpg' },
  { id: 4, name: 'Oils', description: 'Natural oil', price: '$20', image: 'https://s3.amazonaws.com/images.ecwid.com/images/27698867/1410981364.jpg' },
];*/

const Products = ({products,onAddToCart}) => {
  const classes = useStyles()
  return (<main className={classes.content}>
    <div className={classes.toolbar}/>
         
            <Grid container spacing={4}>
            {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Product product={product} onAddToCart={onAddToCart} />
        </Grid> 
      ))}
    </Grid>
  </main>);
};

export default Products;
