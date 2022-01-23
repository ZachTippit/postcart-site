import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom'
import SplashImage from '../../../assets/splash-cover3.png'

const SplashCover = () => {


    return(
        <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.75)), url(${SplashImage})`, backgroundSize: 'cover', height: '40vh', lineHeight: '40vh'}}>
            <span style={{display: 'inline-block', verticalAlign: 'middle', lineHeight: '7rem', paddingLeft: '15%'}}>
                <Typography gutterBottom variant='h1' style={{color: 'white', fontSize: '2.5rem', paddingBottom: '2rem'}}>Welcome to Postcart!</Typography>
                <Typography gutterBottom variant='h3' style={{color: 'white', fontSize: '1rem'}}><i>Check out postcard collections by independent artists</i></Typography>
                <Button component={Link} to='shop' variant='outlined' size='small' style={{color: 'white', border: 'white 1px solid'}}>View Products</Button>
            </span>
        </div>
    ) 
};

export default SplashCover;
