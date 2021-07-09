import React from 'react';
import "../../App.css";
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import OfficeImage from '../../resources/logo_big.png';
import { spacing } from '@material-ui/system';


function SetupOrg() {
  return (
    <div className="App">
     <header className="App-header">
     <Card className="card-org">
        <img src={OfficeImage} className="VO-logo" alt="logo" />
      <br/>
      <TextField
          required
          className="Text-field-org"
          id="filled-required"
          style={{ margin: 4}}
          label="First Name"
          placeholder="D.S."
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <TextField
          required
          id="filled-required"
          label="Last Name"
          placeholder="Perera"
          style={{ margin: 4}}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <TextField
          pl={2}
          className="Text-field-org"
          id="filled-full-width"
          label ="Organization"
          style={{ margin: 4}}
          placeholder="Senior Assistant Registrar"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
          <form>
          <small>
          Logo
          </small>
          <Button 
          variant="contained" 
          style={{ margin: 10}}
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
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br/>
        <small >
        As Admin you will be reponsible for the personal data of <br/>
        people in your organization as well as the data <br/>
        managemnet requests they submit to you. Learn more.
        </small>
      {/*Hyperlink the LEARN MORE AND TERMS AND SERVICES */}
      <br/>
        <Checkbox
        defaultChecked
        style={{ margin: 4}}
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <small >
      I agree to the terms and services
      </small>
        <div>
        <Button variant="contained" color="primary" style={{ margin: 4}}>
        Set up Organization
        </Button>

        </div>
      {/* </form> */}
        </Card>
      </header>
    </div>
  );
}

export default SetupOrg;
