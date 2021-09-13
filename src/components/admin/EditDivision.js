import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Button, Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function EditDivision() {
  const classes = useStyles();

  const [divisions, setDivisions] = useState([]);
  const [division, setDivision] = useState('');
  const [description, setDescription] = useState('');
  const [HODs, setHODs] = useState([]);
  const [HOD, setHOD] = useState('');
  const [permission1, setPermission1] = useState(true);
  const [permission2, setPermission2] = useState(true);
  const [permission3, setPermission3] = useState(true);
  const [permission4, setPermission4] = useState(true);
  
  
  useEffect(() => {
    getDivisions();
    getHODs();
  }, [])

  const getDivisions = () => {
    var axios = require('axios');
    axios.get(`${window.backendURL}/admin/get-divisions`) //get the id and names of all the divisions
      .then(res => {
        const divisionSet = res.data;
        setDivisions(divisionSet);
    })
  };

  const getHODs = () => {
    var axios = require('axios');
    axios.get(`${window.backendURL}/admin/get-HODs`) //get the id and name of the employees who has the user role 'HOD' (head of division)
      .then(res => {
        const hods = res.data;
        setHODs(hods);
    })
  };

  const saveChanges = () =>{
    var axios = require('axios');
    axios.post(`${window.backendURL}/admin/edit-division`, { //save changes for the selected division
        divisionId: division,
        hodId: HOD,
        description: description,
        p1: permission1, //true/false
        p2: permission2, //true/false
        p3: permission3, //true/false
        p4: permission4, //true/false
      })
      .then((res) => {
        let data = res.data;
        console.log(data);
      });
  }
  
  const deleteDivision = () => {
    var axios = require('axios');
    axios.delete(`${window.backendURL}/admin/delete-division/${division}`) //delete the division record in the DB under the given division Id 
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  const handleDivisionChange = (event) => {
    setDivision(event.target.value);
  };

  const handleHODChange = (event) => {
    setHOD(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleP1 = (event) => {
    setPermission1(event.target.checked);
  }
  const handleP2 = (event) => {
    setPermission2(event.target.checked);
  }
  const handleP3 = (event) => {
    setPermission3(event.target.checked);
  }
  const handleP4 = (event) => {
    setPermission4(event.target.checked);
  }

  let divisionList=divisions.map((division,index)=>{
    return <MenuItem key={"div"+index} value={division.id}>{division.name}</MenuItem>;
  })

  let HODList=HODs.map((HOD,index)=>{
    return <MenuItem key={"hod"+index} value={HOD.id}>{HOD.name}</MenuItem>;
  })

  return (
    <Grid container spacing={4}>
      <Grid>
      <FormControl className={classes.formControl}>
        <InputLabel id="division-select-label">Select Division</InputLabel>
        <Select
          labelId="division-select-label"
          id="division-select"
          value=""
          onChange={handleDivisionChange}
        >
          {divisionList}
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="HOD-select-label">Select the Head of Division</InputLabel>
        <Select
          labelId="HOD-select-label"
          id="HOD-select"
          value=""
          onChange={handleHODChange}
        >
          {HODList}
        </Select>
      </FormControl>

        <form>
          {/* <TextField
            className="Text-field"
            id="filled-full-width"
            style={{ margin: 4 }}
            label="Division Name"
            placeholder="External Degrees Centre "
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          ></TextField>

          <br />
          <br />
            *
          <TextField
            className="Text-field"
            id="filled-full-width"
            style={{ margin: 4 }}
            label="Head of Division "
            placeholder="D.R. Siva"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          ></TextField>

          <br />
          <br />*/}

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

          <br />
          <br />
        </form>

        <form>
          <Typography>
          Permissions
          </Typography>
          <br />
          <Typography>
          <Checkbox
            defaultChecked
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
            onChange={handleP1}
          />
          Allow Head of Division to add employees
          </Typography>
          <Typography>
          <Checkbox
            defaultChecked
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
            onChange={handleP2}
          />
          Allow employees to assign tasks
          </Typography>
          <Typography>
          <Checkbox
            defaultChecked
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
            onChange={handleP3}
          />
          Allow employees to create teams
          </Typography>
          <Typography>
          <Checkbox
            defaultChecked
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
            onChange={handleP4}
          />
          Allow Head of Division to review tasks
          </Typography>
        </form>

        <br />
        <Button onClick={saveChanges} color="primary" variant="contained">
          Save Changes
        </Button>

        <Button color="primary" variant="outlined">
          Cancel
        </Button>
        <Button onClick={deleteDivision} color="secondary" variant="outlined" >
          Delete Division
        </Button>

      </Grid>
    </Grid>
  );
}
