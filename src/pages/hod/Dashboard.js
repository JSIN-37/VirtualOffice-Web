import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Card, Button, Typography } from '@material-ui/core'
import StatusCard from '../../components/StatusCard'
import TodoCard from '../../components/hod/TodoCard'
import DoingCard from '../../components/hod/DoingCard'
import DashPieChart from '../../components/hod/DashPieChart'
import DashBarChart from '../../components/hod/DashBarChart'
import TimeStamps from '../../components/hod/TimeStamps'


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
    card: {
        padding: theme.spacing(2),
        paddingTop: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    title: {
        color: '#000000',
        textAlign: 'left',
        paddingLeft: '20px'
    }
}));

export default function Dashboard() {
    const classes = useStyles();

    const [todos, setTodos] = useState([])
    const [doings, setDoings] = useState([])

    useEffect(() => {
        fetch('http://localhost:8001/todos')
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:8002/doing')
            .then(res => res.json())
            .then(data => setDoings(data))
    }, [])

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={7}>
                    <StatusCard />
                    <br />
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Card variant="outlined" elevation={1} className={classes.card}>
                                <Typography variant="h5" className={classes.title}>Upcoming Tasks</Typography><br />
                                {todos.map(todo => (
                                    <Grid item xs={12} md={12} key={todo.id}>
                                        <TodoCard todo={todo} />
                                    </Grid>
                                ))}
                                <Button color="primary" size="small">View More </Button>
                            </Card>
                            <br />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card variant="outlined" elevation={1} className={classes.card}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={5}>
                                        <Typography variant="h5" className={classes.title}>Work Progress</Typography><br />
                                    </Grid>
                                    <Grid item xs={12} md={7}>
                                        <DashPieChart />
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Card variant="outlined" elevation={1} className={classes.card}>
                        <Typography variant="h5" className={classes.title}>My Coworkers</Typography><br />

                    </Card>
                    <br />
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12} md={7}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6} alignItems="stretch">
                            <Card variant="outlined" elevation={1} className={classes.card}>
                                <Typography variant="h5" className={classes.title}>Tasks in Progress</Typography><br />
                                {doings.map(doing => (
                                    <Grid item xs={12} md={12} key={doing.id}>
                                        <DoingCard doing={doing} />
                                    </Grid>
                                ))}
                                <Button color="primary" size="small">View More </Button>
                            </Card>
                            <br />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card variant="outlined" elevation={1} className={classes.card}>
                                <Typography variant="h5" className={classes.title}>My Performance this Week</Typography><br />
                                <DashBarChart />
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12}>
                            <Card variant="outlined" elevation={1} className={classes.card}>
                                <Typography variant="h5" className={classes.title}>My Timestamps</Typography><br />
                                <TimeStamps />
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}