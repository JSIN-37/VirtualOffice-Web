import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "./App.css";

import UserRoleCards from './userRoleCard.js';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      // textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  


function UserRoles() {
  const classes = useStyles();

    return(
      <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
           <UserRoleCards/>

            {/* <Paper className={classes.paper}>item</Paper> */}
          </Grid>

          <Grid item xs={4}>
          <UserRoleCards/>
          </Grid>

          <Grid item xs={4}>
           <UserRoleCards/>
          </Grid>


          <Grid item xs={4}>
          <UserRoleCards/>  
          </Grid>


        </Grid>

        
      </Grid>
      <br/>
      
      <Button variant="contained" color="primary" className="button-user-role">
        + Add new Role
       </Button>
    </div>
  

  );

}


export default UserRoles;