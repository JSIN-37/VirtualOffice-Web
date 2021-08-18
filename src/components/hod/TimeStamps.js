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
        maxWidth: 700
    },
    tableRow: {
        height: 35
    },
    tableCell: {
        padding: "0px 0 0 40px"
    }
});

const StyledTableRow = withStyles((theme) => ({
    root: {
        height: 35,
        '&:nth-of-type(odd)': {
            backgroundColor: '#f9f9f9',
        },
    }
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
    root: {
        padding: "0px 20px"
    },
    head: {
        backgroundColor: '#f4f4f4'
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

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

export default function BasicTable() {
    const classes = useStyles();

    return (
        <Grid>
            <Grid item style={{ padding: '0 18px 18px' }}>
                <TableContainer>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow className={classes.tableRow}>
                                <TableCell className={classes.tableCell} align="left">Activity</TableCell>
                                <TableCell className={classes.tableCell} align="left">Data</TableCell>
                                <TableCell className={classes.tableCell} align="left">Time</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row" style={{ paddingLeft: '40px' }} >{row.activity}</StyledTableCell>
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
