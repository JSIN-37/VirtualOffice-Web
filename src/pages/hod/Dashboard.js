import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Card, Button, Typography } from "@material-ui/core";
import StatusCard from "../../components/StatusCard";
import TodoCard from "../../components/hod/TodoCard";
import DoingCard from "../../components/hod/DoingCard";
import DashPieChart from "../../components/hod/DashPieChart";
import DashBarChart from "../../components/hod/DashBarChart";
import CoworkersCard from "../../components/hod/CoworkersCard";
import TimeStamps from "../../components/hod/TimeStamps";
import DashboardHeader from '../../components/hod/DashboardHeader'

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        boxSizing: "border-box"
    },
    card: {
        padding: theme.spacing(2),
        paddingTop: theme.spacing(2),
        marginBottom: "15px",
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
    title: {
        color: "#000000",
        textAlign: "left",
        paddingLeft: "20px",
        paddingBottom: "10px",
    }
}));

export default function Dashboard() {
    const classes = useStyles();

    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch(`${window.backendURL}/interim/todos`)
            .then((res) => res.json())
            .then((data) => setTodos(data));
    }, []);

    const [doings, setDoings] = useState([]);
    useEffect(() => {
        fetch(`${window.backendURL}/interim/doing`)
            .then((res) => res.json())
            .then((data) => setDoings(data));
    }, []);

    const [emps, setEmps] = useState([]);
    useEffect(() => {
        fetch(`${window.backendURL}/interim/emps`)
            .then((res) => res.json())
            .then((data) => setEmps(data));
    }, []);

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <DashboardHeader />
                <Grid item xs={12} md={7}>
                    <Card variant="outlined" elevation={1} className={classes.card}>
                        <StatusCard />
                    </Card>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Card variant="outlined" elevation={1} className={classes.card}>
                                <Typography variant="h6" className={classes.title}>
                                    Upcoming Tasks
                                </Typography>
                                {todos.map((todo) => (
                                    <Grid item xs={12} md={12} key={todo.id}>
                                        <TodoCard todo={todo} />
                                    </Grid>
                                ))}
                                <Button color="primary" size="small">
                                    View More{" "}
                                </Button>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card variant="outlined" elevation={1} className={classes.card}>
                                <Typography variant="h6" className={classes.title}>
                                    Work Progress
                                </Typography>
                                <DashPieChart />
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Card variant="outlined" elevation={1} className={classes.card}>
                                <Typography variant="h6" className={classes.title}>
                                    Tasks in Progress
                                </Typography>
                                {doings.map((doing) => (
                                    <Grid item xs={12} md={12} key={doing.id}>
                                        <DoingCard doing={doing} />
                                    </Grid>
                                ))}
                                <Button color="primary" size="small">
                                    View More{" "}
                                </Button>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card variant="outlined" elevation={1} className={classes.card} >
                                <Typography variant="h6" className={classes.title}>
                                    My Performance this Week
                                </Typography>
                                <DashBarChart />
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Card variant="outlined" elevation={1} className={classes.card}>
                        <Typography variant="h6" className={classes.title}>
                            My Coworkers
                        </Typography>
                        {emps.map((emp) => (
                            <Grid item xs={12} md={12} key={emp.id}>
                                <CoworkersCard emp={emp} />
                            </Grid>
                        ))}
                    </Card>
                    <Card variant="outlined" elevation={1} className={classes.card}>
                        <Typography variant="h6" className={classes.title}>
                            My Timestamps
                        </Typography>
                        <TimeStamps />
                    </Card>
                </Grid>
            </Grid>
        </div >
    );
}
