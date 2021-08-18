import React from 'react'
import Grid from '@material-ui/core/Grid'
import TeamHeader from '../../components/TeamHeader'
import AddTeamForm from '../../components/AddTeamForm'

export default function Teams() {
    return (
        <Grid container spacing={4}>
            <TeamHeader />
            <Grid item xs={12} sm={6} md={4} >
                <p>Hii add team here</p>
                <AddTeamForm />
            </Grid>

        </Grid>
    );
}