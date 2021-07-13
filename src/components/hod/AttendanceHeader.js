import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from "@material-ui/core/styles";
import EventIcon from "@material-ui/icons/Event";
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

export default function DivisionHeader() {
    const classes = useStyles();

    const [value, setValue] = useState([]);
    const handleTabs = (e, val) => {
        console.warn(val);
        setValue(val)
    }
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
                    <EventIcon color="primary" className={classes.appbaricon} fontSize="large" />
                    <Typography variant="h5" className={classes.apptitle} color="primary" component={Link} to="/attendance">
                        Attendance
                    </Typography>
                    <Tabs value={value} onChange={handleTabs} classes={{ indicator: classes.indicator }}>
                        <Tab label="Active Attendees" className={classes.tab} component={Link} to="/attendees" />
                        <Tab label="Absentees" className={classes.tab} component={Link} to="/absentees" />
                    </Tabs>
                </Toolbar>
            </AppBar>
        </Grid>
    );
}