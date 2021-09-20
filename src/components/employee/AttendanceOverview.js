import React, { useState, useEffect, useContext } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
    DatePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import axios from "axios";
import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import ExportData from "./ExportData";
import { Card, CardMedia, Typography } from "@material-ui/core";
import { Link } from "@material-ui/core";
import present from "./../../resources/atd_present.svg";
import absent from "./../../resources/atd_absent.svg";
import late from "./../../resources/atd_late.svg";
import { AppData } from "../../App";
import Attendance from "./Absentees";

const useStyles = makeStyles({
    table: {
        minWidth: 1150,
    },
    tableRow: {
        height: 38,
    },
    tableCell: {
        paddingTop: "10px",
        paddingBottom: "10px",
        backgroundColor: "#f4f4f4",
        fontSize: 15,
    },
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
});

const StyledTableRow = withStyles((theme) => ({
    root: {
        height: 38,
        "&:nth-of-type(even)": {
            backgroundColor: "#f9f9f9",
        },
    },
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
    root: {
        padding: "0px 18px",
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

export default function AttendanceOverview(props) {
    const classes = useStyles();
    // const rows = props.rows; // Changed props here love <3
    const [appD] = useContext(AppData);
    const [divisionEmployees, setDivisionEmployees] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [rows, setRows] = useState([]);
    const [presentCount, setPresentCount] = useState(0);    
    const [absentCount, setAbsentCount] = useState(0);      
    const [lateCount, setLateCount] = useState(0);

    useEffect(() => {
        getDivisionEmployees();
    }, [])

    useEffect(() => {
        getAttendanceLog();
    }, [selectedDate, selectedEmployee])

    useEffect(() => {
        updateHeaderData();
    }, [rows])


    //Get attendance report by date and the person
    const getAttendanceLog = () => {
        const config = {
            headers: { Authorization: `Bearer ${appD.token}` },
        };
        let date = selectedDate.toISOString().slice(0, 19).replace('T', ' ').split(' ')[0];
        console.log(date);
        let empID =selectedEmployee ? selectedEmployee.id : null;
        axios
        .post(`${window.backendURL}/user/allcheckins`, {
            filterDate: date,
            employeeID: empID
        },
        config)
        .then((res) => {
            let data = res.data;
            setRows(data);
        })
        .catch (error => {
            console.log(appD.token);
            console.log(error.response.data);
            // console.log(error);
        });
    };

    //get employee list if the division that HOD belongs to
    const getDivisionEmployees = () => {
        const config = {
            headers: { Authorization: `Bearer ${appD.token}` },
        };
        axios
        .get(`${window.backendURL}/user/division-users`, config)
        .then((res) => {
            let data = res.data;
            setDivisionEmployees(data); //data should include check-in time, check-out time, if the person has already done a check-in/check-out today
        })
        .catch (error => {
            console.log(error);
        });
    }
    
    //count day statistics    
    const updateHeaderData = () => {
        let presentCount = rows.filter((row) => row.start_time).length;
        let absentCount = rows.filter((row) => !row.start_time).length;
        let lateCount = rows.filter((row) => {
            if (row.start_time){
                let [hrs, mins, secs] = msecsToLocalTime(row.start_time * 1000);
                if (hrs>8){
                    return true
                }
            }
            return false
        }).length;
        setPresentCount(presentCount);
        setAbsentCount(absentCount);
        setLateCount(lateCount);
    }


    //forming time label
    const getTimeString = (sec) => {
        let [hrs, mins, secs] = msecsToLocalTime(sec * 1000);
        let timeLabel = hrs > 11 ? 'PM' : 'AM';
        hrs = hrs > 12 ? hrs - 12 : hrs;
        let timeString = `${hrs.toString().length == 1 ? "0"+hrs : hrs}:${mins} ${timeLabel}`;
        return timeString;
    }

    //converts msecs to hrs, mins, secs
    const msecsToLocalTime = (time) => {
        let dateStamp = new Date(time);
        let timePortion = dateStamp.toString().split(/[ ]+/)[4];
        let timeArray = timePortion.split(':');
        timeArray.map((item)=> parseInt(item, 10));
        return timeArray;
    }

    //forming duration label
    const getDurationString = (sec) => {
        let hrs = Math.floor(sec / 60 / 60);
        sec -= hrs * 60 * 60;
        let mins = Math.floor(sec / 60);
        sec -= mins * 60;
        let duration = `${hrs.toString().length == 1 ? "0"+hrs : hrs}:${mins.toString().length == 1 ? "0"+mins : mins}`;
        return duration;
    }

    return (
        <>
            <Grid container spacing={2} justifyContent="center" align="center">
            <Grid item md={1}>
            </Grid>
            <Grid item md={10}>
                <Card className={classes.card} elevation={0}>
                    <Grid container spacing={1} justifyContent="center" align="center">
                            <Grid item md={4}>
                                <CardMedia className={classes.media} image={present} title="icon" />
                                <Typography variant="body1" color="primary" className={classes.text}>{`Present: ${presentCount}`}</Typography>
                            </Grid>
                            <Grid item md={4}>
                                <CardMedia className={classes.media} image={absent} title="icon" />
                                <Typography variant="body1" color="primary" className={classes.text}>{`Absent: ${absentCount}`}</Typography>
                            </Grid>
                            <Grid item md={4}>
                                <CardMedia className={classes.media} image={late} title="icon" />
                                <Typography variant="body1" color="primary" className={classes.text}>{`Late: ${lateCount}`}</Typography>
                            </Grid>
                    </Grid>
                </Card>
            </Grid>
            <Grid item md={1}>
            </Grid>
            <hr />
            </Grid >
            <Grid container justifyContent="center" align="center" >
                <Grid item style={{ padding: "0 18px 18px" }}>
                <Typography style={{fontWeight: "bold"}}>By Date: </Typography>
                </Grid>
                <Grid item style={{ padding: "18px 18px 18px" }}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                        value={selectedDate}
                        onChange={setSelectedDate}
                    />
                </MuiPickersUtilsProvider>
                </Grid>
                <Grid item style={{ padding: "0 18px 18px" }}>
                <Typography style={{fontWeight: "bold"}}>By Employee: </Typography>
                </Grid>
                <Grid item style={{ padding: "0 18px 18px" }}>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    style={{width: 300}}
                    options={divisionEmployees}
                    renderInput={(params) => <TextField {...params} label="Employee" />}
                    getOptionLabel={(option) => `${option.first_name} ${option.last_name}`}
                    onChange={(e,v) => setSelectedEmployee(v)}
                />
                </Grid>
            </Grid>
                     
            <Grid container justifyContent="center" align="center">
                <Grid item style={{ padding: "0 18px 18px" }}>
                    <TableContainer>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow className={classes.tableRow}>
                                    <TableCell
                                        className={classes.tableCell}
                                        align="left"
                                        style={{ paddingLeft: "30px" }}
                                    >
                                        Name
                                    </TableCell>
                                    <TableCell className={classes.tableCell} align="left">
                                        Date
                                    </TableCell>
                                    <TableCell className={classes.tableCell} align="left">
                                        Start Time
                                    </TableCell>
                                    <TableCell className={classes.tableCell} align="left">
                                        Start Location
                                    </TableCell>
                                    <TableCell className={classes.tableCell} align="left">
                                        End Time
                                    </TableCell>
                                    <TableCell className={classes.tableCell} align="left">
                                        End Location
                                    </TableCell>
                                    <TableCell className={classes.tableCell} align="left">
                                        Attendance
                                    </TableCell>
                                    <TableCell className={classes.tableCell} align="left">
                                        Leave Type
                                    </TableCell>
                                    <TableCell className={classes.tableCell} align="left">
                                        Location Verification
                                    </TableCell>
                                    <TableCell className={classes.tableCell} align="left">
                                        Work Hours
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.id}>
                                        <StyledTableCell
                                            component="th"
                                            scope="row"
                                            style={{ paddingLeft: "30px" }}
                                        >
                                            {`${row.first_name} ${row.last_name}`}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{selectedDate.toISOString().slice(0, 19).replace('T', ' ').split(' ')[0]}</StyledTableCell>
                                        <StyledTableCell align="left">
                                            {row.start_time ? getTimeString(row.start_time) : "-"}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                        {row.start_location ? (
                                            <Link color="primary" href="https://goo.gl/maps/3anHXvA54aS4GXiZ9" target="_blank">
                                                View
                                            </Link>): "-"}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{row.end_time ? getTimeString(row.end_time) : "-"}</StyledTableCell>
                                        <StyledTableCell align="left">
                                            {row.end_location ? row.end_location : "-"}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            {row.start_time ? "Present" : "Absent"}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            {row.full_half == "N" ? "Short Leave" : (row.full_half == "H" ? "Half Day" : "-")}
                                        </StyledTableCell>
                                        {row.location_offset ? 
                                        (<StyledTableCell align="left" style= {{color: 'red'}}>Mismatch</StyledTableCell>)
                                        :(<StyledTableCell align="left" style= {{color: 'green'}}>Success</StyledTableCell>)}
                                        <StyledTableCell align="left">
                                            {row.start_time ? getDurationString(row.end_time - row.start_time) : "-"}
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>

            </Grid>
            <ExportData csvData={rows} fileName={`attendance-report${selectedDate}`} />
        </>
    );
}
