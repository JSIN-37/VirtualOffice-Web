import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Card, Button, Typography } from "@material-ui/core";
import StatusCard from "./StatusCard";
import TodoCard from "./TodoCard";
import DoingCard from "./DoingCard";
import DashPieChart from "./DashPieChart";
import DashBarChart from "./DashBarChart";
import CoworkersCard from "./CoworkersCard";
import TimeStamps from "./TimeStamps";
import DashboardHeader from "./DashboardHeader";
import useFetch from "../../hooks/useFetch";
import EmailModule from './email-module/EmailModule'

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        boxSizing: "border-box",
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
    },
}));

export default function Dashboard() {
    const classes = useStyles();
    const [todos, setTodos] = useState([]);
    useFetch(`${window.backendURL}/interim/todos`, setTodos);

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
                        {window.gapi && <EmailModule/>}
                        {!window.gapi && <Typography>Loading Emails</Typography>}
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card variant="outlined" elevation={1} className={classes.card}>
                                <Typography variant="h6" className={classes.title}>
                                    My Weekly Performance
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
        </div>
    );
}
