import React from 'react'
import Grid from '@material-ui/core/Grid'
import AddTeamForm from '../components/AddTeamForm'

export default function Teams() {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4} >
                <p>Hii add team here</p>
                <AddTeamForm />
            </Grid>

        </Grid>
    );
}