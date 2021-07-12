/* eslint-disable no-unused-vars */
import React from "react";
import { makeStyles } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import { Typography, AppBar, Toolbar } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";
import AssessmentIcon from "@material-ui/icons/Assessment";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import PowerSettingsNewRoundedIcon from "@material-ui/icons/PowerSettingsNewRounded";
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
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        active: {
            background: '#f4f4f4'
        },
        title: {
            padding: theme.spacing(2),//16px
            color: '#535860'
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


export default function Layout({ children }) {
    const classes = useStyles()
    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    // const history = useHistory()
    // const location = useLocation()

    const menuItems = [
        {
            text: 'Dashboard',
            icon: <DashboardIcon color="primary" />,
            path: '/'
        },
        {
            text: 'Teams',
            icon: <PeopleRoundedIcon color="primary" />,
            path: '/teams'
        },
        {
            text: 'Tasks',
            icon: <AssessmentIcon color="primary" />,
            path: '/tasks'
        },
        {
            text: 'Profile',
            icon: <PersonRoundedIcon color="primary" />,
            path: '/profile'
        },
        {
            text: 'Settings',
            icon: <SettingsRoundedIcon color="primary" />,
            path: '/settings'
        },
        {
            text: 'Log out',
            icon: <PowerSettingsNewRoundedIcon color="primary" />,
            path: '/logout'
        }
    ]
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
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper }}>
                <div>
                    <Typography variant="h5" className={classes.title}>
                        so
                    </Typography>
                </div>
                <List>
                    {menuItems.map(item => (
                        <ListItem
                            button
                            key={item.text}
                        // onClick={() => history.push(item.path)}
                        // className={location.pathname === item.path ? classes.active : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>

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