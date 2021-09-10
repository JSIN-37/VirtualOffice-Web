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
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";


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

export default function AddUserRole() {
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
        <PersonOutlineRoundedIcon
            color="primary"
            className={classes.appbaricon}
            fontSize="medium"
          />
          <Typography variant="h6" className={classes.apptitle} color="primary">
            UserRoles
          </Typography>
          <Tabs value={value} onChange={handleTabs} classes={{ indicator: classes.indicator }} >
                        <Tab label="User Roles" className={classes.tab} />
                        <Tab label="Add User Roles" className={classes.tab} />
                        <Tab label="Edit User Roles" className={classes.tab} />
                        <Tab label="Assign User Roles" className={classes.tab} />
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
            label="Role Name"
            placeholder="Worker"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          ></TextField>
          <br/>
          <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          
            Deafult Role

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
        </form>
        <Typography>
        Permissions
        </Typography>
        <br/>
        <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
            <Grid item xs={4}>
            <Typography>
            Division Management
            </Typography>
            <br/>
            <FormControlLabel
                control={
                <Switch
                    // checked={state.checkedB}
                    // onChange={handleChange}
                    name="checkedB"
                    color="primary"
                />
                }
                label="Create Division"
            />
            
            <br/>
            <FormControlLabel
                control={
                <Switch
                    // checked={state.checkedB}
                    // onChange={handleChange}
                    name="checkedB"
                    color="primary"
                />
                }
                label="Create Team"
            />
            </Grid>

            <Grid item xs={4}>    
            <Typography>Employee Management</Typography>
            <br/>
            <FormControlLabel
                control={
                <Switch
                    // checked={state.checkedB}
                    // onChange={handleChange}
                    name="checkedB"
                    color="primary"
                />
                }
                label="Mark Attendance"
            />
            <br/>
            <FormControlLabel
                control={
                <Switch
                    // checked={state.checkedB}
                    // onChange={handleChange}
                    name="checkedB"
                    color="primary"
                />
                }
                label="Monitor Attendance"
            />
            <br/>
            <FormControlLabel
                control={
                <Switch
                    // checked={state.checkedB}
                    // onChange={handleChange}
                    name="checkedB"
                    color="primary"
                />
                }
                label="Promote Employees"
            />
            <br/>
            <FormControlLabel
                control={
                <Switch
                    // checked={state.checkedB}
                    // onChange={handleChange}
                    name="checkedB"
                    color="primary"
                />
                }
                label="Transfer Employees"
            />
            <br/>

            {/* <Paper className={classes.paper}>item</Paper> */}
            </Grid>

            <Grid item xs={4}>
            <Typography>Task Management</Typography>
            <FormControlLabel
                control={
                <Switch
                    // checked={state.checkedB}
                    // onChange={handleChange}
                    name="checkedB"
                    color="primary"
                />
                }
                label="Create a Task"
            />
            <br/>
            <FormControlLabel
                control={
                <Switch
                    // checked={state.checkedB}
                    // onChange={handleChange}
                    name="checkedB"
                    color="primary"
                />
                }
                label="Monitor Tasks"
            />
            <br/>
            <FormControlLabel
                control={
                <Switch
                    // checked={state.checkedB}
                    // onChange={handleChange}
                    name="checkedB"
                    color="primary"
                />
                }
                label="Extend Deadline"
            />
            <br/>

            {/* <Paper className={classes.paper}>item</Paper> */}
            </Grid>


        </Grid>    
        </Grid>


        

        <br/>
        <Button color="primary" variant="contained" >Save Role</Button> 
        
        <Button color="primary" variant="outlined" >Cancel</Button> 
      </Grid>
    </Grid>
  );
}
