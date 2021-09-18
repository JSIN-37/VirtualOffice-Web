import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { Container } from '@material-ui/core';
import TeamCard from './TeamCard'

export default function TeamOverview() {
    const [teams, setTeams] = useState([])
    useEffect(() => {
        fetch(`${window.backendURL}/interim/teams`)
            .then(res => res.json())
            .then(data => { setTeams(data) })
    }, [])

    const handleDelete = async (id) => {
        await fetch(`${window.backendURL}/interim/teams/` + id, {
            method: 'DELETE'
        })

        const newTeams = teams.filter(team => team.id !== id)
        setTeams(newTeams)
    }
    return (
        <Container>
            <Grid container spacing={3} ml={2}>
                {
                    teams.map(team => (
                        <Grid item xs={12} sm={6} md={4} key={team.id}>
                            <TeamCard team={team} handleDelete={handleDelete} />
                        </Grid>
                    ))
                }

            </Grid >
        </Container>
    )
}