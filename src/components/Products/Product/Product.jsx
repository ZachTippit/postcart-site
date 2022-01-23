import React from 'react'
import {Card, CardMedia, CardContent, Grid, CardActions, Typography, IconButton} from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import {AddShoppingCart} from '@material-ui/icons';

import useStyles from './styles';

function getModalStyle() {
    const top = 50;
    const left = 50;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        width: '80%',
        display: 'flex',
        flexFlow: 'column'
    };
}

const Product = ({product, onAddToCart}) => {
    // console.log(product);

    let picURLs = product.assets.map((asset, index) => {
        return asset.url;
    });

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [activePic, setActivePic] = React.useState(product.assets[0].url);
    const [inactivePics, setInactivePics] = React.useState(picURLs)

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const changeActivePic = (event) => {
        // console.log(event);
        const currentPic = activePic;
        const newActivePic = event.target.currentSrc
        setActivePic(newActivePic);
        // changeInactivePics(currentPic, newActivePic);
    }

    const changeInactivePics = (currentPic, newActivePic) => {
        // console.log('InactivePics', inactivePics);
        // console.log('New pic', newActivePic);
        const updatedInactivePics = inactivePics.map(picURL => {
            console.log(picURL);
            if(picURL === newActivePic){
                return currentPic;
            } else {
                return picURL
            }
        })
        // console.log('Updated: ', updatedInactivePics)
        setInactivePics(updatedInactivePics);
    };


    return (
        <div>
            <Card className={classes.root}>
                <div onClick={handleOpen}>
                    <CardMedia className={classes.media} image={product.image.url} title={product.name}/>
                    <CardContent>
                        <div className={classes.cardContent}>
                            <Typography variant="h5" gutterBottom>
                                {product.name}
                            </Typography>
                            <Typography variant="h5">
                                {product.price.formatted_with_symbol}
                            </Typography>
                        </div>
                    <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2" color='textSecondary' />
                    </CardContent>
                </div>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            </Card>
            <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={open}
                    onClose={handleClose}
                >
                    <div style={modalStyle} className={classes.paper}>
                        <div className={classes.productCardBtn}>
                            <button onClick={handleClose} className={classes.closeBtn}>X</button>
                        </div>
                        <div className={classes.productCardInfo}>
                            <div className={classes.imgContainer}>
                                <div className={classes.imgCenter}>
                                    <img src={activePic} className={classes.productImage}/>
                                </div>
                                
                                <div className={classes.altImgContainer}>
                                    {inactivePics.map((url, index) => (
                                        <img src={url} className={classes.altImg} onClick={(event) => changeActivePic(event)}/>
                                    ))}  
                                </div>
                            </div>
                            <div className={classes.productDescription}>
                                <Typography variant="h5" gutterBottom>
                                    {product.name}
                                </Typography>
                                <Typography variant="h5">
                                    {product.price.formatted_with_symbol}
                                </Typography>
                                <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2" color='textSecondary' />
                            </div>
                        </div>
                        <div className={classes.productCardFooter}>
                            <div className={classes.productCardBtn}>
                                <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                                    <AddShoppingCart />
                                </IconButton>
                            </div>
                        </div>
                    </div>
            </Modal>
        </div>
        
    )
}

export default Product
