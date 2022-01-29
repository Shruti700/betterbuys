import React from 'react';
import { AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography } from '@material-ui/core';
import {  ShoppingCartOutlined } from '@material-ui/icons';
import { mergeClasses } from '@material-ui/styles';
import useStyles from './styles';
import {Link, useLocation} from 'react-router-dom';
const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location=useLocation();

    
  return (
      <>
    <AppBar position="fixed" className={mergeClasses.appBar} color="inherit">
        <Toolbar>
            <Typography component={Link} to="/" variant="h5" className={classes.title} color="inherit">
                <img src="https://media1.thehungryjpeg.com/thumbs2/ori_3624982_1kw0pzzvzqvw4xg2lbnokbvg0j63p6u1l1m6v6dx_bb-monogram-logo-design.jpg" alt="Commerce.js" height="25px" className={classes.image}/>
                better buys
            </Typography>
            <div className={classes.grow}/>
            {location.pathname==='/' && (
            <div className={classes.button}>
                
                <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                    <Badge badgeContent={totalItems} color="secondary"><ShoppingCartOutlined/></Badge>
                </IconButton>
                </div>)}
        </Toolbar>
    </AppBar>
      </>
  );
};

export default Navbar;
