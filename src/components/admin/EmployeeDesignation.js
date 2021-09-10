import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import DashboardIcon from "@material-ui/icons/Dashboard";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
  
  return (
    <div className={classes.root}>
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

export default MemberDesignation;
