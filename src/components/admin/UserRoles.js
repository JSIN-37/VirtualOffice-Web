import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "../../App.css";

import UserRoleCards from './userRoleCard.js';
import { Link } from "react-router-dom";



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

    <Grid container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh' }}>

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems= "flex-start"
        justify="center"
        justifyContent="flex-start"
        style={{ minHeight: '20vh' , spacing:'{10rem}'}}
        
      >
         <h3>
        User Roles
      </h3>
        </Grid>

    <Card style={{ width: '70rem',
                height:'37rem',
                justifyContent: 'center',
                alignContent: 'center',
                padding: '30px',
                border:'1',
        }}   
          >
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
      
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems= "flex-end"
      justify="center"
      justifyContent="flex-end"
      style={{ minHeight: '20vh' }}
    >
    <Button variant="contained" 
            color="primary" 
            className="button-add-user" 
            component={Link}
            to="/add-role"
      >
    + Add New Role
    </Button>
      </Grid>


    </Card>
    </Grid>
    
  );
}


export default UserRoles;