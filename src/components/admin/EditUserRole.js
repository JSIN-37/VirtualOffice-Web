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
import AddIcon from '@material-ui/icons/Add';
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

export default function EditUserRole(memberId) {
  const classes = useStyles();
  const [fname, setFname] = useState(``);
  const [lname, setLname] = useState(``);
  const [orgname, setOrgname] = useState(``);
  const [country, setCountry] = useState(``);

  const [value, setValue] = useState(0);
    const handleTabs = (e, val) => {
        setValue(val);
    };

    const [addTeam, setAddTeam] = React.useState('');
    const [member, setMember] = React.useState([]);

    const handleChange = (event) => {
      setAddTeam(event.target.value);
      setMember(event.target.value);
    };

    const getMember = () => {
      var axios = require('axios');
      axios.get(`${window.backendURL}/admin/get-member`, memberId) //get the team details
        .then(res => {
          const Member = res.data;
          setMember(Member.name);
      })
    };

    let MemberList=member.map((Member,index)=>{
      return (<Typography key={index}>
          {Member}
      </Typography>)
    })



    const [open, setOpen] = React.useState(false);

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

          <Typography>
            Add a Member
            {MemberList}
          </Typography>


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

        <Button color="secondary" variant="outlined" >Delete Usser Role</Button> 
      </Grid>
    </Grid>
  );
}
