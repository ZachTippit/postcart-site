import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Badge, Grid, Typography, Box} from '@material-ui/core';
import { Menu, Container, Avatar, Button, Tooltip, MenuItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/commerce.png';
import useStyles from './styles';

const pages = [
    { title: 'Home', link: '/' },
    { title: 'About', link: 'about' },
    { title: 'Shop', link: 'shop' },
    { title: 'Contact', link: 'contact' }
];

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };
    
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };
    
    return (
        <AppBar position="static" style={{height: '3.75rem', display: 'flex', alignItems: 'center'}}>
            <Container maxWidth="md">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between' }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.title} component={Link} to={page.link} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page.title}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                        <Typography variant="h6" noWrap component="div" style={{alignSelf: 'center', justifyContent: 'center' }}>Postcart</Typography>
                        {location.pathname !== '/cart' && (
                            <div className={classes.button}>
                            <IconButton component={Link} to='/cart' aria-label="Show cart items" color="inherit">
                                <Badge badgeContent={totalItems} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>  )}
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between' }}>
                        <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }} style={{alignSelf: 'center', justifyContent: 'center' }}>Postcart</Typography>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            {pages.map((page) => (
                                <Button
                                    key={page.title}
                                    component={Link} to={page.link}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page.title}
                                </Button>
                            ))}
                        </div>
                        {location.pathname !== '/cart' && (
                            <div className={classes.button}>
                            <IconButton component={Link} to='/cart' aria-label="Show cart items" color="inherit">
                                <Badge badgeContent={totalItems} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>  )}
                    </Box>
                    {/* <Box sx={{ flexGrow: 0 }}>
                        {location.pathname !== '/cart' && (
                            <div className={classes.button}>
                            <IconButton component={Link} to='/cart' aria-label="Show cart items" color="inherit">
                                <Badge badgeContent={totalItems} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>  )}
                    </Box> */}
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar