import React from 'react'
import { Typography } from '@material-ui/core';

import useStyles from './styles';

const QandA = ({question, answer}) => {
    const classes = useStyles();

    return (
        <div className={classes.question}>
            <Typography variant="h6">
                {question}
            </Typography>
            <div className={classes.answer}>
                <Typography variant="p">
                   {answer}
                </Typography>
            </div>
        </div>
    )
}

export default QandA;
