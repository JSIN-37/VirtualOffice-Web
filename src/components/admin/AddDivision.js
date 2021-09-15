import React, {useState, useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import { Button, MenuItem, FormControl, InputLabel, Select } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { Typography } from "@material-ui/core";

export default function AddDivision() {

  const [division, setDivision] = useState('');
  const [description, setDescription] = useState('');
  const [HODs, setHODs] = useState([]);
  const [HOD, setHOD] = useState('');
  const [permission1, setPermission1] = useState(false);
  const [permission2, setPermission2] = useState(false);
  const [permission3, setPermission3] = useState(false);
  const [permission4, setPermission4] = useState(false);

  useEffect(() => {
    getHODs();
  }, [])

  const getHODs = () => {
    var axios = require('axios');
    axios.get(`${window.backendURL}/admin/get-divisions`) //get the id and name of the employees who has the user role 'HOD' (head of division)
      .then(res => {
        const hods = res.data;
        setHODs(hods);
    })
  };

  const addDivision = () =>{
    var axios = require('axios');
    axios.post(`${window.backendURL}/admin/get-divisions`, { //save changes for the selected division
        divisionName: division,
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

  const handleDivNameChange = (event) => {
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

  let HODList=HODs.map((HOD,index)=>{
    return <MenuItem key={index} value={HOD.id}>{HOD.name}</MenuItem>;
  })

  return (
    <Grid container spacing={4} style={{ paddingTop: '10px', }}>
      <Grid>
        <form>
          <TextField
            className="Text-field"
            id="filled-full-width"
            style={{ margin: 4 }}
            label="Division Name"
            placeholder="External Degrees Centre"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            onChange={handleDivNameChange}
          ></TextField>

          <br />
          <br />

          <FormControl >
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

          <br />
          <br />

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
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
            onChange={handleP1}
          />
          Allow Head of Division to add employees
          </Typography>
          <Typography>
          <Checkbox
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
            onChange={handleP2}
          />
          Allow employees to assign tasks
          </Typography>
          <Typography>
          <Checkbox
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
            onChange={handleP3}
          />
          Allow employees to create teams
          </Typography>
          <Typography>
          <Checkbox
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
            onChange={handleP4}
          />
          Allow Head of Division to review tasks
          </Typography>
        </form>

        <br />
        <Button onClick={addDivision} color="primary" variant="contained">
          Add Division
        </Button>

        <Button color="primary" variant="outlined">
          Cancel
        </Button>
      </Grid>
    </Grid>
  );
}
