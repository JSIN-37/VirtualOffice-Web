import React from 'react';
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from "react-router-dom";
import logo from "../resources/logo_small.png";

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: 'transparent',
        flexGrow: 0,
    },
    logo: {
        flexShrink: 0,
        height: "40px"
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarNav: {
        flexGrow: 1,
        paddingLeft: theme.spacing(2),
        textDecoration: "none"
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
        textDecoration: "none"
    },
}));

export default function Header(props) {
    const classes = useStyles();

    return (
        <CssBaseline>
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <img src={logo} alt="logo" className={classes.logo} />
                    <Typography className={classes.toolbarNav} component={RouterLink} to="/"> About</Typography>
                    <Typography className={classes.toolbarLink} component={RouterLink} to="/admin"> Admin Login</Typography>
                    <Typography className={classes.toolbarLink} component={RouterLink} to="/employee"> Employee Login</Typography>
                </Toolbar>
            </AppBar></CssBaseline>

    );
}