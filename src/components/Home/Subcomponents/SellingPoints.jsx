import { Grid, Typography, Divider } from '@material-ui/core';
import React from 'react';

import MailCard from '../../../assets/postcard.png'
import FrameCard from '../../../assets/frame.png'
import SupportArtists from '../../../assets/artist-woman.png'
import Charity from '../../../assets/love.png'
import ArtFestival from '../../../assets/booth.png'
import Portable from '../../../assets/handbag.png'
import Shippable from '../../../assets/shipped.png'

const buyerPoints = [
    {text: 'Send to Friends', pic: MailCard},
    {text: 'Hang on your wall', pic: FrameCard},
    {text: 'Support local artists', pic: SupportArtists},
    {text: 'Portion of profits to charity', pic: Charity},
]

const sellerPoints = [
    {text: 'Sell in booth at art festivals', pic: ArtFestival},
    {text: 'Multi-use print ready to go', pic: Portable},
    {text: 'Easy and cheap to ship', pic: Shippable},
]

const SellingPoints = ({isBuyer}) => {

    const points = isBuyer === true ? buyerPoints : sellerPoints;

  return (
    <>
        <Typography gutterBottom variant='h6' align='center' style={{marginTop: '4rem'}}>Why buy from Postcart?</Typography>
        <Divider variant='middle' style={{width: '40%', margin: 'auto'}} />
        <Grid container style={{marginTop: '2rem', marginBottom: '4rem'}}>    
            {points.map(point => (
                <Grid item xs={6} md style={{textAlign: 'center', marginTop: '1rem', marginBottom: '1rem'}}>
                    <img src={point.pic} alt={point.text} style={{maxWidth: '40%'}}/>
                    <Typography style={{marginTop: '2rem'}} variant='body2'>{point.text}</Typography>
                </Grid> 
            ))}
        </Grid>
    </>
  )
};

export default SellingPoints;

// mailcard - <a href="https://www.flaticon.com/free-icons/memo" title="memo icons">Memo icons created by Eucalyp - Flaticon</a>
// framecard - <a href="https://www.flaticon.com/free-icons/frame" title="frame icons">Frame icons created by Freepik - Flaticon</a>
// supportartist - <a href="https://www.flaticon.com/free-icons/artist" title="artist icons">Artist icons created by Smashicons - Flaticon</a>
// charity - <a href="https://www.flaticon.com/free-icons/love" title="love icons">Love icons created by Freepik - Flaticon</a>