import React from 'react';
import { Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const CollectionImage = ({image, name}) => {
  return (
    <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(${image})`, minWidth: '320px', width: '80%', margin: 'auto', backgroundSize: 'cover', height: '150px', lineHeight: '150px', marginTop: '2rem', padding: '1rem'}}>
        <div style={{border: '1px solid white', height: '100%'}}>
            <span style={{display: 'inline-block', verticalAlign: 'middle', lineHeight: '3rem', width: '100%'}}>
                <Typography gutterBottom variant='h4' style={{color: 'white'}}>{name}</Typography>
                <Button component={Link} to='shop' variant='outlined' size='small' style={{color: 'white', border: 'white 1px solid'}}>View Products</Button>
            </span>
        </div>
        {/*  */}
    </div>
  )
};

export default CollectionImage;
