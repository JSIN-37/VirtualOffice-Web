import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";
import { Button } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { Tab } from "@material-ui/core";
import { Tabs } from "@material-ui/core";
import TeamOverview from "./TeamOverview";
import AddTeam from "./AddTeam";
import EditTeam from "./EditTeam";

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
indicator: {
  backgroundColor: "#3F51B4",
},
}));

export default function Teams() {
  const classes = useStyles();

    const TabPanel = ({ children, index, value }) => {
    return <>{value === index && <>{children}</>}</>;
  };

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
                        <Tab label="Edit Team" className={classes.tab} />
          </Tabs>

        </Toolbar>
      </AppBar>
      <TabPanel value={value} index={0}>
        <TeamOverview/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AddTeam/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <EditTeam/>
      </TabPanel>

      
    </Grid>
  );
}
