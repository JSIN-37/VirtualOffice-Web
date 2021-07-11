import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
// import IconButton from '@material-ui/core/IconButton';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import OfficeImage from '../../resources/man.jpg';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
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
}));

function MemberDesignation(props) {
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
        <img src={OfficeImage} className="VO-logo" alt="logo" />
        </ListItem>
      </List>


      <Divider/>
      <List>
        {['Organization', 'Divisions', 'Teams', 'User Roles & Permissions','Members','Profile','Settings','Log Out'].map((text, index) => (
          <ListItem button key={text}>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );


 

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <AppBar position="fixed" className={classes.appBar}>
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
            <Typography variant="h6" noWrapn >
           Add User Roles
          </Typography>
        </Toolbar>
      </AppBar> */}
      
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
           Set Up Your Profile
          </Typography>
  

            <table  width="100%" >
                <tr>
                    <td>
                    <TextField
                    required
                    id="filled-required"
                    label="First Name"
                    placeholder="D.S."
                    style={{ margin: 2}}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    />

                  <TextField
                    required
                    id="filled-required"
                    label="Last Name"
                    placeholder="Silva"
                    style={{ margin: 2}}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                    </td>
                    <td> 
                      Role
                      <div>
                      <Checkbox
                            name="checkedB"
                            color="primary"
                          />
                        Director
                        <Checkbox
                            name="checkedB"
                            color="primary"
                          />
                        DD - Deputy Director
                      </div>

                    </td>
                </tr>


                <tr>
                    <td>

                    <TextField
                    id="filled-required"
                    label="Email Address"
                    placeholder="arsilva@gmail.com"
                    style={{ margin: 2}}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />



                    </td>
                    <td></td>
                </tr>



                
                <tr>
                    <td>
                      
                    <TextField
                    id="filled-required"
                    label="Designation"
                    placeholder="Academic Staff"
                    style={{ margin: 2}}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                  
                    </td>
                    <td></td>

                </tr>
            </table>
{
          <Checkbox
              name="checkedB"
              color="primary"
            />
          }Active User
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
                    <Button variant="contained" color="primary" style={{ margin: 4}}  >
                      Save Changes
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

MemberDesignation.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default MemberDesignation;
