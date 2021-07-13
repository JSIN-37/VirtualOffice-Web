import React from 'react'
import Grid from '@material-ui/core/Grid'
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    apptitle: {
        padding: theme.spacing(2),//16px
        fontWeight: 500,
        textDecoration: 'none'
    }
    ,
    appspace: {
        padding: theme.spacing(2),//16px
        fontWeight: 500,
        color: "#E3E6F5"
    },
    appbar: {
        background: '#E3E6F5',
    }
}));

export default function DivisionHeader() {
    const classes = useStyles();

    return (
        <Grid container spacing={4}>
            <AppBar
                position="fixed"
                color="primary"
                className={classes.appbar}
                elevation={0}>
                <Toolbar>
                    <Typography variant="h5" className={classes.appspace}>
                        spacespacespaice
                    </Typography>
                    <DashboardIcon color="primary" className={classes.appbaricon} fontSize="large" />
                    <Typography variant="h5" className={classes.apptitle} color="primary" component={Link} to="/">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
        </Grid>
    );
}