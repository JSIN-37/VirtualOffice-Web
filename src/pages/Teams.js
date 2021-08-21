import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TeamCard from '../components/TeamCard'
import AddRoundedIcon from '@material-ui/icons/AddRounded';

export default function Teams() {
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
        <Grid container spacing={4}>
            {teams.map(team => (
                <Grid item xs={12} sm={6} md={4} key={team.id}>
                    <TeamCard team={team} handleDelete={handleDelete} />
                </Grid>
            ))}
            <Button variant="contained" color="primary" startIcon={<AddRoundedIcon />}> Add Team </Button>
        </Grid>
    )
}