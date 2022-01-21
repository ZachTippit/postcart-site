import React from 'react';
import { Grid, Typography, Divider } from '@material-ui/core';
import ArtFestival from '../../../assets/booth.png'
import Portable from '../../../assets/handbag.png'
import Shippable from '../../../assets/shipped.png'


const sellerPoints = [
    {text: 'Sell in booth at art festivals', pic: ArtFestival},
    {text: 'Multi-use print ready to go', pic: Portable},
    {text: 'Easy and cheap to ship', pic: Shippable},
]


const SellerPoints = () => {
  return (
    <>
        <Typography gutterBottom variant='h6' align='center' style={{marginTop: '4rem'}}>Why print with Postcart?</Typography>
        <Divider variant='middle' style={{width: '40%', margin: 'auto'}} />
        <Grid container style={{justifyContent: 'center', marginTop: '2rem', marginBottom: '4rem'}}>
            {sellerPoints.map(point => (
                <Grid item xs={6} md={4} style={{textAlign: 'center', marginTop: '1rem', marginBottom: '1rem'}}>
                    <img src={point.pic} alt={point.text} style={{maxWidth: '40%'}}/>
                    <Typography variant='body1'>{point.text}</Typography>
                </Grid>
            ))}
        </Grid>
    </>
  )
};

export default SellerPoints;

// art shows - <a href="https://www.flaticon.com/free-icons/booth" title="Booth icons">Booth icons created by Freepik - Flaticon</a>
// portable - <a href="https://www.flaticon.com/free-icons/bag" title="bag icons">Bag icons created by Freepik - Flaticon</a>
// shippable - <a href="https://www.flaticon.com/free-icons/delivery" title="delivery icons">Delivery icons created by Freepik - Flaticon</a>
