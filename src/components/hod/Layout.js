/* eslint-disable no-unused-vars */
import React from "react";
import { makeStyles } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import GroupWorkRoundedIcon from "@material-ui/icons/GroupWorkRounded";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";
import AssessmentIcon from "@material-ui/icons/Assessment";
import EventIcon from "@material-ui/icons/Event";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import PowerSettingsNewRoundedIcon from "@material-ui/icons/PowerSettingsNewRounded";
import { useHistory, useLocation } from "react-router";
import logo from '../../resources/logo.png';
// import { Link as useLocation } from "react-router-dom";
// import { Link as useHistory } from "react-router-dom";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: 'flex'
        },
        page: {
            // background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3) //24px
        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        bigAvatar: {
            width: theme.spacing(8),
            height: theme.spacing(8),
            marginBottom: '10px'
        },
        info: {
            fontWeight: 500,
            textAlign: 'center'
        },
        infoBox: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '30px',
            paddingBottom: '15px'
        },
        active: {
            background: '#f2f2f2'
        },
        bottomPush: {
            position: 'fixed',
            bottom: 0,
            textAlign: 'center',
            paddingBottom: 20
        },
        logo: {
            margin: '0 75px',
            height: 50,
            zIndex: 1000,
        },
        toolbar: theme.mixins.toolbar
    }
})


export default function Layout({ children }) {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()
    const [value, setValue] = React.useState(2)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const menuItems = [
        {
            text: 'Dashboard',
            icon: <DashboardIcon color="primary" />,
            path: '/'
        },
        {
            text: 'Division',
            icon: <GroupWorkRoundedIcon color="primary" />,
            path: '/division'
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
            text: 'Attendance',
            icon: <EventIcon color="primary" />,
            path: '/attendance'
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
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper }}>
                <div>
                    <Box component="span" m={1} className={classes.infoBox}>
                        <Avatar alt="A Pathirana" src="../../resources/logo_big.png" className={classes.bigAvatar} />
                        <Typography color="initial" className={classes.info}>
                            A.T. Pathirana
                        </Typography>
                        <Typography color="initial" className={classes.info}>
                            Head of Division
                        </Typography>
                    </Box>
                    <Divider></Divider>
                </div>
                <List>
                    {menuItems.map(item => (
                        <ListItem
                            button
                            key={item.text}
                            onClick={() => history.push(item.path)}
                            className={location.pathname === item.path ? classes.active : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
                <div className={classes.bottomPush}>
                    <img src={logo} alt="Logo" className={classes.logo} />
                </div>
            </Drawer>
            <div className={classes.page}>
                <div className={classes.toolbar}>
                </div>
                {children}
            </div>
        </div >
    )
}