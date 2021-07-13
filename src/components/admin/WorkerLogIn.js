import React from 'react';
import "../../App.css";
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import OfficeImage from '../../resources/logo_big.png';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';


function WorkerLogin() {
  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: '50vh' }}
    >
  
    <Grid item xs={6}>
      <Card style={{ width: '30rem',
            textAlign: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            padding: '30px',
            border:'1',
            borderColor: 'text.primary'
    }}
      
      >
         <img src={OfficeImage} className="VO-logo" alt="logo" />

<Grid
        container
        spacing={0}
        direction="column"
        alignItems= "flex-start"
        justify="center"
        justifyContent="flex-start"
        style={{ minHeight: '10vh' }}
      >
      <h3>
      Sign In
      </h3>
        </Grid>

       <TextField
          className="Text-field"
          id="outlined-required"
          label="Email"
          style={{ margin:1 }}
          placeholder="Enter email "
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
         <br/>
         <br/>
        <TextField
          className="Text-field"
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br/>
        <br/>
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems= "flex-end"
            justify="center"
            justifyContent="flex-end"
          >

              <small
                className="forgot-pswd">
                    Forgot password?
                </small>
                    
          </Grid>

        <Button size="small" variant="contained" color="primary">
        Sign In
        </Button>
        <br/>

        <Grid
            container
            spacing={0}
            direction="column"
            alignItems= "flex-start"
            justify="center"
            justifyContent="flex-start"
          >

           <p
                className="forgot-pswd">
                Don't have account?
            </p>
                    
          </Grid>


          <Button size="small" variant="outlined" color="primary">
          Request Access
        </Button>
      </Card>
    </Grid>      
   </Grid>



  );
}

export default WorkerLogin;
