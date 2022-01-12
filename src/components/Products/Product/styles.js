import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: 450,
        backgroundColor: 'white',
        boxShadow: '#444',
        padding: '',
    },

    productCardBtn: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingTop: '20px',
        paddingRight: '5%'
    },

    productCardInfo: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr'
    },

    productCardCloseBtn: {
        backgroundColor: 'white',
        border: 'none'
    },

    closeBtn: {
        backgroundColor: 'white',
        border: 'none'
    },

    imgContainer: {
        minWidth: '300px',
        margin: 'auto',
        padding: '20px',
        display: 'block',
        [theme.breakpoints.down('600px')]: {
            width: '10%'
        },
        [theme.breakpoints.up('600px')]: {
            width: '100%'
        }
    },

    imgCenter: {
        display: 'flex',
        justifyContent: 'center'
    },

    productImage: {
        margin: 'auto',
        maxHeight: '400px',
        maxWidth: '500px'
    },

    productDescription: {
        paddingTop: '40%',
        paddingLeft: '50px'
    },

    altImgContainer: {
        width: '100%'
    },

    shopHeader: {
        margin: 'auto',
        backgroundColor: 'lightgray',
        textAlign: 'center'
    },

    imgSlides: {
        margin: 'auto',
        width: '90%'
    },

    altImgContainer: {
        margin: 'auto',
        paddingTop: '40px',
        display: 'flex',
        justifyContent: 'space-around'
    },

    altImg: {
        height: '80px',
        width: '80px'
    }
}));