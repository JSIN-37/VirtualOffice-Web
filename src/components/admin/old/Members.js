import React from "react";
// import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
// import Checkbox from "@material-ui/core/Checkbox";
// import Switch from "@material-ui/core/Switch";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import EmailIcon from "@material-ui/icons/Email";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';
import { Avatar } from "@material-ui/core";
// import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import DashboardIcon from "@material-ui/icons/Dashboard";
// My stuff
import MemberCard from "./MemberCard";
import axios from "axios";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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

function Members(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [members, setMembers] = React.useState([]);

  React.useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${window.token}` },
    };
    axios
      .get(`${window.backendURL}/admin/users`, config)
      .then((res) => {
        const data = res.data;
        setMembers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
              <Avatar alt="A Pathirana" src="../../../resources/logo_big.png" className={classes.large} />
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

  const container = document.body;

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
        <Typography
          variant="h6"
          noWrapn
          style={{ margin: 4, minHeight: "10vh" }}
        >
          Employees
        </Typography>

        <div>
          <MenuIcon /> <EmailIcon /> <AnnouncementIcon /> <DeleteIcon />
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="flex-end"
            justify="center"
            justifyContent="flex-end"
            style={{ minHeight: "0vh" }}
          >
            <TextField
              id="outlined-search"
              label="Search field"
              type="search"
              variant="outlined"
            />
          </Grid>
        </div>
        {members.map((member) => (
          <MemberCard
            key={member.id}
            id={member.id}
            email={member.email}
            first_name={member.first_name}
            last_name={member.last_name}
            contact_number={member.contact_number}
            members={members}
            setMembers={setMembers}
          />
        )
        )}
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="flex-start"
          justify="center"
          justifyContent="flex-start"
          style={{ minHeight: "20vh" }}
        >
          <Button
            variant="contained"
            component={Link}
            to="/invite-employees"
            color="primary"
            style={{ margin: 4 }}
          >
            Invite Members
          </Button>
        </Grid>
      </main>
    </div>
  );
}

export default Members;
