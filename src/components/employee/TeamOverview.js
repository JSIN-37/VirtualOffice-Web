import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import TeamCard from "./TeamCard";
import { AppData } from "../../App";
//import TeamTaskCardMini from "./team-task-stuff/TeamTaskCardMini";


export default function TeamOverview({ addTaskTeamVersion, teamTasks }) {
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

        //   axios.get(`${window.backendURL}/interim/teams`, config).then((res) => {
        //     let data = res.data;
        //     setTeams(data);
        //   });

        //   axios.post(`${window.backendURL}/admin/invite_team_members`, { //send a mail
        //     teamId: team,
        //     memberId: memberId,
        // }, config)


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
                        <TeamCard team={team} handleDelete={handleDelete} addTaskTeamVersion={addTaskTeamVersion} />
                    </Grid>
                ))}
            </Grid>

            {/*<Grid container spacing={3} ml={2}>
        {teamTasks.map((task)=>{
          console.log("TEAM TASKS ARR" , task)
          return <TeamTaskCardMini task={task} />
        })}
    </Grid>*/}
        </Container>
    );
}
