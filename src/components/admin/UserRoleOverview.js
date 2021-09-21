import React from "react";
import Card from "@material-ui/core/Card";
import { useState, useEffect } from "react";
import { Typography, } from '@material-ui/core';
import { AppData } from "../../App.js";
import { Grid } from '@material-ui/core';

export default function UserRoleOverview() {
  const [roles, setRoles] = useState([]);
  const [appD] = React.useContext(AppData);

  useEffect(() => {
    var axios = require("axios");
    const config = { headers: { Authorization: `Bearer ${appD.token}` } };
    axios.get(`${window.backendURL}/admin/user-roles`, config).then((res) => {
      const teamData = res.data;
      setRoles(teamData);
    });
  }, [appD.token]);

  let teamList = roles.map((team, index) => {
    return (
      <Grid >
      <Card variant="outlined" elevation={1} style={{ borderRadius: "10px" }} style={{ margin: "20px 0" }}>
        <h3>{team.name}</h3>
        <Typography>{team.description}</Typography>
        <Typography>Current employees: {Math.floor(Math.random() * 20)}</Typography>
      </Card>
      </Grid>
    );
  });

  return <div>{teamList}</div>;
}
