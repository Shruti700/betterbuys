import React from 'react';
import { Container,Typography,Grid,Button } from '@material-ui/core';
import useStyles from './styles';
import CartItem from './CartItem/CartItem'
import { Link } from 'react-router-dom';

const Cart = ({cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart}) => {
    const classes=useStyles();
    const isEmpty=!cart.total_items;
    const EmptyCart=()=>(
        <Typography variant="subtitle1">No Items<br/>
        <Link to="/" className={classes.link}>Browse Products</Link></Typography>
    )
    const FilledCart=()=>(
        <>
        <Grid container spacing={3}>
        {cart.line_items.map((item)=>(
            <Grid item xs={12} sm={4} key={item.id}>
              <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
               </Grid> 
        ))}
        </Grid>
        <div className={classes.cardDetails}>
            <Typography variant="h5">
                Subtotal:{cart.subtotal.formatted_with_symbol}
            </Typography>
            <div>
                <Button className={classes.emptyButton} size="large" type="button" color="secondary" onClick={handleEmptyCart}>
                    Empty Cart
                </Button>
                <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="secondary">
                    Checkout
                </Button>
            </div>
        </div>
        </>
    )
  return <Container>
      <div className={classes.toolbox}/>
      <Typography variant="h3" className={classes.title}>Your bag</Typography>
      {isEmpty ?<EmptyCart/>:<FilledCart/>}
  </Container>;
};

export default Cart;
