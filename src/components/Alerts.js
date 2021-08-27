import React from 'react';
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

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
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <Alert
                open={open}
                severity={type}
                action={
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                }>
                <AlertTitle>{title}</AlertTitle>
                {message}
            </Alert>
        </div>
    );
}

//error, warning, info, success