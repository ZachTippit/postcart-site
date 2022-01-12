import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({ 
    centerAbout: {
        backgroundColor: 'theme.palette.background.default',
        display: 'block',
        margin: 'auto',
        marginTop: '100px',
        padding: '60px',
        width: '70%',
        fontFamily: 'Georgia, serif',
        overflow: 'auto'
    },
    
    question: {
        paddingTop: '3rem',
        width: '70%'
    },

    answer: {
        paddingTop: '1rem'
    },

    row: {
        display: 'flex',
        paddingTop: '2em',
        height: 'auto',
        overflow: 'visible'
    },

    column: {
        flex: '50%',
        padding: '10px',
        height: '300px'
    },

    contact: {
        padding: '20px',
        marginTop: '100px'
    },

    qCard: {
        marginTop: '20px'
    },

    faqHead: {
        marginTop: '40px'
    }
}))