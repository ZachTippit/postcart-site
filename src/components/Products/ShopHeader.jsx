import React from 'react';

import useStyles from './styles';

const ShopHeader = () => {
    const classes = useStyles();

    return (
        <div className={classes.shopHeader}>
            <h1>POSTCART</h1>
            <p>Check out postcard collections by a unique group of artists.</p>
        </div>
    )
}

export default ShopHeader
