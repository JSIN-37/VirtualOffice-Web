import React from 'react';
import "../../App.css";
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import OfficeImage from '../../resources/logo_big.png';
import { spacing } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import { Typography } from '@material-ui/core';
import DashboardIcon from "@material-ui/icons/Dashboard";


function SetupOrg() {
  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh' }}
    >
  
    <Grid item xs={6}>
      <Card             
            style={{ width: '40rem',
            borderRadius:'2rem',
            height:'40rem',
            justifyContent: 'center',
            alignContent: 'center',
            padding: '30px',
            border:'1',
    }}   
      >
      
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '20vh' }}
      >

        <Grid item xs={3}>
        <img src={OfficeImage} className="VO-logo" alt="logo" />
        </Grid>   
      </Grid> 
 
      <br/>

      <Grid container spacing={24}>
       <Grid  item xs={12}>
    
      <TextField
          required
          className="Text-field-org"
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
          placeholder="Perera"
          style={{ margin: 2}}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        </Grid>
        </Grid>
          <br/>
        <TextField
          className="Text-field-org"
          id="filled-full-width"
          label ="Organization"
          style={{ margin: 2}}
          placeholder="Senior Assistant Registrar"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <br/>
        <br/>
          <form style={{ margin: 2}}>
          <Typography>
          Logo
          </Typography>
             

          <Button 
          size="small"
          variant="contained" 
          style={{ margin:2}}
          >
            Choose File
          </Button>
          </form>

          <br/>
          <TextField
            className="Text-field"
            style={{ margin: 4}}
            id="filled-required"
            label="Country/Region"
            placeholder="Country/Region"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />

      <br/>
      <br/>
        <Typography style={{ margin: 2}}>
        As Admin you will be reponsible for the personal data of 
        people in your organization as well as the data 
        managemnet requests they submit to you. <br/>Learn more.
        </Typography>
      {/*Hyperlink the LEARN MORE AND TERMS AND SERVICES */}
      <br/>
      <Checkbox
        defaultChecked
        style={{ margin: 2}}
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <small >
      I agree to the terms and services
      </small>

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems= "center"
        justify="center"
        justifyContent="center"
        style={{ minHeight: '20vh' }}
      >

       <Button 
          variant="contained" 
          component={Link}
          to="/organization"
          color="primary" 

          style={{ margin: 4}}  
       >
        Set up Organization
        </Button>
        </Grid>

      </Card>
    </Grid>      
   </Grid>
  );
}

export default SetupOrg;
