import React from 'react';
import "../../App.css";
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import OfficeImage from './resources/logo_big.png';

import Typography from '@material-ui/core/Typography';


function SetUpEmail() {
  return (
    <div className="App">
     <header className="worker-header">
        <Card className="Card-style-org">
        <img src={OfficeImage} className="VO-logo" alt="logo" />
        <Typography>
        <subtitle1>
        Sign In
        </subtitle1>
        </Typography>
        
          
        
        <div>
        <TextField
          className="Text-field"
          id="filled-full-width"
          placeholder="Email"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />

        <TextField
            className="Text-field"
            id="standard-password-input"
            type="password"
            autoComplete="current-password" 
            placeholder="Password"
            style={{ margin: 15}}
            InputLabelProps={{
                shrink: true,
            }}
            variant="filled"
        />  
    <br/>
    <small
    className="forgot-pswd">
        Forgot password?
    </small>

        <br/>
        <br/>
        <Button variant="contained" color="primary">
        Sign In
        </Button>
        </div>
        <small
    className="forgot-pswd">
        Don't have account?
    </small>

    <br/>

    <Button variant="outlined" color="primary">
        Request Access
      </Button>


        </Card>
      </header>
    </div>
  );
}

export default SetUpEmail;
