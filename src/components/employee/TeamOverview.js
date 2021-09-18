import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import TeamCard from "./TeamCard";

import { AppData } from "../../App";

export default function TeamOverview() {
  const [appD] = React.useContext(AppData);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${appD.token}` },
    };
    var axios = require("axios");
    axios.get(`${window.backendURL}/interim/teams`, config).then((res) => {
      let data = res.data;
      setTeams(data);
    });
  }, [appD]);

  const handleDelete = async (id) => {
    const config = {
      headers: { Authorization: `Bearer ${appD.token}` },
    };
    var axios = require("axios");
    await axios.delete(`${window.backendURL}/interim/teams/${id}`, config);

    const newTeams = teams.filter((team) => team.id !== id);
    setTeams(newTeams);
  };
  return (
    <Container>
      <Grid container spacing={3} ml={2}>
        {teams.map((team) => (
          <Grid item xs={12} sm={6} md={4} key={team.id}>
            <TeamCard team={team} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
