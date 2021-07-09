import React from 'react';
import "../../App.css";
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import OfficeImage from './resources/logo_big.png';


function SetUpEmail() {
  return (
    <div className="App">
     <header >
        <Card className="Card-style">
        <img src={OfficeImage} className="VO-logo" alt="logo" />
        <p>
          Enter an email. <br/>
          This will be used to set up your organization
        </p>
        <div>
        <TextField
          className="Text-field"
          id="filled-full-width"
          style={{ margin: 8 }}
          placeholder="Enter email (Admin)"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <br/>
        <br/>
        <Button variant="contained" color="primary">
        Continue
        </Button>
        </div>




        </Card>
      </header>
    </div>
  );
}

export default SetUpEmail;
