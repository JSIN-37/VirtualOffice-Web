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

function createData(id, name, date, leaveType) {
    return { id, name, date, leaveType };
}

const rows = [
    createData('1', 'S.S. Dias', '12/06/2021', 'Medical Leave'),
];

export default function AbsenteesTable() {
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
                                <StyledTableCell className={classes.tableCell} align="left">Leave Type</StyledTableCell>
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
