import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import TeamCard from '../components/TeamCard'

export default function Teams() {
    const [teams, setTeams] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/teams')
            .then(res => res.json())
            .then(data => setTeams(data))
    }, [])

    const handleDelete = async (id) => {
        await fetch('http://localhost:8000/teams/' + id, {
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
        </Grid>
    );
}

// <Grid container spacing={1}>
//                 <Grid item xs={12} sm={6} md={4}>
//                     <Card elevation={0}>1
//                     </Card>
//                 </Grid>
//                 <Grid item xs={12} sm={6} md={4}>
//                     <Card elevation={0}>1
//                     </Card>
//                 </Grid>
//                 <Grid item xs={12} sm={6} md={4}>
//                     <Card elevation={0}>1
//                     </Card>
//                 </Grid>
//             </Grid>