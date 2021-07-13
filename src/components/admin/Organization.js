import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
// import IconButton from '@material-ui/core/IconButton';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import OfficeImage from "../../resources/man.jpg";
import OrgImage from "../../resources/orgImage.jpg";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import DashboardIcon from "@material-ui/icons/Dashboard";

import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
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
}));

function Organization(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />

      <List>
        <ListItem>
          <Avatar>
          <img src={OfficeImage} className="VO-logo" alt="logo" />
          </Avatar>
        </ListItem>
      </List>

      <Divider />
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

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
                position="fixed"
                color="primary"
                className={classes.appbar}
                elevation={0}>
                <Toolbar>
                    <DashboardIcon color="primary" className={classes.appbaricon} fontSize="large" />
                    <Typography variant="h5" className={classes.title} color="primary">
                        {/* Dashboard */}
                    </Typography>
                </Toolbar>
        </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
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
        <Typography variant="h6" noWrapn style={{ margin: 4 }}>
          Organization
        </Typography>
        <br/>
        
        <Avatar>
          <img src={OrgImage} className="VO-logo" alt="logo" />
        </Avatar>
        UCSC
        <br/> 
        <br/> 

        <form>
          <TextField
            className="Text-field"
            id="filled-full-width"
            style={{ margin: 4 }}
            label="System Administrator"
            placeholder="A L Silva"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          ></TextField>

        <br/> 
        <br/> 


        <TextField
            className="Text-field"
            id="filled-full-width"
            style={{ margin: 4 }}
            label="Administrator Email "
            placeholder="Email"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          ></TextField>
        </form>

        <br/>
        <Button color="primary" component={Link}
              to="/divisions">Divisions</Button> <br/>

        <Button color="primary" component={Link}
              to="/teams"> Teams</Button><br/>


        <Button color="primary" component={Link}
              to="/user-roles">User Roles</Button><br/>
        <br/>


        <Button variant="contained" color="primary" component={Link}
              to="/edit-organization-details">
        Edit Details
        </Button>

       
      </main>
    </div>
  );
}

Organization.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Organization;
