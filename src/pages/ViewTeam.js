import React from 'react';
import { Grid } from '@material-ui/core';
import TeamDetails from '../components/TeamDetails'

export default function AddTeam() {
    return (
        <Grid container spacing={1}>
            <TeamDetails />
        </Grid>
    )
}
