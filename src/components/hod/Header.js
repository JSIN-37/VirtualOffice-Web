import React from 'react';
// import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
// import Badge from '@material-ui/core/Badge';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import MoreIcon from '@material-ui/icons/MoreVert';

export default function Header() {
    return (
        <AppBar position="absolute">
            <Toolbar>

                <Grid container>
                    <Grid item lg={12} md={6} sm={4}>
                    </Grid>
                    <Grid item lg={12} md={6} sm={4}>

                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

// Routes thing
//<nav className="navbar navbar-expand-lg navbar-light bg-light">
// <ul className="navbar-nav mr-auto">
// <li><Link to={'/'} className="nav-link"> Dashboard </Link></li>
// <li><Link to={'/division'} className="nav-link"> Division </Link></li>
// <li><Link to={'/teams'} className="nav-link"> Teams </Link></li>
// </ul>
// </nav>
// <hr />