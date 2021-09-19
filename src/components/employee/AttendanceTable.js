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
import { Typography } from "@material-ui/core";
import { AppData } from "../../App";

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

export default function AttendanceTable(props) {
    const classes = useStyles();
    // const rows = props.rows; // Changed props here love <3
    const [appD] = useContext(AppData);
    const [divisionEmployees, setDivisionEmployees] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [employeeRecords, setEmployeeRecords] = useState([]);
    
    useEffect(() => {
        getDivisionEmployees();
    }, [])

    /* useEffect(() => {
        getAttendanceLog();
    }, [selectedDate, selectedEmployee]) */


    //Get attendance report by date and the person
    /* const getAttendanceLog = () => {
        const config = {
            headers: { Authorization: `Bearer ${appD.token}` },
        };
        axios
        .get(`${window.backendURL}/user/hodAttendanceReport`, {
            date: selectedDate,
            empId: selectedEmployee.id
        },
        config)
        .then((res) => {
            let data = res.data;
            console.log(data);
            setEmployeeRecords(data); //data should include check-in time, check-out time, if the person has already done a check-in/check-out today
        })
        .catch (error => {
            console.log(error);
        });
    }; */

    //get employee list if the division that HOD belongs to
    const getDivisionEmployees = () => {
        const config = {
            headers: { Authorization: `Bearer ${appD.token}` },
        };
        axios
        .get(`${window.backendURL}/user/division-users`, config)
        .then((res) => {
            let data = res.data;
            console.log(data);
            setDivisionEmployees(data); //data should include check-in time, check-out time, if the person has already done a check-in/check-out today
        })
        .catch (error => {
            console.log(error);
        });
    }

    function createData(
        id,
        name,
        date,
        startTime,
        endTime,
        attendance,
        leaveType,
        totalHours,
        breakHours,
        netHours,
        status
    ) {
        return {
            id,
            name,
            date,
            startTime,
            endTime,
            attendance,
            leaveType,
            totalHours,
            breakHours,
            netHours,
            status,
        };
    }
    // eslint-disable-next-line
    const [rows, setRows] = React.useState([
        createData(
            "1",
            "D.S. Perera",
            "12/06/2021",
            "9.00 AM",
            "5.00 PM",
            "Present",
            "-",
            "8",
            "1.37",
            "7.23",
            "Available"
        ),
        createData(
            "2",
            "W. P. De Silva",
            "12/06/2021",
            "10.00 AM",
            "5.00 PM",
            "Present",
            "Short Leave",
            "8",
            "1",
            "6",
            "Busy"
        ),
        createData(
            "3",
            "A. L. Pathirana",
            "12/06/2021",
            "9.00 AM",
            "5.00 PM",
            "Present",
            "-",
            "8",
            "1.37",
            "7.23",
            "Available"
        ),
        createData(
            "4",
            "K. H. H. Gamage",
            "12/06/2021",
            "12.00 PM",
            "5.00 PM",
            "Present",
            "Half Day",
            "8",
            "1",
            "4",
            "Busy"
        ),
        createData(
            "5",
            "D.M. Dunuwila",
            "12/06/2021",
            "9.00 AM",
            "5.00 PM",
            "Present",
            "-",
            "8",
            "1.37",
            "7.23",
            "Available"
        ),
        createData(
            "6",
            "S.S. Dias",
            "12/06/2021",
            "-",
            "-",
            "Absent",
            "-",
            "8",
            "0",
            "0",
            "-"
        ),
        createData(
            "7",
            "J.Y. Perera",
            "12/06/2021",
            "9.00 AM",
            "5.00 PM",
            "Present",
            "-",
            "8",
            "1.37",
            "7.23",
            "Available"
        ),
        createData(
            "8",
            "W. P. De Silva",
            "11/06/2021",
            "10.00 AM",
            "5.00 PM",
            "Present",
            "Short Leave",
            "8",
            "1",
            "6",
            "Busy"
        ),
        createData(
            "9",
            "D.M. Dunuwila",
            "11/06/2021",
            "9.00 AM",
            "5.00 PM",
            "Present",
            "-",
            "8",
            "1.37",
            "7.23",
            "Available"
        ),
        createData(
            "10",
            "W. P. De Silva",
            "11/06/2021",
            "10.00 AM",
            "5.00 PM",
            "Present",
            "Short Leave",
            "8",
            "1",
            "6",
            "Available"
        ),
    ]);

    return (
        <>
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
                    onChange={(e,v)=> console.log(v.id)}
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
                                        End Time
                                    </TableCell>
                                    <TableCell className={classes.tableCell} align="left">
                                        Attendance
                                    </TableCell>
                                    <TableCell className={classes.tableCell} align="left">
                                        Leave Type
                                    </TableCell>
                                    <TableCell className={classes.tableCell} align="left">
                                        Total Hours
                                    </TableCell>
                                    <TableCell className={classes.tableCell} align="left">
                                        Break Hour
                                    </TableCell>
                                    <TableCell className={classes.tableCell} align="left">
                                        Net Hours
                                    </TableCell>
                                    <TableCell className={classes.tableCell} align="left">
                                        Status
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
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{row.date}</StyledTableCell>
                                        <StyledTableCell align="left">
                                            {row.startTime}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{row.endTime}</StyledTableCell>
                                        <StyledTableCell align="left">
                                            {row.attendance}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            {row.leaveType}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            {row.totalHours}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            {row.breakHours}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{row.netHours}</StyledTableCell>
                                        <StyledTableCell align="left">{row.status}</StyledTableCell>
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
