import React, {useState, useEffect} from "react";
import { Container, Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import AttendeesGraph from "./AttendeesGraph";
import { Grid } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";

const months = [ 
    {
        id: 0,
        value: "January"
    },
    {
        id: 1,
        value: "February"
    },
    {
        id: 2,
        value: "March"
    },
    {
        id: 3,
        value: "April"
    },
    {
        id: 4,
        value: "May"
    },
    {
        id: 5,
        value: "June"
    },

    {
        id: 6,
        value: "July"
    },
    {
        id: 7,
        value: "August"
    },
    {
        id: 8,
        value: "September"
    },
    {
        id: 9,
        value: "November"
    },
    {
        id: 10,
        value: "December"
    }
];

const years = [2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011];

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
    },
}));

export default function AttendanceReports() {
    const classes = useStyles();

    const [month, setMonth] = useState(8);
    const [year, setYear] = useState(2020);

    return (
        <Container spacing={4}>
            <Typography variant="h6" className={classes.title}>
                Monthly Attendance
            </Typography>
            <br/>

            <Grid container direction="row">
            <Grid item style={{ padding: "0 18px 18px" }}>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    style={{width: 300}}
                    defaultValue={2020}
                    options={years}
                    renderInput={(params) => <TextField {...params} label="Year" />}
                    getOptionLabel={(option) => `${option}` }
                    onChange={(e,v) => setYear(v)}
                />
            </Grid>
                <Grid item style={{ padding: "0 18px 18px" }}>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo2"
                    style={{width: 300}}
                    defaultValue={{ id:8, value: "September"}}
                    options={months}
                    renderInput={(params) => <TextField {...params} label="Month" />}
                    getOptionLabel={(option) => option.value }
                    onChange={(e,v) => setMonth(v.id)}
                />
            </Grid>
            <br/><br/>
            </Grid>
            
            <Card elevation={0} spacing={4}>
                <AttendeesGraph month={month} year={year} />
            </Card>
            
        </Container>
    );
}
