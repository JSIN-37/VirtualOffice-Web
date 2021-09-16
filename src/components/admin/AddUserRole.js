import React, { useState, useEffect } from "react";
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

function AddUserRole() {

  const classes = useStyles();
  const [value, setValue] = useState(0);
    const handleTabs = (e, val) => {
        setValue(val);
    };
  
  const [newRoleName, setNewRoleName] = useState("");
  const [description, setDescription] = useState("");
  const [divPermissions, setDivPermissions] = useState([]);
  const [empPermissions, setEmpPermissions] = useState([]);
  const [taskPermissions, setTaskPermissions] = useState([]);
  const [selectedDivPermissions, setSelectedDivPermissions] = useState([]);
  const [selectedEmpPermissions, setSelectedEmpPermissions] = useState([]);
  const [selectedTaskPermissions, setSelectedTaskPermissions] = useState([]);

  useEffect(() => {
    getDivManagmentPermissions();
    getEmpManagmentPermissions();
    getTaskManagmentPermissions();
  }, [])

  const getDivManagmentPermissions = () => {
    var axios = require('axios');
    axios.get(`${window.backendURL}/admin/get-division-management-permissions`) //get the id and name of all the division managment permissions
      .then(res => {
        const divPermissions = res.data;
        setDivPermissions(divPermissions);
    })
  };
  
  const getEmpManagmentPermissions = () => {
    var axios = require('axios');
    axios.get(`${window.backendURL}/admin/get-employee-management-permissions`) //get the id and name of all the employee managment permissions
      .then(res => {
        const empPermissions = res.data;
        setEmpPermissions(empPermissions);
    })
  };

  const getTaskManagmentPermissions = () => {
    var axios = require('axios');
    axios.get(`${window.backendURL}/admin/get-task-management-permissions`) //get the id and name of all the task managment permissions
      .then(res => {
        const taskPermissions = res.data;
        setTaskPermissions(taskPermissions);
    })
  };
  
  const addNewRole = () =>{
    var axios = require('axios');
    axios.post(`${window.backendURL}/admin/create-role`, { //create new role and add permissions (Division, Employee and Task)
        roleName: newRoleName,
        description: description,
        divPermissionsOn: selectedDivPermissions, //Ids (string) of selected division permissions
        empPermissionsOn: selectedEmpPermissions, //Ids (string) of selected employee permissions
        taskPermissionsOn: selectedTaskPermissions, //Ids (string) of selected task permissions
      })
      .then((res) => {
        let data = res.data;
        console.log(data);
      });
  }

  const handleRoleNameChange = (event) => {
    setNewRoleName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleDivPermissionChange = (event) => {
    let value = event.target.value
    if (event.target.checked){
      if(!selectedDivPermissions.includes(value)) setSelectedDivPermissions([...selectedDivPermissions, value]);
    }else{
      setSelectedDivPermissions(selectedDivPermissions.filter(item => item !== value)) 
    }
  };

  const handleEmpPermissionChange = (event) => {
    let value = event.target.value
    if (event.target.checked){
      if(!selectedEmpPermissions.includes(value)) setSelectedEmpPermissions([...selectedEmpPermissions, value]);
    }else{
      setSelectedEmpPermissions(selectedEmpPermissions.filter(item => item !== value)) 
    }
  };

  const handleTaskPermissionChange = (event) => {
    let value = event.target.value
    if (event.target.checked){
      if(!selectedTaskPermissions.includes(value)) setSelectedTaskPermissions([...selectedTaskPermissions, value]);
    }else{
      setSelectedTaskPermissions(selectedTaskPermissions.filter(item => item !== value)) 
    }
  };

  let divPermissionList=divPermissions.map((permission,index)=>{
    return (
      <>
        <FormControlLabel
            key={"divPermission"+index}
            control={
              <Switch
                key={"divSwitch"+index}
                onChange={handleDivPermissionChange}
                value={permission.id}
                name={"divPermissionSwitch"+index}
                color="primary"
              />
            }
            label={permission.name}
        /><br/>
      </>
    );
  })

  let empPermissionList=empPermissions.map((permission,index)=>{
    return (
      <>
        <FormControlLabel
            key={"empPermission"+index}
            control={
              <Switch
                key={"empSwitch"+index}
                onChange={handleEmpPermissionChange}
                value={permission.id}
                name={"empPermissionSwitch"+index}
                color="primary"
              />
            }
            label={permission.name}
        /><br/>
      </>
    );
  })

  let taskPermissionList=taskPermissions.map((permission,index)=>{
    return (
      <>
        <FormControlLabel
            key={"taskPermission"+index}
            control={
              <Switch
                key={"taskSwitch"+index}
                onChange={handleTaskPermissionChange}
                value={permission.id}
                name={"taskPermissionSwitch"+index}
                color="primary"
              />
            }
            label={permission.name}
        /><br/>
      </>
    );
  })

  return (
    <div className={classes.root2}>
    <Grid container spacing={4} >
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
            onChange={handleRoleNameChange}
          ></TextField>

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
            onChange={handleDescriptionChange}
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
              {divPermissionList}
            </Grid>

            <Grid item xs={4}>    
              <Typography>Employee Management</Typography>
              <br/>
              {empPermissionList}
            </Grid>

            <Grid item xs={4}>
              <Typography>Task Management</Typography>
              <br/>
              {taskPermissionList}
            </Grid>
        </Grid>    
        </Grid>
        <br/>
        <Button color="primary" variant="contained" onClick={addNewRole}>Save Role</Button> 
        
        <Button color="primary" variant="outlined" >Cancel</Button> 
      </Grid>
    </Grid>
    </div>
  );
  
}

export default AddUserRole;