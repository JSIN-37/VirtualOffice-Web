import React from 'react'
import { Container, Card, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import AttendanceHeader from '../../components/hod/AttendanceHeader'
import AttendeesGraph from '../../components/hod/AttendeesGraph'

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100%",
    },
    card: {
        margin: theme.spacing(1),
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
        <Container spacing={4}>
            <AttendanceHeader />
            <Card elevation={0} spacing={4}>
                <AttendeesGraph />
            </Card>
            <Typography variant="h6" className={classes.title}>
                Employees
            </Typography>
        </Container>
    );
}
