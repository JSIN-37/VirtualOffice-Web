import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { TextField } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { Switch } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    boxSizing: "border-box",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%", // Fix IE 11 issue
  },
  field: {
    width: 370,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
  },
  button: {
    margin: "15px 15px 0 0",
  },
}));

function AddUserRole() {
  const classes = useStyles();

  const [newRoleName, setNewRoleName] = useState("");
  const [description, setDescription] = useState("");
  const [divPermissions, setDivPermissions] = useState([]);
  const [empPermissions, setEmpPermissions] = useState([]);
  const [taskPermissions, setTaskPermissions] = useState([]);
  const [selectedDivPermissions, setSelectedDivPermissions] = useState([]);
  const [selectedEmpPermissions, setSelectedEmpPermissions] = useState([]);
  const [selectedTaskPermissions, setSelectedTaskPermissions] = useState([]);

  useEffect(() => {
    // getDivManagmentPermissions();
    // getEmpManagmentPermissions();
    // getTaskManagmentPermissions();
    setDivPermissions([
      "Create & Monitor Teams",
      "Add Employees",
      "Remove Employees",
      "View Division Overview",
    ]);
    setEmpPermissions([
      "View Attendance Reports",
      "Export Attendace Reports",
      "Monitor Peer Employees",
      "Monitor Out-of-Division Employees",
    ]);
    setTaskPermissions([
      "Create Task",
      "Assign Tasks",
      "Monitor Tasks",
      "Extend Deadline",
    ]);
  }, []);

  //   const getDivManagmentPermissions = () => {
  // var axios = require('axios');
  // axios.get(`${window.backendURL}/admin/get-division-management-permissions`) //get the id and name of all the division managment permissions
  //     .then(res => {
  //         const divPermissions = res.data;
  //         setDivPermissions(divPermissions);
  //     })
  //   };

  //   const getEmpManagmentPermissions = () => {
  // var axios = require('axios');
  // axios.get(`${window.backendURL}/admin/get-employee-management-permissions`) //get the id and name of all the employee managment permissions
  //     .then(res => {
  //         const empPermissions = res.data;
  //         setEmpPermissions(empPermissions);
  //     })
  //   };

  //   const getTaskManagmentPermissions = () => {
  // var axios = require('axios');
  // axios.get(`${window.backendURL}/admin/get-task-management-permissions`) //get the id and name of all the task managment permissions
  //     .then(res => {
  //         const taskPermissions = res.data;
  //         setTaskPermissions(taskPermissions);
  //     })
  //   };

  const addNewRole = () => {
    var axios = require("axios");
    axios
      .post(`${window.backendURL}/admin/create-role`, {
        //create new role and add permissions (Division, Employee and Task)
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
  };

  const handleRoleNameChange = (event) => {
    setNewRoleName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleDivPermissionChange = (event) => {
    let value = event.target.value;
    if (event.target.checked) {
      if (!selectedDivPermissions.includes(value))
        setSelectedDivPermissions([...selectedDivPermissions, value]);
    } else {
      setSelectedDivPermissions(
        selectedDivPermissions.filter((item) => item !== value)
      );
    }
  };

  const handleEmpPermissionChange = (event) => {
    let value = event.target.value;
    if (event.target.checked) {
      if (!selectedEmpPermissions.includes(value))
        setSelectedEmpPermissions([...selectedEmpPermissions, value]);
    } else {
      setSelectedEmpPermissions(
        selectedEmpPermissions.filter((item) => item !== value)
      );
    }
  };

  const handleTaskPermissionChange = (event) => {
    let value = event.target.value;
    if (event.target.checked) {
      if (!selectedTaskPermissions.includes(value))
        setSelectedTaskPermissions([...selectedTaskPermissions, value]);
    } else {
      setSelectedTaskPermissions(
        selectedTaskPermissions.filter((item) => item !== value)
      );
    }
  };

  let divPermissionList = divPermissions.map((permission, index) => {
    return (
      <>
        <FormControlLabel
          key={"divPermission" + index}
          control={
            <Switch
              key={"divSwitch" + index}
              onChange={handleDivPermissionChange}
              value={index}
              name={"divPermissionSwitch" + index}
              color="primary"
            />
          }
          label={permission}
        />
        <br />
      </>
    );
  });

  let empPermissionList = empPermissions.map((permission, index) => {
    return (
      <>
        <FormControlLabel
          key={"empPermission" + index}
          control={
            <Switch
              key={"empSwitch" + index}
              onChange={handleEmpPermissionChange}
              value={index}
              name={"empPermissionSwitch" + index}
              color="primary"
            />
          }
          label={permission}
        />
        <br />
      </>
    );
  });

  let taskPermissionList = taskPermissions.map((permission, index) => {
    return (
      <>
        <FormControlLabel
          key={"taskPermission" + index}
          control={
            <Switch
              key={"taskSwitch" + index}
              onChange={handleTaskPermissionChange}
              value={index}
              name={"taskPermissionSwitch" + index}
              color="primary"
            />
          }
          label={permission}
        />
        <br />
      </>
    );
  });

  return (
    <Container className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <form>
            <TextField
              className={classes.field}
              id="filled-full-width"
              label="Role Name"
              placeholder="Worker"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              onChange={handleRoleNameChange}
            />
            <br />
            <TextField
              className={classes.field}
              id="description"
              label="Description"
              multiline
              rows={3}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              onChange={handleDescriptionChange}
            />
            <br />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              }
              label="Default Role"
            />
          </form>
          <br />
          <Typography variant="h6" style={{ fontWeight: "490" }}>
            Permissions
          </Typography>
          <Grid container spacing={0}>
            <Grid container item xs={12} spacing={2}>
              <Grid item xs={4}>
                <Typography>Division Management</Typography>
                <br />
                {divPermissionList}
              </Grid>

              <Grid item xs={4}>
                <Typography>Employee Management</Typography>
                <br />
                {empPermissionList}
              </Grid>

              <Grid item xs={4}>
                <Typography>Task Management</Typography>
                <br />
                {taskPermissionList}
              </Grid>
            </Grid>
          </Grid>
          <br />
          <Button
            color="primary"
            variant="contained"
            className={classes.button}
            onClick={addNewRole}
          >
            Save Role
          </Button>
          <Button color="primary" variant="outlined" className={classes.button}>
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AddUserRole;
