import React from 'react'
import Grid from '@material-ui/core/Grid'
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
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
        height: 58,
    },
    tab: {
        color: '#3F51B4',
        textTransform: 'none',
        fontSize: '16px'
    },
    indicator: {
        backgroundColor: '#3F51B4'
    },
}));

export default function Profile() {
    const classes = useStyles();

    return (
        <Grid container spacing={4}>
            <AppBar
                position="fixed"
                color="primary"
                className={classes.appbar}
                elevation={0}>
                <Toolbar>
                    <Typography variant="h6" className={classes.appspace}>
                        spacespacespaicespa
                    </Typography>
                    <PersonRoundedIcon color="primary" className={classes.appbaricon} fontSize="medium" />
                    <Typography variant="h6" className={classes.apptitle} color="primary" component={Link} to="/profile">
                        Profile
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid item xs={12} sm={6} md={4} >
                <p>divsion here</p>
            </Grid>
        </Grid>
    );
}