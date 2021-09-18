import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GroupWorkRoundedIcon from "@material-ui/icons/GroupWorkRounded";
import DivisionsOverview from "./DivisionsOverview.js";
import { Tab } from "@material-ui/core";
import { Tabs } from "@material-ui/core";
import AddDivision from "./AddDivision.js";
import EditDivision from "./EditDivision";

import { AppData } from "../../App";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  apptitle: {
    padding: theme.spacing(2), //16px
    fontWeight: 500,
    textDecoration: "none",
  },
  appbar: {
    background: "#E3E6F5",
    height: 58,
  },
  appbaricon: {
    marginLeft: "240px",
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

export default function Divisions() {
  const classes = useStyles();

  const [appD] = React.useContext(AppData);

  const [value, setValue] = useState(0);
  const handleTabs = (e, val) => {
    setValue(val);
  };

  const TabPanel = ({ children, index, value }) => {
    return <>{value === index && <>{children}</>}</>;
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
          <Tabs
            value={value}
            onChange={handleTabs}
            classes={{ indicator: classes.indicator }}
          >
            <Tab label="Overview" className={classes.tab} />
            <Tab label="Add Division" className={classes.tab} />
            <Tab label="Edit Division" className={classes.tab} />
          </Tabs>
        </Toolbar>
      </AppBar>
      <TabPanel value={value} index={0}>
        <DivisionsOverview appD={appD} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AddDivision appD={appD} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <EditDivision appD={appD} />
      </TabPanel>
    </Grid>
  );
}
