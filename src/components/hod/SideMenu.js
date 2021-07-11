
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import PropTypes from 'prop-types'
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupWorkRoundedIcon from '@material-ui/icons/GroupWorkRounded';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import AssessmentIcon from '@material-ui/icons/Assessment';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import EventIcon from '@material-ui/icons/Event';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import PowerSettingsNewRoundedIcon from '@material-ui/icons/PowerSettingsNewRounded';
import Box from '@material-ui/core/Box';
import { Link as RouterLink } from 'react-router-dom'

// import logo from "../assets/logo.png";

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
    },
    info: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },

    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

function ListItemLink(props) {
    const { icon, primary, to } = props;

    const renderLink = React.useMemo(
        () =>
            React.forwardRef(function Link(itemProps, ref) {
                return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
            }),
        [to],
    );

    return (
        <li>
            <ListItem button component={renderLink}>
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                <ListItemText primary={primary} />
            </ListItem>
        </li>
    );
}

ListItemLink.propTypes = {
    icon: PropTypes.element,
    primary: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

export default function SideMenu() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <Grid
                    container
                    spacing={0}
                    align="center"
                    justify="center"
                    style={{
                        overflow: "hidden"
                    }}
                >
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <div className={classes.toolbar} />
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
                        </Grid>
                        <Grid item xs={12}>
                            <Box textAlign="center" fontSize={16} fontWeight="fontWeightMedium" m={1}>Firstname LastName</Box>
                            <Box textAlign="center" fontSize={16} fontWeight="fontWeightMedium" m={1}>Designation</Box>

                        </Grid>
                    </Grid>
                </Grid>
                <Divider />

                <List>
                    <ListItemLink to="/dashboard" primary="Dashboard" icon={<DashboardIcon />} />
                    <ListItemLink to="/division" primary="Division" icon={<GroupWorkRoundedIcon />} />
                    <ListItemLink to="/teams" primary="Teams" icon={<PeopleRoundedIcon />} />
                    <ListItemLink to="/tasks" primary="Tasks" icon={<AssessmentIcon />} />
                    <ListItemLink to="/attendance" primary="Attendance" icon={<EventIcon />} />
                    <ListItemLink to="/profile" primary="Profile" icon={<PersonRoundedIcon />} />
                    <ListItemLink to="/settings" primary="Settings" icon={<SettingsRoundedIcon />} />
                    <ListItemLink to="/logout" primary="Log Out" icon={<PowerSettingsNewRoundedIcon />} />
                </List>
            </Drawer>
            <main className={classes.content}>
            </main>
        </div >
    );
}
