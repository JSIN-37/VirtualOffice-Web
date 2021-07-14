import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import AttendanceHeader from '../../components/hod/AttendanceHeader'
import AttendeesGraph from '../../components/hod/AttendeesGraph'
import AbsenteesGraph from '../../components/hod/AbsenteesGraph'

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    card: {
        padding: theme.spacing(2),
        paddingTop: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
    title: {
        color: "#000000",
        textAlign: "left",
        paddingLeft: "20px",
    }
}));

export default function AttendanceReports() {
    const classes = useStyles();
    return (
        <Grid container spacing={4}>
            <AttendanceHeader />
            <Grid item xs={2} >
                <Card variant="outlined" elevation={1} className={classes.card}>
                    <Typography variant="h5" className={classes.title}>
                        Employees
                    </Typography>

                </Card>

            </Grid>
            <Grid item xs={5} >
                <AttendeesGraph />
            </Grid>
            <Grid item xs={5} >
                <AbsenteesGraph />
            </Grid>
        </Grid>
    );
}
