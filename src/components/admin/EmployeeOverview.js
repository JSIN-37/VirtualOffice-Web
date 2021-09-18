import React from 'react'
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { Link } from "@material-ui/core";
import EmployeeTable from "./EmployeeTable";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from "axios";
import { useState } from "react";
import Alert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';

export default function EmployeeOverview(appD) {

    const [open, setOpen] = React.useState(false);
    const [firstname, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event) => {
        setOpen(false);
    };

    const handleNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const postEmployees = async (appD) => {
        const config = {
            headers: { Authorization: `Bearer ${appD.token}` },
        };
        // const bodyParameters = {
        //   key: "value",
        // };
        console.log(firstname);
        console.log(email);
        axios
            .post(`${window.backendURL}/admin/user`, {
                first_name: firstname,
                email: email
            }, config)
            .then(console.log)
            // if(_____){
            //     setOpen(false);
            // setShowAlert(true);
            // }
            .catch(console.log);
            setOpen(false);
            setShowAlert(true);
            
    };

    return (
        <>
        {/* <Alert severity='success'  onClose={() => setShowAlert(null)} > Invitation Sent </Alert>  */}
            {/* {showAlert ? <Alert width= '100%' severity="success"  > Invitation Sent </Alert> : <></> }  */}
            <Snackbar sx={{ width: '100%' }} onClose={()=>setShowAlert(false)} open={showAlert} autoHideDuration={3000} >
            <Alert severity="success" >
            Invitation Sent
            </Alert>
            </Snackbar>
            {/* onClose={() => setShowAlert(null)} */}
            {/* <h1>Employees details go here</h1> */}
            {/* <h1>Employees details go here</h1> */}
            <EmployeeTable />
            <Button
                style={{ marginLeft: "20px" }}
                variant="contained"
                // component={Link}
                // to="/invite-employees"
                color="primary"
                onClick={handleClickOpen}>
                Invite Employees
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Invite Empoyees of your organization</DialogTitle>
                <DialogContent>
                    <DialogContentText>

                    </DialogContentText>
                    <form>

                    </form>
                </DialogContent>
                <Grid container item lg={12} spacing={3}>
                    <Grid item md={6}>
                        Name
                        <TextField
                            autoFocus
                            margin="dense"
                            id="firstname"
                            type="name"
                            placeholder="Eg: A P Perera"
                            fullWidth
                            onChange={handleNameChange}
                        />
                    </Grid>
                    <Grid item md={6} >
                        Email
                        <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            type="email"
                            placeholder="Eg: apperera@gmail.com"
                            fullWidth
                            onChange={handleEmailChange}
                        />
                    </Grid>
                </Grid>
                <DialogActions>
                    <Button color="primary" variant="contained"
                        component={Link}
                        to="/invite-employees"
                        // onClick={handleClickOpen}
                        onClick={() => postEmployees(appD)}

                        size="small">
                        Send Invitation
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
