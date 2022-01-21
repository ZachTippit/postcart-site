import React from 'react';
import { Grid, Typography, Divider } from '@material-ui/core';

const categories = ['1','2','3','4'];

const ProductCollections = () => {
    return (
        <div>
            <Typography gutterBottom variant='h6' align='center' style={{marginTop: '4rem'}}>Product Collections</Typography>
            <Divider variant='middle' style={{width: '40%', margin: 'auto'}} />
            <Grid container style={{justifyContent: 'center', alignItems: 'center', marginTop: '2rem', marginBottom: '4rem'}}>
                {categories.map((category) => (
                    <Grid item xs={12} md={6} style={{textAlign: 'center'}}>
                        <img src='http://via.placeholder.com/350x150' alt={category} />
                        <p>Product {category}</p>
                    </Grid>
                ))}
            </Grid>   
        </div>    
    )
};

export default ProductCollections;
