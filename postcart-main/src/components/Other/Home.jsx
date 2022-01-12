import React from 'react'
import { Card, Paper, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Home = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.centerAbout}>
            <Typography variant="h3">
                WELCOME TO POSTCART!
            </Typography>
            <Typography variant="h4">
                An under construction website by Zach Tippit
            </Typography>
            <br />
            <br />
            <br />
            <Card component={Link} to='/shop' style={{width: '30%'}}>
                <Typography variant="h6">
                    Check out the shop here!
                </Typography>
            </Card>
            
        </Paper>
    )
}

export default Home;

