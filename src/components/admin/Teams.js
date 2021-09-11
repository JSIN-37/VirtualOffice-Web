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
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Avatar } from "@material-ui/core";

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

    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
              to="/add-new-team" onClick={handleClickOpen}>
      
      + Add new Team
      </Button>


      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Team Members</DialogTitle>
        <DialogContent>

        <Grid container item lg={12} spacing={3}>
            <Grid item md={4}>
            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Search Employees"
            type="email"
            fullWidth
          />
            </Grid>

            <Grid item md={4} >
            <Button color="primary" variant="contained">
              Add
            </Button>
            </Grid>

            <Grid item md={4} >
              <Avatar alt="Remy Sharp"  fontsize="small"/>
              <Typography variant="body2" >A.T. Pathirana</Typography>
            </Grid>
  
          </Grid>




          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="contained">
            Save
          </Button>
          <Button onClick={handleClose} color="primary" variant="outlined">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      </Grid>

      </Grid>
    </Grid>
  );
}
