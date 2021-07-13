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

function createData(id, activity, date, time) {
    return { id, activity, date, time };
}

const rows = [
    createData('1', 'End Break', '30/06/2021', '1.30 PM'),
    createData('2', 'Start Break', '30/06/2021', '1.30 PM'),
    createData('3', 'Start Work', '30/06/2021', '9.00 AM'),
    createData('4', 'End Work', '29/06/2021', '5.30 PM'),
    createData('5', 'End Break', '29/06/2021', '2.30 PM'),
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function TimeStamps() {
    const classes = useStyles();

    return (
        <Grid>
            <Grid item style={{ padding: '0 18px 18px' }}>
                <TableContainer >
                    <Table classactivity={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell style={{ fontSize: '18px', paddingLeft: '70px' }} align="left">Activity</StyledTableCell>
                                <StyledTableCell style={{ fontSize: '18px' }} align="left">Date</StyledTableCell>
                                <StyledTableCell style={{ fontSize: '18px' }} align="left">Time</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.id}>
                                    <StyledTableCell component="th" scope="row" style={{ paddingLeft: '70px' }} >{row.activity}</StyledTableCell>
                                    <StyledTableCell align="left">{row.date}</StyledTableCell>
                                    <StyledTableCell align="left">{row.time}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
}
