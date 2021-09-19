import React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Button, Typography, Container } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles((theme) => {
    return {
        title: {
            color: '#3F51B4',
            fontSize: "20px",
        },
        info: {
            textAlign: 'left',
            fontWeight: '400'
        },
        data: {
            textAlign: 'right',
            fontWeight: '400'
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
        dialog: {
            padding: "0px 20px",
        },
        listItem: {
            margin: "5px 10px",
        },
        button: {
            margin: "10px 0 30px",
        },
    }
})


const employees = [
    { empName: 'A. T. Pathirana' },
    { empName: 'D. H. Gamage' },
    { empName: 'K. L. Perera' },
]

export default function TeamCard({ team, handleDelete }) {
    const classes = useStyles()
    const [openView, setOpenView] = React.useState(false);
    const handleClose = () => {
        setOpenView(false);
    };

    return (
        <div>
            <Card variant="outlined" elevation={1} style={{ borderRadius: '10px' }}>
                <CardHeader style={{ paddingLeft: '25px' }} classes={{ title: classes.title }}
                    title={team.name}
                />
                <CardContent style={{ paddingTop: '0' }}>
                    <Grid container style={{ padding: '8px' }}>
                        <Grid item xs={6}>
                            <Typography variant="body1" className={classes.info}>
                                Team Leader:
                            </Typography>
                            <Typography variant="body1" className={classes.info}>
                                Division:
                            </Typography>
                            <Typography variant="body1" className={classes.info}>
                                Description:
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1" pb={1} className={classes.data}>
                                {team.leader}
                            </Typography>
                            <Typography variant="body1" pb={1} className={classes.data}>
                                {team.division}
                            </Typography>
                            <Typography variant="body1" pb={1} className={classes.data}>
                                {team.description}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Button variant="outlined"
                        color="primary"
                        size="small"
                        style={{ marginLeft: '8px' }}
                        startIcon={<PersonAddIcon />}
                        onClick={() => setOpenView(true)}>
                        Add Members
                    </Button>
                    <IconButton color="secondary" onClick={() => handleDelete(team.id)}>
                        <DeleteIcon />
                    </IconButton>
                </CardContent>
            </Card>
            <Dialog onClose={handleClose} open={openView} fullWidth maxWidth={'sm'}  >
                <DialogTitle id="simple-dialog-title">{team.name}
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
                    <Grid container justifyContent="center" align="center" className={classes.listItem}>
                        <Grid item xs={8} style={{ justifyContent: "flex-start" }}>
                            <Typography variant="body1" className={classes.info} >A.T. Pathirana</Typography>
                        </Grid>
                        <Grid item xs={1} style={{ justifyContent: "flex-end" }}>
                            <IconButton aria-label="close" size="small" onClick={() => handleDelete()}>
                                <CloseIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs={8} style={{ justifyContent: "flex-start" }}>
                            <Typography variant="body1" className={classes.info} >A.T. Pathirana</Typography>
                        </Grid>
                        <Grid item xs={1} style={{ justifyContent: "flex-end" }}>
                            <IconButton aria-label="close" size="small" onClick={() => handleDelete()}>
                                <CloseIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Button color="primary" variant="contained" startIcon={<PersonAddIcon />} className={classes.button}>
                        Add Members
                    </Button>
                </Container>
            </Dialog>
        </div >
    )
}