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

function createData(id, name, date, leaveType) {
    return { id, name, date, leaveType };
}

const rows = [
    createData('1', 'S.S. Dias', '12/06/2021', 'Medical Leave'),
];

const useStyles = makeStyles({
    table: {
        minWidth: 1000,
    },
});

export default function AbsenteesTable() {
    const classes = useStyles();

    return (
        <Grid>
            <Grid item style={{ padding: '0 18px 18px' }}>
                <TableContainer >
                    <Table classactivity={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell style={{ fontSize: '18px', paddingLeft: '30px' }} align="left">Name</StyledTableCell>
                                <StyledTableCell style={{ fontSize: '18px' }} align="left">Date</StyledTableCell>
                                <StyledTableCell style={{ fontSize: '18px' }} align="left">Leave Type</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.id}>
                                    <StyledTableCell component="th" scope="row" style={{ paddingLeft: '30px' }}>{row.name}</StyledTableCell>
                                    <StyledTableCell align="left">{row.date}</StyledTableCell>
                                    <StyledTableCell align="left">{row.leaveType}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
}
