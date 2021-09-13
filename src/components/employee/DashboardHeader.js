import React from 'react'
import Grid from '@material-ui/core/Grid'
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DashboardIcon from "@material-ui/icons/Dashboard";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    apptitle: {
        padding: theme.spacing(2),//16px
        fontWeight: 500,
        textDecoration: 'none'
    },
    appbaricon: {
        marginLeft: "240px"
    },
    appbar: {
        background: '#E3E6F5',
        height: 58,
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
                    <DashboardIcon color="primary" className={classes.appbaricon} fontSize="medium" />
                    <Typography variant="h6" className={classes.apptitle} color="primary">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
        </Grid>
    );
}