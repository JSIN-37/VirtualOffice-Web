import React from 'react'
import Grid from '@material-ui/core/Grid'
import AttendanceHeader from '../../components/hod/AttendanceHeader'
import AttendanceTable from '../../components/hod/AttendanceTable'

export default function Attendance() {
    return (
        <Grid container spacing={4}>
            <AttendanceHeader />
            <Grid item xs={12} >
                <AttendanceTable />
            </Grid>

        </Grid>
    );
}
