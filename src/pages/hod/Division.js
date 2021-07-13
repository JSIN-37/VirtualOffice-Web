import React from 'react'
import Grid from '@material-ui/core/Grid'
import DivisionHeader from '../../components/hod/DivisionHeader'

export default function Division() {
    return (
        <Grid container spacing={4}>
            <DivisionHeader />
            <Grid item xs={12} sm={6} md={4} >
                <p>divsion here</p>
            </Grid>

        </Grid>
    );
}
