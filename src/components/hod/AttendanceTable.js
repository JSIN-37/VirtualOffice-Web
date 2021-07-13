import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#f4f4f4'
    },
    body: {
        fontSize: 16,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: '#f9f9f9',
        },
    },
}))(TableRow);

function createData(id, name, date, startTime, endTime, attendance, leaveType, totalHours, breakHours, netHours, status) {
    return { id, name, date, startTime, endTime, attendance, leaveType, totalHours, breakHours, netHours, status };
}

const rows = [
    createData('1', 'D.S. Perera', '12/06/2021', '9.00 AM', '5.00 PM', 'Present', '-', '8', '1.37', '7.23', 'Available'),
    createData('2', 'W. P. De Silva', '12/06/2021', '10.00 AM', '5.00 PM', 'Present', 'Short Leave', '8', '1', '6', 'Busy'),
    createData('3', 'A. L. Pathirana', '12/06/2021', '9.00 AM', '5.00 PM', 'Present', '-', '8', '1.37', '7.23', 'Available'),
    createData('4', 'K. H. H. Gamage', '12/06/2021', '12.00 PM', '5.00 PM', 'Present', 'Half Day', '8', '1', '4,', 'Busy'),
    createData('5', 'D.M. Dunuwila', '12/06/2021', '9.00 AM', '5.00 PM', 'Present', '-', '8', '1.37', '7.23', 'Available'),
    createData('6', 'S.S. Dias', '12/06/2021', '-', '-', 'Present', '-', '8', '0', '0', '-'),
    createData('7', 'J.Y. Perera', '12/06/2021', '9.00 AM', '5.00 PM', 'Present', '-', '8', '1.37', '7.23', 'Available'),
    createData('8', 'W. P. De Silva', '11/06/2021', '10.00 AM', '5.00 PM', 'Present', 'Short Leave', '8', '1', '6', 'Busy'),
    createData('9', 'D.M. Dunuwila', '11/06/2021', '9.00 AM', '5.00 PM', 'Present', '-', '8', '1.37', '7.23', 'Available'),
    createData('10', 'W. P. De Silva', '11/06/2021', '10.00 AM', '5.00 PM', 'Present', 'Short Leave', '8', '1', '6', 'Available'),
];

const useStyles = makeStyles({
    table: {
        minWidth: 1000,
    },
});

export default function AttendanceTable() {
    const classes = useStyles();

    return (
        <Grid>
            <Grid item style={{ padding: '0 18px 18px' }}>
                <TableContainer >
                    <Table classactivity={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell style={{ fontSize: '18px' }} align="left">Name</StyledTableCell>
                                <StyledTableCell style={{ fontSize: '18px' }} align="left">Date</StyledTableCell>
                                <StyledTableCell style={{ fontSize: '18px' }} align="left">Start Time</StyledTableCell>
                                <StyledTableCell style={{ fontSize: '18px' }} align="left">End Time</StyledTableCell>
                                <StyledTableCell style={{ fontSize: '18px' }} align="left">Attendance</StyledTableCell>
                                <StyledTableCell style={{ fontSize: '18px' }} align="left">Leave Type</StyledTableCell>
                                <StyledTableCell style={{ fontSize: '18px' }} align="left">Total Hours</StyledTableCell>
                                <StyledTableCell style={{ fontSize: '18px' }} align="left">Break Hours</StyledTableCell>
                                <StyledTableCell style={{ fontSize: '18px' }} align="left">Net Hours</StyledTableCell>
                                <StyledTableCell style={{ fontSize: '18px' }} align="left">Status</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.id}>
                                    <StyledTableCell component="th" scope="row" >{row.name}</StyledTableCell>
                                    <StyledTableCell align="left">{row.date}</StyledTableCell>
                                    <StyledTableCell align="left">{row.startTime}</StyledTableCell>
                                    <StyledTableCell align="left">{row.endTime}</StyledTableCell>
                                    <StyledTableCell align="left">{row.attendance}</StyledTableCell>
                                    <StyledTableCell align="left">{row.leaveType}</StyledTableCell>
                                    <StyledTableCell align="left">{row.totalHours}</StyledTableCell>
                                    <StyledTableCell align="left">{row.breakHours}</StyledTableCell>
                                    <StyledTableCell align="left">{row.netHours}</StyledTableCell>
                                    <StyledTableCell align="left">{row.status}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
}
