import React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CreateIcon from '@material-ui/icons/Create';
import { Button, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import Modal from '@material-ui/core/Modal';
import TeamDetails from './TeamDetails'

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
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            position: 'relative',
            width: 450,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }
})

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}


export default function TeamCard({ team, handleDelete }) {
    const classes = useStyles()
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Card variant="outlined" elevation={1} style={{ borderRadius: '10px' }}>
                <CardHeader style={{ paddingLeft: '25px' }} classes={{ title: classes.title }}
                    title={team.name}
                />
                <CardContent style={{ paddingTop: '0' }}>
                    <Grid container style={{ padding: 8 }}>
                        <Grid item xs={6}>
                            <Typography variant="body1" className={classes.info}>
                                Team Leader:
                            </Typography>
                            <Typography variant="body1" className={classes.info}>
                                Division:
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1" pb={1} className={classes.data}>
                                {team.leader}
                            </Typography>
                            <Typography variant="body1" pb={1} className={classes.data}>
                                {team.division}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Button variant="outlined"
                        color="primary"
                        size="small"
                        style={{
                            marginLeft: '8px'
                        }} onClick={handleOpen}>
                        View
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        size="small"
                        style={{
                            marginLeft: '8px'
                        }}
                        startIcon={<CreateIcon />
                            // onClick={()}
                        }
                    >Edit
                    </Button>
                    <IconButton color="secondary" onClick={() => handleDelete(team.id)}>
                        <DeleteIcon /></IconButton>
                </CardContent>
            </Card>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <TeamDetails />
                </div>
            </Modal>
        </div >
    )
}