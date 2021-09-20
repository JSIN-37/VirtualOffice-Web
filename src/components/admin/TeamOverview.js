import React from "react";
import Card from "@material-ui/core/Card";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppData } from "../../App.js";
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Typography, } from '@material-ui/core';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
    return {
        title: {
            fontSize: "20px",
        },
        info: {
            textAlign: 'left',
            paddingLeft: "10px",
            fontWeight: '400'
        },
    }
})

function TeamOverview() {
    const classes = useStyles();
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
            <>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="baseline">
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8} style={{ margin: "10px 0" }}>
                        <Card variant="outlined" elevation={1} style={{ borderRadius: '10px' }}>
                            <CardHeader style={{ paddingLeft: '25px' }} classes={{ title: classes.title }}
                                title={team.name}
                            />
                            <CardContent style={{ paddingTop: '0' }}>
                                <Typography variant="body1" style={{ fontWeight: "550" }} className={classes.info}>
                                    Team Leader:
                                </Typography>
                                <Typography variant="body1" pb={1} className={classes.info}>
                                    {team.leader_name}
                                </Typography>
                                <Typography variant="body1" style={{ fontWeight: "550", marginTop: "10px" }} className={classes.info}>
                                    Description:
                                </Typography>
                                <Typography variant="body1" pb={1} className={classes.info}>
                                    {team.description}
                                </Typography>

                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
            </>
        );
    });

    return <div>{teamList}</div>;
}

export default TeamOverview;
