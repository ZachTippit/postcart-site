import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Grid, Typography} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/commerce.png';
import useStyles from './styles';

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();
    
    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to='/' variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                        Postcart
                    </Typography>
                    <Grid container spacing={1} className={classes.navItems}>
                        <Grid item sm={4}>
                            <Typography component={Link} to='/about' variant="body2" className={classes.navlink} color="inherit">
                                About
                            </Typography>
                        </Grid>
                        <Grid item sm={4}>
                            <Typography component={Link} to='/shop' variant="body2" className={classes.navlink} color="inherit">
                                Shop
                            </Typography>
                        </Grid>
                        <Grid item sm={4}>
                            <Typography component={Link} to='/contact' variant="body2" className={classes.navlink} color="inherit">
                                Contact
                            </Typography>
                        </Grid>
                    </Grid>
                    <div className={classes.grow} />
                    {location.pathname !== '/cart' && (
                        <div className={classes.button}>
                        <IconButton component={Link} to='/cart' aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                        </div>  )}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
