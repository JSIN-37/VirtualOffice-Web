import React from "react";
import Card from "@material-ui/core/Card";
import { useState, useEffect } from "react";

import { AppData } from "../../App.js";

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
      <Card variant="outlined" elevation={1} style={{ borderRadius: "10px" }}>
        <h1>{team.name}</h1>
        <p>{team.description}</p>
        <p>Current employees: {Math.floor(Math.random() * 20)}</p>
      </Card>
    );
  });

  return <div>{teamList}</div>;
}
