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
import { Avatar } from '@material-ui/core';

function OrganizationOverview() {

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
    <Grid >
      <Typography variant="overline">
        Organzation Name
      </Typography>
      <br/>
      <Grid container style={{ paddingTop: '10px', }} align="center" justifyContent="center" alignItems="center">
                <Grid item xs={2}>
                    <Avatar alt="Remy Sharp"  />
                </Grid>
                <Grid item xs={10}>
                    <Typography >University of Colombo School of Computing (UCSC)</Typography>
                </Grid>
      </Grid>
      <br/>
      <br/>
      <Typography variant="overline">
        System Administrator
      </Typography>
      <TextField id="filled-basic" label="Eg: A R Perera" variant="filled" />

      <br/>
      <br/>
      <Typography variant="overline">
        Administrator Email
      </Typography>
      {/* <TextField id="filled-basic" label="Eg: arperera" variant="filled" /> */}
      <br/>
      <br/>

      <Button color="primary"  component={Link}
              to="/divisions">Division</Button>
      <br/>

      <Button color="primary"  component={Link}
              to="/teams">Teams</Button>
      <br/>

      <Button color="primary"  component={Link}
              to="/user-roles">User Roles</Button>

      
    </Grid>    
  );
}

export default OrganizationOverview;
