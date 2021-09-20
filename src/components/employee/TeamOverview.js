import React, { useState, useEffect , useRef} from "react";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import TeamCard from "./TeamCard";

import { AppData } from "../../App";
import TeamTaskCard from "./team-task-stuff/TeamTaskCard";

const LOCAL_STORAGE_KEY_TEAMTASKS = 'VO-TEAM-TASKS'

export default function TeamOverview() {
  const [appD] = React.useContext(AppData);
  const [teams, setTeams] = useState([]);
  const isFirstRender = useRef(true)

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${appD.token}` },
    };
    var axios = require("axios");
    axios.get(`${window.backendURL}/interim/teams`, config).then((res) => {
      let data = res.data;
      setTeams(data);
    });

  //   axios.get(`${window.backendURL}/interim/teams`, config).then((res) => {
  //     let data = res.data;
  //     setTeams(data);
  //   });

  //   axios.post(`${window.backendURL}/admin/invite_team_members`, { //send a mail
  //     teamId: team,
  //     memberId: memberId,
  // }, config)


  }, [appD]);

  //set teamTasks to the team tasks saved to local storage
  const [teamTasks, setTeamTasks] = useState(()=>{
    const teamTasksJSON = localStorage.getItem(LOCAL_STORAGE_KEY_TEAMTASKS)
    if(teamTasksJSON === null){
      return []
    }else{
      return JSON.parse(teamTasksJSON)
    }
  })

  function addTaskTeamVersion(task){
    setTeamTasks([...teamTasks, task])
  }

  //write changes to teamTasks to local storage
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY_TEAMTASKS, JSON.stringify(teamTasks))
  }, [teamTasks])

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
            <TeamCard team={team} handleDelete={handleDelete} addTaskTeamVersion={addTaskTeamVersion} />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3} ml={2}>
        {teamTasks.map((task)=>{
          console.log("TEAM TASKS ARR" , task)
          return <TeamTaskCard task={task} />
        })}
      </Grid>
    </Container>
  );
}
