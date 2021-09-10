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
import AddDivision from "./AddDivision.js";
import EditDivision from "./EditDivision";
import { TabPanel } from "@material-ui/lab";



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

export default function Divisions() {
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
      {/* <TabPanel value={value} index={0}>
            <AddDivision />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <EditDivision />
            </TabPanel> */}
      <Grid>
        {/* <h1>Divisions details go here</h1> */}
        <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}>



      <Grid
        container
        spacing={0}
        direction="column"
        alignItems= "flex-start"
        justify="center"
        justifyContent="flex-start"
        style={{ minHeight: '0vh' , spacing:'{10rem}'}}
        
      >
        </Grid>

        <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
           <DivisionCard/>
          </Grid>

          <Grid item xs={4}>
          <DivisionCard/>
          </Grid>

          <Grid item xs={4}>
           <DivisionCard/>
          </Grid>


          <Grid item xs={4}>
          <DivisionCard/>  
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
        style={{ minHeight: '20vh' }}
      >
      <Button variant="contained" color="primary" className="button-user-role" component={Link}
              to="/add-new-division">
      + Add new Division
      </Button>


        </Grid>
      </Grid>
      </main>
      </Grid>
    </Grid>
  );
}
