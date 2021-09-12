import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Button } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { blue } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';


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
    
    function createData(
        checkBox,
        name,
        email,
        division,
        role,
        edit
    ) {
        return {
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
            <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />,
            "K P Hewagamage",
            "hewagamage@gmail.com",
            "Director’s Office",
            "Director",
            <Button variant="contained" size="small" justifyContent="flex-end"> 
              <EditOutlinedIcon style={{ color: blue[500] }} />
              <Typography>Edit</Typography>
            </Button>
            ),
        createData(
            <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />,
            "K P Hewagamage",
            "hewagamage@gmail.com",
            "General Administration",
            "SR",
            <Button variant="contained" size="small" justifyContent="flex-end"> 
              <EditOutlinedIcon style={{ color: blue[500] }} />
              <Typography>Edit</Typography>
            </Button>
        ),
        createData(
            <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />,
            "K P Hewagamage",
            "hewagamage@gmail.com",
            "Establishment",
            "HOD",
            <Button variant="contained" size="small" justifyContent="flex-end"> 
              <EditOutlinedIcon style={{ color: blue[500] }} />
              <Typography>Edit</Typography>
            </Button>
        ),
        createData(
            <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />,
            "K P Hewagamage",
            "hewagamage@gmail.com",
            "Academic, Publications & Welfare",
            "AO",
            <Button variant="contained" size="small" justifyContent="flex-end"> 
              <EditOutlinedIcon style={{ color: blue[500] }} />
              <Typography>Edit</Typography>
            </Button>
        ),
        createData(
            <Checkbox
            defaultChecked
            color="primary"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
        />,
        "K P Hewagamage",
        "hewagamage@gmail.com",
        "Director’s Office",
        "Director",
        <Button variant="contained" size="small" justifyContent="flex-end"> 
          <EditOutlinedIcon style={{ color: blue[500] }} />
          <Typography>Edit</Typography>
        </Button>
        ),
    ]);

    return (
        <>
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
                                    </TableCell>
                                    <TableCell
                                        className={classes.tableCell}
                                        align="left"
                                        style={{ paddingLeft: "30px" }}
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
                                {rows.map((row) => (
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
                </Grid>

            </Grid>
        </>
    );
}
