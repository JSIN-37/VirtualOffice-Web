import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";
import { Tab } from "@material-ui/core";
import { Tabs } from "@material-ui/core";
import AddUserRole from "./AddUserRole";
import EditUserRoles from "./EditUserRole";
import UserRoleOverview from "./UserRoleOverview";

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
    padding: theme.spacing(2), //16px
    fontWeight: 500,
    color: "#E3E6F5",
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

export default function UserRoles() {
  const classes = useStyles();

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
          <PersonOutlineRoundedIcon
            color="primary"
            className={classes.appbaricon}
            fontSize="medium"
          />
          <Typography variant="h6" className={classes.apptitle} color="primary">
            UserRoles
          </Typography>
          <Tabs
            value={value}
            onChange={handleTabs}
            classes={{ indicator: classes.indicator }}
          >
            <Tab label="User Roles" className={classes.tab} />
            <Tab label="Add User Role" className={classes.tab} />
            <Tab label="Edit User Role" className={classes.tab} />
          </Tabs>
        </Toolbar>
      </AppBar>
      <TabPanel value={value} index={0}>
        <UserRoleOverview />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AddUserRole />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <EditUserRoles />
      </TabPanel>
      <br />

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        style={{ minHeight: "10vh" }}
      ></Grid>
    </Grid>
  );
}
