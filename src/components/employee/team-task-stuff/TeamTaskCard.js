import React from "react";
import Card from '@material-ui/core/Card';
//import CardHeader from '@material-ui/core/CardHeader';
//import CardContent from '@material-ui/core/CardContent';
import { Typography, Container, Grid } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    body: {
        minWidth: '400px',
        maxWidth: '400px',
        minHeight: '100px',
        maxHeight: '100px',
        overflowY: 'auto'
    },
    card: {
        //background: '#E3E6F5',
        marginBottom: "12px",
        marginLeft: "0",
        padding: "10px 20px"
    },
    icon: {
        fontSize: 40,
        margin: "10px",
    },
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
    },
})

export default function TeamTaskCard({ task }) {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <Card elevation={0} className={classes.card}>
                <Grid container spacing={0}>
                    <Grid item xs={2} >
                        <AssignmentIcon className={classes.icon} color="primary" />
                    </Grid>
                    <Grid item xs={10}>
                        <Typography variant="h6" pb={1}>
                            {task.title}
                        </Typography>
                        <Typography variant="body1" pb={1}>
                            {task.description}
                        </Typography>
                    </Grid>
                </Grid>
            </Card >
            {/*<Card className={classes.card}>
    <CardHeader title={task.team} />
    <CardContent className={classes.title}>
        <Typography>{task.title}</Typography>
    </CardContent>
    <CardContent className={classes.body}>
        <Typography> {task.description}</Typography>
    </CardContent>
    </Card>*/}
        </Container >
    )
}