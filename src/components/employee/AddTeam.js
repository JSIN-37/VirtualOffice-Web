import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import { Typography, Container, Paper, Divider } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import AddBoxRoundedIcon from "@material-ui/icons/AddBoxRounded";
import user from "../../resources/emp_user.svg";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from "@material-ui/core/InputAdornment";

import { AppData } from "../../App";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        boxSizing: "border-box"
    },
    field: {
        width: 370,
        marginTop: 20,
        backgroundColor: "#f9f9f9",
    },
    heading: {
        marginBottom: '0',
        fontWeight: "500",
        textAlign: "left"
    },
    smallAvatar: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    icon: {
        fontSize: 40,
        margin: "10px",
    },
    members: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        minWidth: "100px",
        backgroundColor: "transparent",
        cursor: "pointer",
    },
    button: {
        marginTop: 20,
        marginRight: 20,
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    dialog: {
        padding: "0px 20px 20px",
    },
    listItem: {
        margin: "5px 10px",
    },
    dialogButton: {
        margin: "10px 0 30px",
    },
}));

const employees = [
    { empName: 'A. T. Pathirana' },
    { empName: 'D. H. Gamage' },
    { empName: 'K. L. Perera' },
]


export default function AddTeam() {
    const [appD] = React.useContext(AppData);
    const classes = useStyles();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [division, setDivision] = React.useState("");
    const [leader, setLeader] = useState("");
    const [nameError, setNameError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);
    const [leaderError, setLeaderError] = useState(false);

    const [openView, setOpenView] = React.useState(false);
    const handleClose = () => {
        setOpenView(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setNameError(false);
        setDescriptionError(false);
        setLeaderError(false);

        if (name === "") {
            setNameError(true);
        }
        if (description === "") {
            setDescriptionError(true);
        }
        if (leader === "") {
            setLeaderError(true);
        }
        if (name && description && leader) {
            const config = {
                headers: { Authorization: `Bearer ${appD.token}` },
            };
            var axios = require("axios");
            axios
                .post(
                    `${window.backendURL}/interim/teams`,
                    {
                        name: name,
                        leader: leader,
                        division: division,
                        description: description,
                    },
                    config
                )
                .then((res) => {
                    let data = res.data;
                    console.log(data);
                });
        }
    };

    return (
        <Container className={classes.root}>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={5}>
                        <TextField
                            className={classes.field}
                            onChange={(e) => setName(e.target.value)}
                            label="Team Name"
                            variant="outlined"
                            color="primary"
                            fullWidth
                            required
                            error={nameError}
                        />

                        <TextField
                            className={classes.field}
                            onChange={(e) => setDescription(e.target.value)}
                            label="Description"
                            variant="outlined"
                            color="primary"
                            multiline
                            rows={4}
                            fullWidth
                            required
                            error={descriptionError}
                        />
                        <TextField
                            className={classes.field}
                            onChange={(e) => setDivision(e.target.value)}
                            id="division"
                            select
                            label="Division"
                            value={division}
                            variant="outlined"
                        >
                            <MenuItem value="None">None</MenuItem>
                            <MenuItem value="SomeDivision">Some Division</MenuItem>
                        </TextField>
                        <TextField
                            className={classes.field}
                            onChange={(e) => setLeader(e.target.value)}
                            label="Leader"
                            variant="outlined"
                            color="primary"
                            fullWidth
                            required
                            error={leaderError}
                        />
                        <br />

                        <Paper elevation={0} className={classes.members} onClick={() => setOpenView(true)}>
                            <AddBoxRoundedIcon className={classes.icon} color="primary" />
                            <Typography variant="body1" color="primary">Add Members</Typography>
                        </Paper>

                        <br />
                        <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                            className={classes.button}
                            onClick={(e) => handleSubmit(e)}>
                            Submit
                        </Button>
                        <Button
                            type="reset"
                            color="primary"
                            variant="outlined"
                            className={classes.button}>
                            Cancel
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Typography variant="body1" className={classes.heading}>
                            Team Members{" "}
                        </Typography>
                        <Divider style={{ marginBottom: 10 }} />
                        <Grid container>
                            <Grid item xs={2}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src={user}
                                    className={classes.smallAvatar}
                                />
                            </Grid>
                            <Grid item xs={10} style={{ marginTop: "10px" }}>
                                <Typography variant="body2" align="left">
                                    A.T. Pathirana
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={1}></Grid>
                </Grid>
            </form>

            <Dialog onClose={handleClose} open={openView} fullWidth maxWidth={'sm'}  >
                <DialogTitle id="simple-dialog-title">Add Members
                    <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <Container align="center" justifycontent="center" className={classes.dialog}>
                    <div style={{ width: 450, marginBottom: "10px" }}>
                        <Autocomplete
                            freeSolo
                            disableClearable
                            options={employees.map((option) => option.empName)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Search input"
                                    margin="normal"
                                    variant="outlined"
                                    InputProps={{
                                        ...params.InputProps, type: 'search', startAdornment: (
                                            <InputAdornment position="start">
                                                <IconButton>
                                                    <SearchIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            )}
                        />
                    </div>
                    <Grid container className={classes.listItem}>
                        <Grid item xs={8} style={{ flexGrow: 1, }}>
                            <Typography variant="body1" className={classes.info} >A.T. Pathirana</Typography>
                        </Grid>
                        <Grid item xs={1} justifyContent="center" align="center" style={{ flexShrink: 0, }}>
                            <IconButton aria-label="close" size="small">
                                <CloseIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs={8} style={{ justifyContent: "flex-start" }}>
                            <Typography variant="body1" className={classes.info} >A.T. Pathirana</Typography>
                        </Grid>
                        <Grid item xs={1} justifyContent="center" align="center" style={{ justifyContent: "flex-end" }}>
                            <IconButton aria-label="close" size="small">
                                <CloseIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Button color="primary" variant="contained" startIcon={<PersonAddIcon />} className={classes.button}>
                        Add Members
                    </Button>
                </Container>
            </Dialog>
        </Container>
    );
}
