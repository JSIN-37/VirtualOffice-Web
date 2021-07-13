import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
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
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Box from '@material-ui/core/Box';
import { Avatar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

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

function EditUserRoles(props) {
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
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                  Responsive drawer
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
          Add User Roles
        </Typography>
        <form>
          <TextField
            className="Text-field"
            id="filled-full-width"
            style={{ margin: 4 }}
            label="Role Name"
            placeholder="Worker"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          ></TextField>
          <br />
          <Checkbox
            defaultChecked
            style={{ margin: 4 }}
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          <Typography>Default Role</Typography>
          <br />
          <TextField
            className="Text-field"
            id="filled-full-width"
            style={{ margin: 2 }}
            label="Description"
            placeholder="Description"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          ></TextField>
          <br />
          <br />

          <h4>Permissions</h4>
        </form>
        <table width="100%">
          <tr>
            <th> </th>
            <th> </th>
            <th> </th>
          </tr>

          <tr>
            <td><Typography> Division Management </Typography></td>
            <td> <Typography>Employee Management </Typography></td>
            <td> <Typography>Task Management</Typography> </td>
            <td> </td>
          </tr>

          <tr>
            <td>
              <FormControlLabel
                control={
                  <Switch
                    // checked={state.checkedB}
                    // onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Create Divison"
              />
            </td>

            <td>
              <FormControlLabel
                control={
                  <Switch
                    // checked={state.checkedB}
                    // onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Mark Attendance"
              />
            </td>
            <td>
              <FormControlLabel
                control={
                  <Switch
                    // checked={state.checkedB}
                    // onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Create a Task"
              />
            </td>
            <td> </td>
          </tr>

          <tr>
            <td>
              {" "}
              <FormControlLabel
                control={
                  <Switch
                    // checked={state.checkedB}
                    // onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Create Team"
              />
            </td>
            <td>
              <FormControlLabel
                control={
                  <Switch
                    // checked={state.checkedB}
                    // onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Check Attendance"
              />
            </td>
            <td>
              <FormControlLabel
                control={
                  <Switch
                    // checked={state.checkedB}
                    // onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Monitor Tasks"
              />
            </td>
            <td> </td>
          </tr>

          <tr>
            <td> </td>
            <td>
              <FormControlLabel
                control={
                  <Switch
                    // checked={state.checkedB}
                    // onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Promote Employees"
              />
            </td>
            <td>
              <FormControlLabel
                control={
                  <Switch
                    // checked={state.checkedB}
                    // onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Extended Deadline"
              />
            </td>
            <td> </td>
          </tr>

          <tr>
            <td> </td>
            <td>
              <FormControlLabel
                control={
                  <Switch
                    // checked={state.checkedB}
                    // onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Transfer Employees"
              />
            </td>
            <td> </td>
          </tr>

          <tr>
            <td> </td>
            <td> </td>

            <td align="right">
              <Button color="secondary">Delete User Role</Button>
              <Button variant="contained" color="primary">
                Save Role
              </Button>
            </td>
            <td>
              <Button variant="outlined" color="primary">
                Cancel
              </Button>
            </td>
          </tr>
        </table>
      </main>
    </div>
  );
}

export default EditUserRoles;

EditUserRoles.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
