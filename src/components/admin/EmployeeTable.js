import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from '@material-ui/core/TablePagination';
import { Button, Container } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';

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
        paddingLeft: "30px",
        backgroundColor: "#f4f4f4",
        fontSize: 16,
    },
});

const StyledTableRow = withStyles((theme) => ({
    root: {
        height: 40,
    },
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
    root: {
        padding: "0px 18px",
    },
    body: {
        fontSize: 15,
    },
}))(TableCell);

export default function AttendanceTable(props) {
    const classes = useStyles();

    function createData(
        id,
        checkBox,
        name,
        email,
        division,
        role,
        edit
    ) {
        return {
            id,
            checkBox,
            name,
            email,
            division,
            role,
            edit
        };
    }
    // eslint-disable-next-line
    const [rows, setRows] = React.useState([
        createData(
            "1",
            <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />,
            "D.S. Perera",
            "dsperera@gmail.com",
            "Director’s Office",
            "Director",
            <Button variant="outlined"
                color="primary"
                size="small"
                startIcon={<EditRoundedIcon />}>
                Edit
            </Button>
        ),
        createData(
            "2",
            <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />,
            "W. P. De Silva",
            "wpsilva@gmail.com",
            "General Administration",
            "SR",
            <Button variant="outlined"
                color="primary"
                size="small"
                startIcon={<EditRoundedIcon />}>
                Edit
            </Button>
        ),
        createData(
            "3",
            <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />,
            "A. L. Pathirana",
            "atpathirana@gmail.com",
            "Establishment",
            "HOD",
            <Button variant="outlined"
                color="primary"
                size="small"
                startIcon={<EditRoundedIcon />}>
                Edit
            </Button>
        ),
        createData(
            "4",
            <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />,
            "K. H. H. Gamage",
            "khhamage@gmail.com",
            "Academic, Publications & Welfare",
            "AO",
            <Button variant="outlined"
                color="primary"
                size="small"
                startIcon={<EditRoundedIcon />}>
                Edit
            </Button>
        ),
        createData(
            "5",
            <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />,
            "D.M. Dunuwila",
            "dmdunuwila@gmail.com",
            "Director’s Office",
            "Director",
            <Button variant="outlined"
                color="primary"
                size="small"
                startIcon={<EditRoundedIcon />}>
                Edit
            </Button>
        ),
        createData(
            "6",
            <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />,
            "D.S. Perera",
            "dsperera@gmail.com",
            "Director’s Office",
            "Director",
            <Button variant="outlined"
                color="primary"
                size="small"
                startIcon={<EditRoundedIcon />}>
                Edit
            </Button>
        ),
        createData(
            "7",
            <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />,
            "W. P. De Silva",
            "wpsilva@gmail.com",
            "General Administration",
            "SR",
            <Button variant="outlined"
                color="primary"
                size="small"
                startIcon={<EditRoundedIcon />}>
                Edit
            </Button>
        ),
        createData(
            "8",
            <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />,
            "A. L. Pathirana",
            "atpathirana@gmail.com",
            "Establishment",
            "HOD",
            <Button variant="outlined"
                color="primary"
                size="small"
                startIcon={<EditRoundedIcon />}>
                Edit
            </Button>
        ),
        createData(
            "9",
            <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />,
            "K. H. H. Gamage",
            "khhamage@gmail.com",
            "Academic, Publications & Welfare",
            "AO",
            <Button variant="outlined"
                color="primary"
                size="small"
                startIcon={<EditRoundedIcon />}>
                Edit
            </Button>
        ),
        createData(
            "10",
            <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />,
            "D.M. Dunuwila",
            "dmdunuwila@gmail.com",
            "Director’s Office",
            "Director",
            <Button variant="outlined"
                color="primary"
                size="small"
                startIcon={<EditRoundedIcon />}>
                Edit
            </Button>
        ),
        createData(
            "11",
            <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />,
            "D.S. Perera",
            "dsperera@gmail.com",
            "Director’s Office",
            "Director",
            <Button variant="outlined"
                color="primary"
                size="small"
                startIcon={<EditRoundedIcon />}>
                Edit
            </Button>
        ),
        createData(
            "12",
            <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />,
            "W. P. De Silva",
            "wpsilva@gmail.com",
            "General Administration",
            "SR",
            <Button variant="outlined"
                color="primary"
                size="small"
                startIcon={<EditRoundedIcon />}>
                Edit
            </Button>
        ),
        createData(
            "13",
            <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />,
            "A. L. Pathirana",
            "atpathirana@gmail.com",
            "Establishment",
            "HOD",
            <Button variant="outlined"
                color="primary"
                size="small"
                startIcon={<EditRoundedIcon />}>
                Edit
            </Button>
        ),
        createData(
            "14",
            <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />,
            "K. H. H. Gamage",
            "khhamage@gmail.com",
            "Academic, Publications & Welfare",
            "AO",
            <Button variant="outlined"
                color="primary"
                size="small"
                startIcon={<EditRoundedIcon />}>
                Edit
            </Button>
        ),
        createData(
            "15",
            <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />,
            "D.M. Dunuwila",
            "dmdunuwila@gmail.com",
            "Director’s Office",
            "Director",
            <Button variant="outlined"
                color="primary"
                size="small"
                startIcon={<EditRoundedIcon />}>
                Edit
            </Button>
        ),
    ]);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>
            <Grid container >
                <Container justifycontent="flex-start" >
                    <IconButton aria-label="mail" color="primary">
                        <EmailRoundedIcon />
                    </IconButton>
                </Container >
                <Container justifycontent="center" >
                    <Grid item align="center" style={{ padding: "0 18px 18px" }} >
                        <TableContainer>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow className={classes.tableRow}>
                                        <TableCell
                                            className={classes.tableCell}
                                            align="left"
                                        >
                                        </TableCell>
                                        <TableCell
                                            className={classes.tableCell}
                                            align="left"
                                        >
                                            Name
                                        </TableCell>
                                        <TableCell className={classes.tableCell} align="left">
                                            Email
                                        </TableCell>
                                        <TableCell className={classes.tableCell} align="left">
                                            Division
                                        </TableCell>
                                        <TableCell className={classes.tableCell} align="left">
                                            Role
                                        </TableCell>
                                        <TableCell className={classes.tableCell} align="left">

                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row) => (
                                            <StyledTableRow key={row.id}>
                                                <StyledTableCell
                                                    component="th"
                                                    scope="row"
                                                    style={{ paddingLeft: "30px" }}
                                                >
                                                    {row.checkBox}
                                                </StyledTableCell>
                                                <StyledTableCell
                                                    component="th"
                                                    scope="row"
                                                    style={{ paddingLeft: "30px" }}
                                                >
                                                    {row.name}
                                                </StyledTableCell>

                                                <StyledTableCell
                                                    component="th"
                                                    scope="row"
                                                    style={{ paddingLeft: "30px" }}
                                                >
                                                    {row.email}
                                                </StyledTableCell>

                                                <StyledTableCell
                                                    component="th"
                                                    scope="row"
                                                    style={{ paddingLeft: "30px" }}
                                                >
                                                    {row.division}
                                                </StyledTableCell>

                                                <StyledTableCell
                                                    component="th"
                                                    scope="row"
                                                    style={{ paddingLeft: "30px" }}
                                                >
                                                    {row.role}
                                                </StyledTableCell>

                                                <StyledTableCell
                                                    component="th"
                                                    scope="row"
                                                    style={{ paddingLeft: "30px" }}
                                                >
                                                    {row.edit}
                                                </StyledTableCell>

                                            </StyledTableRow>
                                        ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 15, 20, 25, 50, 100]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handlePageChange}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Grid>
                </Container >
            </Grid>
        </>
    );
}
