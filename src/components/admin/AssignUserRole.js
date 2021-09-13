import React from 'react';
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { useState } from "react";
import {TextField} from '@material-ui/core';
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

    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

function AssignUserRole(memberId) {

  const classes = useStyles();
  
  const [member, setMember] = React.useState([]);

  const [value, setValue] = useState(0);
    const handleTabs = (e, val) => {
        setValue(val);
    };

    const [addTeam, setAddTeam] = React.useState('');

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

  const setUpOrgAttempt = async (fname, lname, orgname, country) => { //add choose file and check box to post
    var axios = require("axios");
    axios
      .post(`${window.backendURL}/setup-organization`, {
        fname: fname,
        lname: lname,
        orgname:orgname,
        country: country,
  })
};

  
  return (
    <Grid>
        {/* <h1>UserRoles details go here</h1> */}
      <Grid container item lg={12} spacing={6}>
        <Grid item lg={6}>
            {/* <Typography>
                First Name
            </Typography>
            <TextField id="filled-basic" label="Eg: A R "  />
            <br/>
            <br/>
            <Typography>
                Last Name
            </Typography>
            <TextField id="filled-basic" label="Perera" />
            <br/>
            <br/>
            <Typography>
                Email Address
            </Typography>
            <TextField id="filled-basic" label="Eg:aarperera@gmail.com" /> */}

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
          </FormControl>  */}
            <br/>
            <br/>
            <Typography>
                Designation
            </Typography>
            <TextField id="filled-basic" label="Director" />
            <br/>
            <br/>
            
            <Button variant="contained" 
                color="primary" 
            >
                Save Member
            </Button>

            <Button variant="outlined" 
                color="primary" 
            >
                Cancel
            </Button>
            

        </Grid>

        <Grid item lg={6}>
        <Typography>
                Role
        </Typography>
        <Typography>
          <Checkbox
            defaultChecked
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          Director
          </Typography>
          <br />
          <Typography>
          <Checkbox
            defaultChecked
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          HOD - Head of Division
          </Typography>
          <br />
          <Typography>
          <Checkbox
            defaultChecked
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          SR - Senior Registrar
          </Typography>
          <br />
          <Typography>
          <Checkbox
            defaultChecked
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          SAR - Senior Ast. Registrar
          </Typography>
          <br />
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
      </Grid>
  );
}

export default AssignUserRole;