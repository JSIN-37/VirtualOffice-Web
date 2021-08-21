import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
    table: {
        minWidth: 1100
    },
    tableRow: {
        height: 40
    },
    tableCell: {
        paddingTop: "10px",
        paddingBottom: "10px",
        backgroundColor: '#f4f4f4',
        fontSize: 16,
    }
});

const StyledTableRow = withStyles((theme) => ({
    root: {
        height: 40,
        '&:nth-of-type(even)': {
            backgroundColor: '#f9f9f9',
        },
    }
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
    root: {
        padding: "0px 18px"
    },
    body: {
        fontSize: 15,
    },
}))(TableCell);


export default function AttendanceTable(props) {
    const classes = useStyles();
    const rows = props.rows;

    return (
        <Grid>
            <Grid item style={{ padding: '0 18px 18px' }}>
                <TableContainer>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow className={classes.tableRow}>
                                <TableCell className={classes.tableCell} align="left" style={{ paddingLeft: '30px' }} >Name</TableCell>
                                <TableCell className={classes.tableCell} align="left">Date</TableCell>
                                <TableCell className={classes.tableCell} align="left">Start Time</TableCell>
                                <TableCell className={classes.tableCell} align="left">End Time</TableCell>
                                <TableCell className={classes.tableCell} align="left">Attendance</TableCell>
                                <TableCell className={classes.tableCell} align="left">Leave Type</TableCell>
                                <TableCell className={classes.tableCell} align="left">Total Hours</TableCell>
                                <TableCell className={classes.tableCell} align="left">Break Hour</TableCell>
                                <TableCell className={classes.tableCell} align="left">Net Hours</TableCell>
                                <TableCell className={classes.tableCell} align="left">Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.id}>
                                    <StyledTableCell component="th" scope="row" style={{ paddingLeft: '30px' }} >{row.name}</StyledTableCell>
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