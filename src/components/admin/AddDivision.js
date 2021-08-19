import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import { useState } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import MailIcon from '@material-ui/icons/Mail';
// import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import Checkbox from '@material-ui/core/Checkbox';
// import OfficeImage from '../../resources/man.jpg';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
// import { IconButton } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import { Avatar } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
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
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
}));

function AddDivision(props) {
  const classes = useStyles();
  const [divisonname, setDivisonname] = useState(``);
  const [hod, setHod] = useState(``);

  const setDivision = async (divisonname, hod) => { //add choose file and check box to post
    var axios = require("axios");
    axios
      .post(`${window.backendURL}/add-new-division`, {
        divisonname: divisonname,
        hod: hod,
  })
};

  const { window } = props;
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
    
      <Box  m={1} 
              alignItems= "center"
              justify="center"
              justifyContent="center">

            <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems= "center"
                    justify="center"
                    justifyContent="center"
              >

              <Avatar alt="A Pathirana" src="../../resources/logo_big.png" className={classes.large} />

              </Grid>

              <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems= "center"
                    justify="center"
                    justifyContent="center"
              >
              <Typography color="initial" >
                  A.T. Pathirana
              </Typography>
              <Typography color="initial" >
                  Head of Division
              </Typography>
              </Grid>
          </Box>

      <Divider/>
      <List>
        {[
          { name: "Organization", link: "/organization" },
          { name: "Divisions", link: "/divisions" },
          { name: "Teams", link: "/teams" },
          { name: "User Roles & Permissions", link: "/user-roles" },
          { name: "Employees", link: "/employees" },
          { name: "Profile", link: "/profile" },
          { name: "Settings", link: "/settings" },
          { name: "Log Out", link: "/" },
        ].map((text, index) => (
          <ListItem button key={text.name} component={Link} to={text.link}>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText primary={text.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );


 

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
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
      
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography variant="h6" noWrapn style={{ margin: 4}} >
           Add Division
          </Typography>
  

            <table  width="50%" >
                <tr>
                    <td>
                    <TextField
                    required
                    id="filled-required"
                    label="Division Name"
                    placeholder="External Degrees Centre "
                    style={{ margin: 2,  minHeight: '11vh' }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    onChange={(e) => setDivisonname(e.target.value)}

                    
                    />
                    <br/>

                  <TextField
                    required
                    id="filled-required"
                    label="Head of Division"
                    placeholder="Description"
                    style={{ margin: 2}}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    onChange={(e) => setHod(e.target.value)}
                  />
                    </td>
                    <td> </td>
                </tr>

                

            </table>
            <Grid
                      container
                      spacing={0}
                      direction="column"
                      alignItems= "flex-end"
                      justify="center"
                      justifyContent="flex-end"
                      style={{ minHeight: '20vh' }}
                    >
                      
                     <div>
                    <Button variant="contained" color="primary" style={{ margin: 4}}  
                    onClick={(e) => {
                      // e.preventDefault();
                      setDivision(divisonname, hod);
                    }}
                    >
                      Save Role
                    </Button>

                    <Button variant="outlined" color="primary" style={{ margin: 4}}  >
                      Cancel
                    </Button>
                    </div> 
              </Grid>
      </main>
    </div>
  );
}

AddDivision.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default AddDivision;
