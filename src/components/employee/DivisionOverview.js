import React from 'react'
import Container from '@material-ui/core/Grid'
import Grid from '@material-ui/core/Grid'
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Avatar from "@material-ui/core/Avatar";
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import AssignmentIcon from '@material-ui/icons/Assignment';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import user from "../../resources/emp_user.svg";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        boxSizing: "border-box",
    },
    detailsContainer: {
        marginTop: '20px',
    },
    heading: {
        marginBottom: '0',
        fontWeight: "500",
        textAlign: "left"
    },
    hr: {
        maxWidth: '500px',
        textAlign: "left"
    },
    bigAvatar: {
        width: theme.spacing(6),
        height: theme.spacing(6),
    },
    smallAvatar: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    icon: {
        fontSize: 40,
        margin: "10px"
    },
    teams: {
        display: "flex",
    },
    team: {
        display: "flex",
        alignItems: "left",
        flexDirection: "column",
        minWidth: "100px",
        backgroundColor: "transparent"
    },
    task: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        minWidth: "100px",
        backgroundColor: "transparent"
    },

    chatContainer: {
        width: "50%",
        boxSizing: "border-box",
        backgroundColor: '#E3E6F5',
    },

}));

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 }
]

export default function DivisionOverview() {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Grid container className={classes.detailsContainer}>
                <Grid item md={5} lg={5}>
                    <Typography variant="body1" className={classes.heading} align="left" >Division</Typography>
                    <Divider style={{ marginBottom: 10 }} />
                    <Typography variant="body2">General Administration </Typography>
                    <br />
                    <Typography variant="body1" className={classes.heading}>Head of Division</Typography>
                    <Divider style={{ marginBottom: 10 }} />
                    <Grid container>
                        <Grid item xs={2}>
                            <Avatar alt="Remy Sharp" src={user} className={classes.bigAvatar} />
                        </Grid>
                        <Grid item xs={10} style={{ marginTop: "15px" }}>
                            <Typography variant="body2" align="left">A.T. Pathirana</Typography>
                        </Grid>
                    </Grid>
                    <br />
                    <Typography variant="body1" className={classes.heading}>Teams  </Typography>
                    <Divider style={{ marginBottom: 10 }} />
                    <Container className={classes.teams}>
                        <Paper elevation={0} className={classes.team}>
                            <AddBoxRoundedIcon className={classes.icon} color="primary" />
                            <Typography variant="body2">Add Team</Typography>
                        </Paper>
                        <Paper elevation={0} className={classes.team}>
                            <GroupRoundedIcon className={classes.icon} color="primary" />
                            <Typography variant="body2">Web Team</Typography>
                        </Paper>
                        <Paper elevation={0} className={classes.team}>
                            <GroupRoundedIcon className={classes.icon} color="primary" />
                            <Typography variant="body2">Doc Team</Typography>
                        </Paper>
                    </Container>
                    <br />
                    <Typography variant="body1" className={classes.heading}>Projects/ Tasks  </Typography>
                    <Divider style={{ marginBottom: 10 }} />
                    <Container className={classes.tasks}>
                        <Paper elevation={0} className={classes.task}>
                            <AddBoxRoundedIcon className={classes.icon} color="primary" />
                            <Typography variant="body2">Add task</Typography>
                        </Paper>
                        <Paper elevation={0} className={classes.task}>
                            <AssignmentIcon className={classes.icon} color="primary" />
                            <Typography variant="body2">Meeting with Establishment</Typography>
                        </Paper>
                        <Paper elevation={0} className={classes.task}>
                            <AssignmentIcon className={classes.icon} color="primary" />
                            <Typography variant="body2">Oversee the process</Typography>
                        </Paper>
                    </Container>
                </Grid>
                <Grid item md={1} lg={1} style={{ paddingRight: 8 }}></Grid>
                <Grid item md={5} lg={5}>
                    <Typography variant="body1" className={classes.heading}>Current Employees </Typography>
                    <Divider style={{ marginBottom: 10 }} />
                    <div style={{ width: 400, marginBottom: "10px" }}>
                        <Autocomplete
                            freeSolo
                            disableClearable
                            options={top100Films.map((option) => option.title)}
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
                    <Container className={classes.tasks}>
                        <Grid container >
                            <Grid item xs={2}>
                                <Avatar alt="Remy Sharp" src={user} className={classes.smallAvatar} />
                            </Grid>
                            <Grid item xs={10} style={{ marginTop: "10px" }}>
                                <Typography variant="body2" align="left">A.T. Pathirana</Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
                <Grid item md={1} lg={1} style={{ paddingRight: 8 }}>
                </Grid>
            </Grid >
        </Container>
    );
}
