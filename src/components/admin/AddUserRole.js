import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { TextField } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { Switch } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
  },
  root2: {
    width: "100%",
    boxSizing: "border-box"
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
}));

export default function AddUserRole(userRoleId) {

  const classes = useStyles();
  const [value, setValue] = useState(0);
    const handleTabs = (e, val) => {
        setValue(val);
    };

    const [addTeam, setAddTeam] = React.useState('');
    const [userRoles, setUserRole] = React.useState([]);

    const handleChange = (event) => {
      setAddTeam(event.target.value);
      setUserRole(event.target.value);
    };

    const getUserRoles = () => {
      var axios = require('axios');
      axios.get(`${window.backendURL}/admin/get-userRoles`, userRoleId) //get the team details
        .then(res => {
          const userRole = res.data;
          setUserRole(userRole.name);
      })
    };

    let UserRoleList=userRoles.map((userRole,index)=>{
      return (<Typography key={index}>
          {userRole}
      </Typography>)
    })


  return (
    <div className={classes.root2}>
    <Grid container spacing={4} >
      <Grid>
        {/* <h1>Divisions details go here</h1> */}
        <form>
          {/* <TextField
            className="Text-field"
            id="filled-full-width"
            style={{ margin: 4 }}
            label="Role Name"
            placeholder="Worker"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          ></TextField> */}
          <Typography>
                Role Name
        </Typography>

          {UserRoleList}

        {/* <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Select the Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={addTeam}
              onChange={handleChange}
            >
              <MenuItem >Role 1</MenuItem>
              <MenuItem >Role 2 </MenuItem>
              <MenuItem >Role 3</MenuItem>
            </Select>
          </FormControl>  */}
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
    </div>
  );
  
}
