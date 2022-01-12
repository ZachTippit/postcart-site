import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import FilterBar from './Filter/FilterBar';
import ShopHeader from './ShopHeader';


import useStyles from './styles';

const Products = ({products, onAddToCart, filterProducts}) => {
    const classes = useStyles();

    return(
        <main className={classes.content}>
            <ShopHeader />
            <div className={classes.toolbar}>
                <FilterBar filterProducts={filterProducts}/>
                <br />
                <Grid container justify="center" spacing={4}>
                    {products.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product} onAddToCart={onAddToCart}/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </main>  
    )
}

export default Products;