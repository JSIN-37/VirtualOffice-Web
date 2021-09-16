import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import {  Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function EditUserRole() {
  const classes = useStyles();

  const [editRole, setEditRole] = useState("");
  const [userRoles, setUserRoles] = useState([]);
  const [description, setDescription] = useState("");
  const [divPermissions, setDivPermissions] = useState([]);
  const [empPermissions, setEmpPermissions] = useState([]);
  const [taskPermissions, setTaskPermissions] = useState([]);
  const [roleDivPermissions, setRoleDivPermissions] = useState([]);
  const [roleEmpPermissions, setRoleEmpPermissions] = useState([]);
  const [roleTaskPermissions, setRoleTaskPermissions] = useState([]);

  useEffect(() => {
    getUserRoles();
    getDivManagmentPermissions();
    getEmpManagmentPermissions();
    getTaskManagmentPermissions();
  }, [])

  useEffect(() => {
    updateCurrentDescription();
    updateCurrentDivPermissions();
    updateCurrentEmpPermissions();
    updateCurrentTaskPermissions();
  }, [editRole])

  const getUserRoles = () => {
    var axios = require('axios');
    axios.get(`${window.backendURL}/admin/get-user-roles`) //get the id and name of all the user roles
      .then(res => {
        const userRoleList = res.data;
        setUserRoles(userRoleList);
    })
  };
  
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

  const updateCurrentDivPermissions = () => {
    var axios = require('axios');
    axios.get(`${window.backendURL}/admin/get-role-division-permissions`, { params: { userRoleId: editRole } }) //get an array of ids of currently enabled division managment permissions for the selected role
      .then(res => {
        const curDivPermissions = res.data;
        setRoleDivPermissions(curDivPermissions);
    })
  };
  
  const updateCurrentEmpPermissions = () => {
    var axios = require('axios');
    axios.get(`${window.backendURL}/admin/get-role-employee-permissions`, { params: { userRoleId: editRole } }) //get an array of ids of currently enabled employee managment permissions for the selected role
      .then(res => {
        const curEmpPermissions = res.data;
        setRoleEmpPermissions(curEmpPermissions);
    })
  };

  const updateCurrentTaskPermissions = () => {
    var axios = require('axios');
    axios.get(`${window.backendURL}/admin/get-role-task-permissions`, { params: { userRoleId: editRole } }) //get an array of ids of currently enabled task managment permissions for the selected role
      .then(res => {
        const curTaskPermissions = res.data;
        setRoleTaskPermissions(curTaskPermissions);
    })
  };

  const updateCurrentDescription = () => {
    var axios = require('axios');
    axios.get(`${window.backendURL}/admin/get-role-description`, { params: { userRoleId: editRole } }) //get the current description of the selected role (string)
      .then(res => {
        const curDesription = res.data;
        setDescription(curDesription);
    })
  };

  const saveChanges = () =>{
    var axios = require('axios');
    axios.post(`${window.backendURL}/admin/update-user-role`, { //update user role and permissions (Division, Employee and Task)
        userRoleId: editRole,
        description: description,
        divPermissionsOn: roleDivPermissions, //Ids (string) of selected division permissions
        empPermissionsOn: roleEmpPermissions, //Ids (string) of selected employee permissions
        taskPermissionsOn: roleTaskPermissions, //Ids (string) of selected task permissions
      })
      .then((res) => {
        let data = res.data;
        console.log(data);
      });
  }

  const deleteUserRole = () => {
    var axios = require('axios');
    axios.delete(`${window.backendURL}/admin/delete-user-role/${editRole}`) //delete the user role record in the DB under the given user role Id 
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  const handleUserRoleChange = (event) => {
    setEditRole(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleDivPermissionChange = (event) => {
    let value = event.target.value
    if (event.target.checked){
      if(!roleDivPermissions.includes(value)) setRoleDivPermissions([...roleDivPermissions, value]);
    }else{
      setRoleDivPermissions(roleDivPermissions.filter(item => item !== value)) 
    }
  };

  const handleEmpPermissionChange = (event) => {
    let value = event.target.value
    if (event.target.checked){
      if(!roleEmpPermissions.includes(value)) setRoleEmpPermissions([...roleEmpPermissions, value]);
    }else{
      setRoleEmpPermissions(roleEmpPermissions.filter(item => item !== value)) 
    }
  };

  const handleTaskPermissionChange = (event) => {
    let value = event.target.value
    if (event.target.checked){
      if(!roleTaskPermissions.includes(value)) setRoleTaskPermissions([...roleTaskPermissions, value]);
    }else{
      setRoleTaskPermissions(roleTaskPermissions.filter(item => item !== value)) 
    }
  };

  let userRoleList=userRoles.map((userRole,index)=>{
    return <MenuItem key={"role"+index} value={userRole.id}>{userRole.name}</MenuItem>;
  })

  let divPermissionList=divPermissions.map((permission,index)=>{
    return (
      <>
        <FormControlLabel
            key={"divPermission"+index}
            control={
              <Switch
                key={"divSwitch"+index}
                checked={roleDivPermissions.includes(permission.id)}
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
                checked={roleEmpPermissions.includes(permission.id)}
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
                checked={roleTaskPermissions.includes(permission.id)}
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
    <Grid container spacing={4}>
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

          <FormControl className={classes.formControl}>
            <InputLabel id="user-role-select-label">Select Division</InputLabel>
            <Select
              labelId="user-role-select-label"
              id="user-role-select"
              value={editRole}
              onChange={handleUserRoleChange}
            >
              {userRoleList}
            </Select>
          </FormControl>

          {/* <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Add a Member</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={addTeam}
              onChange={handleChange}
            >
              <MenuItem >A R Perera</MenuItem>
              <MenuItem >U J Uyanhewa </MenuItem>
              <MenuItem >J H S Abeytunger</MenuItem>
            </Select>
          </FormControl>     */}
          <br/>
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
            value={description}
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
        <Button color="primary" variant="contained" onClick={saveChanges} >Save Changes</Button> 
        
        <Button color="primary" variant="outlined" >Cancel</Button> 

        <Button color="secondary" variant="outlined" onClick={deleteUserRole}>Delete User Role</Button> 
      </Grid>
    </Grid>
  );
}

export default EditUserRole;