import React from 'react';
import CollectionImage from './CollectionImage';
import { Grid, Typography, Divider } from '@material-ui/core';
import { JamesJean, KaiMartin, LexieBaker, GaryBorse } from '../../../assets/collections'

const categories = [
    {image: JamesJean, name: 'James Jean'},
    {image: KaiMartin, name: 'Kai Martin'},
    {image: LexieBaker, name: 'Psychedelicious Lex'},
    {image: GaryBorse, name: 'Gary Borse'}
];

const ProductCollections = () => {
    return (
        <div style={{backgroundColor: 'lightgray', padding: '1rem 0 1rem 0'}}>
            <Typography gutterBottom variant='h6' align='center' style={{marginTop: '4rem'}}>Product Collections</Typography>
            <Divider variant='middle' style={{width: '40%', margin: 'auto'}} />
            <Grid container style={{justifyContent: 'center', alignItems: 'center', marginTop: '2rem', marginBottom: '4rem'}}>
                {categories.map((category) => (
                    <Grid item xs={12} md={6} style={{textAlign: 'center'}}>
                        <CollectionImage image={category.image} name={category.name} />
                        {/* <img src='http://via.placeholder.com/350x150' alt={category} />
                        <p>{category.name}</p> */}
                    </Grid>
                ))}
            </Grid>   
        </div>    
    )
};

export default ProductCollections;
