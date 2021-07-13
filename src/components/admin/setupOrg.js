import React from 'react';
import "../../App.css";
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import OfficeImage from '../../resources/logo_big.png';
import { spacing } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';


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
  
    <Grid item xs={3}>
      <Card style={{ width: '30rem',
            height:'37rem',
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
          Logo   

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
        <small style={{ margin: 2}}>
        As Admin you will be reponsible for the personal data of 
        people in your organization as well as the data 
        managemnet requests they submit to you. <br/>Learn more.
        </small>
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
        alignItems= "flex-end"
        justify="center"
        justifyContent="flex-end"
        style={{ minHeight: '20vh' }}
      >
        <a href='/setUpOrg'>
       <Button variant="contained" color="primary" style={{ margin: 4}}  >
        Set up Organization
        </Button>
        </a>
        </Grid>

      </Card>
    </Grid>      
   </Grid>
  );
}

export default SetupOrg;
