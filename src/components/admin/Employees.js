import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GroupRoundedIcon from "@material-ui/icons/GroupRounded";
import EmployeeCard from "./EmployeeCard";
import { Button } from "@material-ui/core";
import { Link } from "@material-ui/core";
import EmployeeTable from "./EmployeeTable";
import { TabPanel } from "@material-ui/lab";



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

export default function Employees() {
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
          <GroupRoundedIcon
            color="primary"
            className={classes.appbaricon}
            fontSize="medium"
          />
          <Typography variant="h6" className={classes.apptitle} color="primary">
            Employees
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid>
        {/* <h1>Employees details go here</h1> */}
        <EmployeeTable/>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="flex-start"
          justify="center"
          justifyContent="flex-start"
          style={{ minHeight: "20vh" }}
        >
        
          <Button
            variant="contained"
            component={Link}
            to="/invite-employees"
            color="primary"
            style={{ margin: 4 }}
          >
            Invite Employees
          </Button>
          





        </Grid>
      </Grid>
    </Grid>
  );
}
