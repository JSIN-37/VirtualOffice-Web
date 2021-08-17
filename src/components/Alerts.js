import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function Alerts(props) {
    const {
        type,
        title,
        message
    } = props
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Alert variant="outlined" severity={type}>
                <AlertTitle>{title}</AlertTitle>
                {message}
            </Alert>
        </div>
    );
}

//error, warning, info, success