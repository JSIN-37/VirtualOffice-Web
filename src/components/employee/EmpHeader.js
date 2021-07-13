/* eslint-disable no-unused-vars */
import React from "react";
import { makeStyles } from "@material-ui/core";
import { Typography, AppBar, Toolbar } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import { Link as useLocation } from "react-router-dom";
// import { Link as useHistory } from "react-router-dom";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: 'flex'
        },
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3) //24px
        },
        appbaricon: {
            color: '#535860',
        },
        appbar: {
            width: `calc(100% - ${drawerWidth}px)`,
            background: '#E3E6F5'
        },
        toolbar: theme.mixins.toolbar
    }
})


export default function EmpHeader({ children }) {
    const classes = useStyles()
    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    // const history = useHistory()
    // const location = useLocation()

    return (
        <div className={classes.root}>
            <AppBar
                position="fixed"
                color="primary"
                className={classes.appbar}
                elevation={0}>
                <Toolbar>
                    <DashboardIcon className={classes.appbaricon} fontSize="large" />
                    <Typography variant="h5" className={classes.title}>
                        Dashboard
                    </Typography>
                    <Tabs
                        value={value}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={handleChange}
                        aria-label="disabled tabs example"
                    >
                        <Tab label="Active" />
                        <Tab label="Disabled" disabled />
                        <Tab label="Active" />
                    </Tabs>
                </Toolbar>
            </AppBar>
            <div>

                <div className={classes.page}>
                    <div className={classes.toolbar}>
                    </div>
                    {children}
                </div>
            </div>
        </div >

    )
}