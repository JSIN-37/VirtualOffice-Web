import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GroupWorkRoundedIcon from "@material-ui/icons/GroupWorkRounded";
import DivisionCard from './DivisionCard.js';
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Tab } from "@material-ui/core";
import { Tabs } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
  },
  apptitle: {
    padding: theme.spacing(2), //16px
    fontWeight: 500,
    textDecoration: "none",
  },
  appspace: {
    padding: theme.spacing(2),//16px
    fontWeight: 500,
    color: "#E3E6F5"
  },
  appbaricon: {
    marginLeft: "240px",
  },
  appbar: {
    background: "#E3E6F5",
    height: 58,
  },
  tab: {
    color: "#3F51B4",
    textTransform: "none",
    fontSize: "16px",
  },
}));

export default function AddDivision() {
  const classes = useStyles();

  const [value, setValue] = useState(0);
    const handleTabs = (e, val) => {
        setValue(val);
    };

  return (
    <Grid container spacing={4}>
      <AppBar
        position="fixed"
        color="primary"
        className={classes.appbar}
        elevation={0}
      >
        <Toolbar>
          <GroupWorkRoundedIcon
            color="primary"
            className={classes.appbaricon}
            fontSize="medium"
          />
          <Typography variant="h6" className={classes.apptitle} color="primary">
            Divisions
          </Typography>
          <Tabs value={value} onChange={handleTabs} classes={{ indicator: classes.indicator }} >
                        <Tab label="Overview" className={classes.tab} />
                        <Tab label="Add Division" className={classes.tab} />
                        <Tab label="Edit Division" className={classes.tab} />
          </Tabs>




        </Toolbar>
      </AppBar>
      <Grid>
        {/* <h1>Divisions details go here</h1> */}
        <form>
          <TextField
            className="Text-field"
            id="filled-full-width"
            style={{ margin: 4 }}
            label="Division Name"
            placeholder="External Degrees Centre "
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
            label="Head of Division "
            placeholder="D.R. Siva"
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
            label="Description"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          ></TextField>

          <br/>
          <br/>
        </form>
               
        <form> 
            Permissions
            <br/>
            <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            Allow Head of Division to add employees
            <br/>
            <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            Allow employees to assign tasks
            <br/>
            <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            Allow employees to create teams
            <br/>
            <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            Allow Head of Division to review tasks
            <br/>

        </form>

        <br/>
        <Button color="primary" variant="contained" >Add Division</Button> 
        
        <Button color="primary" variant="outlined" >Cancel</Button> 
      </Grid>
    </Grid>
  );
}
