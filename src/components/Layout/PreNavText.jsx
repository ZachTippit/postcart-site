import { Typography } from '@material-ui/core';
import React from 'react';

const PreNavText = () => {
    return (
        <div style={{backgroundColor: '#eee', height: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Typography variant='body2' align='center'>* Free shipping on U.S. orders over $50 🚚📦 *</Typography>
        </div>
    )
};

export default PreNavText;
