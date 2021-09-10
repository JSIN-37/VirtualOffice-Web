import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BusinessRoundedIcon from "@material-ui/icons/BusinessRounded";
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Tabs } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";

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
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  appspace: {
    padding: theme.spacing(2),//16px
    fontWeight: 500,
    color: "#E3E6F5"
  },
  tab: {
    color: "#3F51B4",
    textTransform: "none",
    fontSize: "16px",
  },
}));

export default function Organization() {
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
          <BusinessRoundedIcon
            color="primary"
            className={classes.appbaricon}
            fontSize="medium"
          />
          <Typography variant="h6" className={classes.apptitle} color="primary">
            Organization
          </Typography>
          <Tabs value={value} onChange={handleTabs} classes={{ indicator: classes.indicator }} >
                        <Tab label="Overview" className={classes.tab} />
                        <Tab label="Edit Division" className={classes.tab} />
          </Tabs>
        </Toolbar>
      </AppBar>
      <Grid>
        {/* <h1>Organization details go here</h1> */}
        <form>
          <TextField
            className="Text-field"
            id="filled-full-width"
            style={{ margin: 4 }}
            label="System Administrator"
            placeholder="A L Silva"
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
            label="Administrator Email "
            placeholder="Email"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          ></TextField>
        </form>

        <br/>
        <Button color="primary" component={Link}
              to="/divisions">Divisions</Button> <br/>

        <Button color="primary" component={Link}
              to="/teams"> Teams</Button><br/>


        <Button color="primary" component={Link}
              to="/user-roles">User Roles</Button><br/>
        <br/>


        <Button variant="contained" color="primary" component={Link}
              to="/edit-organization-details">
        Edit Details
        </Button>
      </Grid>
    </Grid>
  );
}
