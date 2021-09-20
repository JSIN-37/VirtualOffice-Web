import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import { Card, CardMedia, Typography } from "@material-ui/core"
import present from "./../../resources/atd_present.svg";
import absent from "./../../resources/atd_absent.svg";
import leave from "./../../resources/atd_leave.svg";
import late from "./../../resources/atd_late.svg";

const useStyles = makeStyles((theme) => ({
    card: {
        borderRadius: 10,
        textAlign: "center",
        overflow: "visible",
    },
    media: {
        margin: "10px auto",
        width: 45,
        height: 45,
        position: "relative",
        zIndex: 1,
    },
    text: {
        fontWeight: "500",
    }
}));

const items = [
    {
        icon: present,
        text: "Present:",
        number: "23",
    },
    {
        icon: absent,
        text: "Absent:",
        number: "13",
    },
    {
        icon: leave,
        text: "Leave:",
        number: "1",
    },
    {
        icon: late,
        text: "Late:",
        number: "1",
    },


];

export default function AttendanceHeader(props) {
    const classes = useStyles();
    return (
        <Grid container spacing={2} justifyContent="center" align="center">
            <Grid item md={1}>
            </Grid>
            <Grid item md={10}>
                <Card className={classes.card} elevation={0}>
                    <Grid container spacing={1} justifyContent="center" align="center">
                        {items.map((item) => (
                            <Grid item key={item.text} xs={6} md={3}>
                                <CardMedia className={classes.media} image={item.icon} title="icon" />
                                <Typography variant="body1" color="primary" className={classes.text}>{item.text} {item.number}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Card>
            </Grid>
            <Grid item md={1}>
            </Grid>
            <hr />
        </Grid >
    );
}
