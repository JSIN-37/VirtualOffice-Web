import React from "react";
import Card from "@material-ui/core/Card";
import { useState, useEffect } from "react";

import { AppData } from "../../App.js";

function TeamOverview() {
  const [teams, setTeams] = useState([]);
  const [appD] = React.useContext(AppData);

  useEffect(() => {
    var axios = require("axios");
    const config = { headers: { Authorization: `Bearer ${appD.token}` } };
    axios.get(`${window.backendURL}/admin/teams`, config).then((res) => {
      const teamData = res.data;
      setTeams(teamData);
    });
  }, [appD.token]);

  let teamList = teams.map((team, index) => {
    return (
      <Card variant="outlined" elevation={1} style={{ borderRadius: "10px" }}>
        <h1>{team.name}</h1>
        <p>{team.description}</p>
      </Card>
    );
  });

  return <div>{teamList}</div>;
}

export default TeamOverview;
