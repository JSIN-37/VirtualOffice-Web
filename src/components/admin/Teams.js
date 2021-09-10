import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";
import TeamCard from './TeamCard.js';
import { Button } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { Tab } from "@material-ui/core";
import { Tabs } from "@material-ui/core";

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
  appbaricon: {
    marginLeft: "240px",
  },
  appbar: {
    background: "#E3E6F5",
    height: 58,
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

export default function Teams() {
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
          <PeopleRoundedIcon
            color="primary"
            className={classes.appbaricon}
            fontSize="medium"
          />
          <Typography variant="h6" className={classes.apptitle} color="primary">
            Teams
          </Typography>
          <Tabs value={value} onChange={handleTabs} classes={{ indicator: classes.indicator }} >
                        <Tab label="Overview" className={classes.tab} />
                        <Tab label="Add Team" className={classes.tab} />
                        <Tab label="View Team" className={classes.tab} />
          </Tabs>




        </Toolbar>
      </AppBar>
      <Grid>
        {/* <h1>Teams details go here</h1> */}
        <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
           <TeamCard/>

            {/* <Paper className={classes.paper}>item</Paper> */}
          </Grid>

          <Grid item xs={4}>
          <TeamCard/>
          </Grid>

          <Grid item xs={4}>
          <TeamCard/>
          </Grid>


          <Grid item xs={4}>
          <TeamCard/>  
          </Grid>

        </Grid> 
      </Grid>
      <br/>
        
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems= "flex-start"
        justify="center"
        justifyContent="flex-start"
        style={{ minHeight: '10vh' }}
      >
      <Button variant="contained" color="primary" className="button-user-role" component={Link}
              to="/add-new-team">
      
      + Add new Team
      </Button>
      </Grid>

      </Grid>
    </Grid>
  );
}
