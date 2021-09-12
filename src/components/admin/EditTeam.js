import React from 'react';
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
//import OfficeImage from '../../../resources/logo_big.png';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import { Typography } from '@material-ui/core';
import { useState } from "react";
import TeamCard from './TeamCard.js';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Avatar } from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  root2: {
    width: "100%",
    boxSizing: "border-box"
},
formControl: {
  margin: theme.spacing(1),
  minWidth: 120,
},
}));



function EditTeam(teamMemberId) {

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
    const [team, setTeam] = React.useState('');
    const [teamMembers, setTeamMembers] = useState([]);

    const handleChange = (event) => {
      setAddTeam(event.target.value);
      setTeam(event.target.value);
    };


    const [open, setOpen] = React.useState(false);

    const getTeamMembers = () => {
      var axios = require('axios');
      axios.get(`${window.backendURL}/admin/get-teamMember`, teamMemberId) //get the team details
        .then(res => {
          const teamMember = res.data;
          setTeamMembers(teamMember.name);
      })
    };

    let MemeberList=teamMembers.map((teamMember,index)=>{
      return (<Typography key={index}>
          {teamMember}
      </Typography>)
    })

  
  return (
    <div className={classes.root2}>
        <Grid container mt="20px">
        <Grid item md={5} lg={5}>
            <Typography>
                Team Name
                <br/>
                <TextField id="filled-basic" label="Eg: Design Team" />
            </Typography>
            <br/>
            <br/>
            <Typography>
                Team Leader
                <br/>
            </Typography>
            <TextField id="filled-basic" label="Eg: A T Perera"  />
            <br/>
            <br/>

            <Typography>
                Description
                <br/>
                <TextField id="filled-basic" label="Desciption"  />
            </Typography>
            
            <br/>
            <br/>

            <Typography>
                Project Tasks
                <br/>
                <AddIcon/>
                <br/>
                <AddIcon/>
                <br/>
                <AddIcon/>
                <br/>
            </Typography>
            
            <br/>
            <Button variant="contained" 
                color="primary" 
            >
               Save Changes
            </Button>

            <Button variant="outlined" 
                color="primary" 
            >
                Cancel
            </Button>
            

        </Grid>

        <Grid item md={5} lg={5}>
        <Typography>
                Team Members
        </Typography>
        <br/>
        {MemeberList}
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
      </FormControl>        
         */}
        </Grid>
      </Grid>
    <br/>
      
    <Grid
    >
    {/* <Button variant="contained" 
            color="primary" 
            className="button-add-user" 
            component={Link}
            to="/add-user-role"
      >
    + Add New Role
    </Button> */}
      </Grid>  
  </div>
  );
}

export default EditTeam;