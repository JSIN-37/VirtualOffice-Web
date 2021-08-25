import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
    table: {
        minWidth: 1100
    },
    tableRow: {
        height: 40
    },
    tableCell: {
        padding: "10px",
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

function createData(id, name, date, startTime, endTime, totalHours, breakHours, netHours, status) {
    return { id, name, date, startTime, endTime, totalHours, breakHours, netHours, status };
}

const rows = [
    createData('1', 'D.S. Perera', '12/06/2021', '9.00 AM', '5.00 PM', '8', '1.37', '7.23', 'Available'),
    createData('2', 'W. P. De Silva', '12/06/2021', '10.00 AM', '5.00 PM', '8', '1', '6', 'Busy'),
    createData('3', 'A. L. Pathirana', '12/06/2021', '9.00 AM', '5.00 PM', '8', '1.37', '7.23', 'Available'),
    createData('4', 'K. H. H. Gamage', '12/06/2021', '12.00 PM', '5.00 PM', '8', '1', '4,', 'Busy'),
    createData('5', 'D.M. Dunuwila', '12/06/2021', '9.00 AM', '5.00 PM', '8', '1.37', '7.23', 'Available'),
    createData('7', 'J.Y. Perera', '12/06/2021', '9.00 AM', '5.00 PM', '8', '1.37', '7.23', 'Available'),
    createData('8', 'W. P. De Silva', '11/06/2021', '10.00 AM', '5.00 PM', '8', '1', '6', 'Busy'),
    createData('9', 'D.M. Dunuwila', '11/06/2021', '9.00 AM', '5.00 PM', '8', '1.37', '7.23', 'Available'),
    createData('10', 'W. P. De Silva', '11/06/2021', '10.00 AM', '5.00 PM', '8', '1', '6', 'Available'),
];

export default function AttendeesTable() {
    const classes = useStyles();

    return (
        <Grid>
            <Grid item style={{ padding: '0 18px 18px' }}>
                <TableContainer >
                    <Table classactivity={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell className={classes.tableCell} align="left">Name</StyledTableCell>
                                <StyledTableCell className={classes.tableCell} align="left">Date</StyledTableCell>
                                <StyledTableCell className={classes.tableCell} align="left">Start Time</StyledTableCell>
                                <StyledTableCell className={classes.tableCell} align="left">End Time</StyledTableCell>
                                <StyledTableCell className={classes.tableCell} align="left">Total Hours</StyledTableCell>
                                <StyledTableCell className={classes.tableCell} align="left">Break Hours</StyledTableCell>
                                <StyledTableCell className={classes.tableCell} align="left">Net Hours</StyledTableCell>
                                <StyledTableCell className={classes.tableCell} align="left">Status</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.id}>
                                    <StyledTableCell component="th" scope="row" style={{ paddingLeft: '30px' }}>{row.name}</StyledTableCell>
                                    <StyledTableCell align="left">{row.date}</StyledTableCell>
                                    <StyledTableCell align="left">{row.startTime}</StyledTableCell>
                                    <StyledTableCell align="left">{row.endTime}</StyledTableCell>
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
