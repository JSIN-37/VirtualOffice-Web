import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Card } from "@material-ui/core";
import MyAttendanceGraph from "./MyAttendanceGraph";
import MyAttendanceTable from "./MyAttendanceTable";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100%",
    },
    title: {
        color: "#000000",
        textAlign: "left",
        paddingLeft: "20px",
    },
}));

export default function MyAttendance() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={1} justifyContent="center">
                <Grid item xs={12} md={7}>
                    <MyAttendanceGraph />
                </Grid>
                <Grid item xs={12} md={5}>
                    <Card variant="outlined" elevation={1} className={classes.card}>
                        lalaa
                    </Card>
                </Grid>
                <Grid item xs={12} md={11}>
                    <MyAttendanceTable />
                </Grid>
            </Grid>
        </div>
    );
}
