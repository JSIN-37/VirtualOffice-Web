import React from 'react';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import { Typography } from '@material-ui/core';
import { useState } from "react";


function EditOrganization() {

  // const classes = useStyles();
  const [fname, setFname] = useState(``);
  const [lname, setLname] = useState(``);
  const [orgname, setOrgname] = useState(``);
  const [country, setCountry] = useState(``);

  const setUpOrgAttempt = async (fname, lname, orgname, country) => { //add choose file and check box to post
    var axios = require("axios");
    axios
      .post(`${window.backendURL}/setup-organization`, {
        fname: fname,
        lname: lname,
        orgname:orgname,
        country: country,
  })
};


  
  return (
    <Grid
    container
    spacing={0}
    direction="column"
    justify="flex-start"
    style={{ minHeight: '100vh' }}
    >
  
    <Grid item xs={6}>
    
      <Grid
        container
        spacing={0}
        direction="column"
        justify="flex-start"
        style={{ minHeight: '5vh' }}
      >

        <Grid item xs={3}>
        {/* <img src={OfficeImage} className="VO-logo" alt="logo" /> */}
        </Grid>   
      </Grid> 
 
      <br/>

      <Grid container spacing={24}>
       <Grid  item xs={12}>

         
      <Typography variant="overline">
        Edit Administrator Details
      </Typography>
      <br/>
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
          onChange={(e) => setFname(e.target.value)}
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
          onChange={(e) => setLname(e.target.value)}
        />
        </Grid>
        </Grid>
          <br/>
        {/* <TextField
          className="Text-field-org"
          id="filled-full-width"
          label ="Organization"
          style={{ margin: 2}}
          placeholder="Senior Assistant Registrar"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={(e) => setOrgname(e.target.value)}
        /> */}
          <form style={{ margin: 2}}>
          <Typography variant="overline">
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
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setCountry(e.target.value)}
          />

      <br/>
      <br/>
      <small >
        As Admin you will be reponsible for the personal data of 
        people in your organization as well as the data 
        managemnet requests they submit to you. <br/>Learn more.
        </small>
      {/*Hyperlink the LEARN MORE AND TERMS AND SERVICES */}
      <br/>
      <Typography>
      <Checkbox
        defaultChecked
        style={{ margin: 2}}
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      
      I agree to the terms and services
      </Typography>      

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
          onClick={(e) => {
            // e.preventDefault();
            setUpOrgAttempt(fname, lname, orgname, country);
          }}
          
       >
        Set up Organization
        </Button>
        </Grid>
    </Grid>      
   </Grid>
  );
}

export default EditOrganization;