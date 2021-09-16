import React from "react";
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
import UserRoleCards from "./UserRoleCard";
import { useState, useEffect } from "react";


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

export default function UserRoleOverview() {
  const classes = useStyles();
  const [userRoles, setUserRoles] = useState([]);

  const [value, setValue] = useState(0);
    const handleTabs = (e, val) => {
        setValue(val);  
    };
        useEffect(() => {
        getUserRoles();
      }, [])

      const getUserRoles = () => {
        var axios = require('axios');
        axios.get(`${window.backendURL}/admin/get-getUserRole`) //get the ids of all the divisions
          .then(res => {
            const userRoleIds = res.data;
            setUserRoles(userRoleIds);
        })
      };

    let userRoleList=userRoles.map((userRole,index)=>{
      return (<Grid key={index} item xs={4}>
                <UserRoleCards userRoleId={userRole} />
              </Grid>)
    })
  return (
        <Grid container spacing={1}>
      <Grid container item xs={12} spacing={3} >
        {userRoleList}
        
      </Grid>
   </Grid>
  );
}
