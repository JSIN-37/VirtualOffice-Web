import React from 'react';
import { Grid } from '@material-ui/core';
import TeamHeader from '../components/TeamHeader'
import TeamDetails from '../components/TeamDetails'

export default function AddTeam() {
    return (
        <Grid container spacing={1}>
            <TeamHeader />
            <TeamDetails />
        </Grid>
    )
}
