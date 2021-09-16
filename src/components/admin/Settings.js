import React from "react";
import Grid from "@material-ui/core/Grid";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  apptitle: {
    padding: theme.spacing(2), //16px
    fontWeight: 500,
    textDecoration: "none",
  },
  appbaricon: {
    marginLeft: "240px",
  },
  appbar: {
    background: "#E3E6F5",
    height: 58,
  },
}));

export default function Settings() {
  const classes = useStyles();

  return (
    <Grid container spacing={4}>
      <AppBar
        position="fixed"
        color="primary"
        className={classes.appbar}
        elevation={0}
      >
        <Toolbar>
          <SettingsRoundedIcon
            color="primary"
            className={classes.appbaricon}
            fontSize="medium"
          />
          <Typography variant="h6" className={classes.apptitle} color="primary">
            Settings
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid>
        {/* <h1>Settings details go here</h1> */}
        <form>
          <TextField
            className="Text-field"
            id="filled-full-width"
            style={{ margin: 4 }}
            label="First Name"
            placeholder="A R"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          ></TextField>

        <TextField
            className="Text-field"
            id="filled-full-width"
            style={{ margin: 4 }}
            label="Last Name "
            placeholder="Perera"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          ></TextField>

          <br/>
          <br/>

        <TextField
            className="Text-field"
            id="filled-full-width"
            style={{ margin: 4 }}
            label="Profile Picture "
            InputLabelProps={{
              shrink: true,
            }}
          ></TextField>

          <br/>
          <br/>

          <TextField
            className="Text-field"
            id="filled-full-width"
            style={{ margin: 4 }}
            label="Contact Number "
            placeholder="Eg: +94 123 456 789"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          ></TextField>

          <br/>
          <br/>

          <TextField
            className="Text-field"
            id="filled-full-width"
            style={{ margin: 4 }}
            label="Email Address "
            placeholder="arperera@gmail.com"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          ></TextField>

          <br/>
          <br/>

          <TextField
            className="Text-field"
            id="filled-full-width"
            style={{ margin: 4 }}
            label="Password"
            type="Password"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          ></TextField>

          <br/>
          <br/>

          <TextField
            className="Text-field"
            id="filled-full-width"
            style={{ margin: 4 }}
            label="Confirm Password"
            type="Password"
            placeholder="Re-enter password"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          ></TextField>

          <br/>
          <br/>

          <TextField
            className="Text-field"
            id="filled-full-width"
            style={{ margin: 4 }}
            label="Designation "
            placeholder="Management Assistant"
            InputLabelProps={{
              shrink: true,
            }}
          ></TextField>

        </form>

        <br/>
        <Button color="primary" variant="contained" >Save Changes</Button> 
        
        <Button color="primary" variant="outlined" >Cancel</Button> 

      </Grid>
    </Grid>
  );
}
