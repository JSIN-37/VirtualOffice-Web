import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Card, Button, Typography } from "@material-ui/core";
import StatusCard from "./StatusCard";
import TodoCard from "./TodoCard";
import DashPieChart from "./DashPieChart";
import CoworkersCard from "./CoworkersCard";
import TimeStamps from "./TimeStamps";
import DashboardHeader from "./DashboardHeader";
import useFetch from "../../hooks/useFetch";
import EmailModule from './email-module/EmailModule'
import FileShare from "./file-sharing-module/FileShare";
import { DocSign } from "./DocSign";
import gdrive from "../../resources/gdrive.png";
import pandadoc from "../../resources/pandadoc.png";
// import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';startIcon={<PersonAddIcon />}

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
    },
    pic: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flexGrow: 1,
    },
}));

export default function Dashboard() {

    const classes = useStyles();
    const [todos, setTodos] = useState([]);
    useFetch(`${window.backendURL}/interim/todos`, setTodos);

    const [emps, setEmps] = useState([]);
    useEffect(() => {
        fetch(`${window.backendURL}/interim/emps`)
            .then((res) => res.json())
            .then((data) => setEmps(data));
    }, []);

    const [isGoogleSignedIn, setIsGoogleSignedIn] = useState((old) => old ? old : false)
    const isGapiLoaded = useRef(false)
    const [auth2Instance, setAuth2Instance] = useState(null)



    // function logRef(){
    //     console.log("isGoogleSignedIn", isGoogleSignedIn)
    //     console.log("auth2Instance", auth2Instance)
    // }

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <DashboardHeader />
                <Grid item xs={12} md={7}>
                    <Card variant="outlined" elevation={1} className={classes.card}>
                        <Typography variant="h6" className={classes.title}>
                            Time
                        </Typography>
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
                        <Grid item xs={12} md={12}>
                            <EmailModule isGoogleSignedIn={isGoogleSignedIn} setIsGoogleSignedIn={setIsGoogleSignedIn} isGapiLoaded={isGapiLoaded} auth2Instance={auth2Instance} setAuth2Instance={setAuth2Instance} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Card variant="outlined" elevation={1} className={classes.card}>
                        <Grid container spacing={3} style={{ marginTop: "5px" }}>
                            <Grid item xs={5} className={classes.container}>
                                <Typography variant="h6" className={classes.title}>
                                    File Sharing
                                </Typography>
                            </Grid>
                            <Grid item xs={1} className={classes.container}>
                                <img src={gdrive} alt="gdrive" className={classes.pic} />
                            </Grid>
                            <Grid item xs={5} className={classes.container}>
                                <FileShare isGoogleSignedIn={isGoogleSignedIn} auth2Instance={auth2Instance} />
                            </Grid>
                        </Grid>
                        <Typography variant="h6" className={classes.title} style={{ marginTop: "20px" }}>
                            Document Signing
                        </Typography>
                        <Grid container spacing={0} justifyContent="center" align="center">
                            <Grid item md={1} className={classes.container} style={{ marginTop: "20px" }}>
                                <img src={pandadoc} alt="pandadoc" className={classes.pic} />
                            </Grid>
                            <Grid item md={9} className={classes.container}>
                                <DocSign />
                            </Grid>
                        </Grid>
                    </Card>
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

                {/* <Grid item> 
                        <Button variant='contained' color='primary' onClick={logRef}>Get Ref Vals</Button>
                </Grid> */}
            </Grid>
        </div>
    );
}
