import { makeStyles } from '@material-ui/core/styles';


// Custom styling sheet for home page subcomponents

export default makeStyles((theme) => ({

      collectionImageContainer: {
        width: '80%',
        margin: 'auto',
        backgroundSize: 'cover',
        height: '150px',
        lineHeight: '150px',
        marginTop: '2rem', 
        padding: '1rem',
        overflow: 'hidden'
      },

      collectionImageHover: {
        transition: 'all 0.4s ease-in-out',
        "&:hover": {
            transform: 'scale(1.02)'
        }
      }

}))