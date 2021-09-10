import React from 'react';
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
//import OfficeImage from '../../../resources/logo_big.png';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import { Typography } from '@material-ui/core';
import { useState } from "react";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     Height: "100%",
//     display: "flex",
//   },

//   card: {
//     borderRadius: 30,
//     maxWidth: 440,
//     textAlign: "center",
//     padding: "20px",
//     margin: "120px",
//     boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
//     overflow: "visible",
//   },
//   media: {
//     margin: "10px auto 0",
//     width: "30%",
//     height: 60,
//     position: "relative",
//     zIndex: 1000,
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//     alignItems: "center",
//   },
//   button: {
//     margin: theme.spacing(1),
//   },
//   action: {
//     display: "flex",
//     justifyContent: "space-around",
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
//   grid: {
//     flexGrow: 1,
//   },
// }));


function SetUpOrganization() {

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
        {/* <img src={OfficeImage} className="VO-logo" alt="logo" /> */}
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
          variant="outlined"
          onChange={(e) => setLname(e.target.value)}
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
          onChange={(e) => setOrgname(e.target.value)}
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
            onChange={(e) => setCountry(e.target.value)}
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
          onClick={(e) => {
            // e.preventDefault();
            setUpOrgAttempt(fname, lname, orgname, country);
          }}
          
       >
        Set up Organization
        </Button>
        </Grid>

      </Card>
    </Grid>      
   </Grid>
  );
}

export default SetUpOrganization;
