import React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Button, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import SubjectIcon from '@material-ui/icons/Subject';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";

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
    }
})

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
                        style={{ marginLeft: '8px' }}
                        startIcon={<SubjectIcon />}
                        onClick={() => setOpenView(true)}>
                        View
                    </Button>

                    <IconButton color="secondary" onClick={() => handleDelete(team.id)}>
                        <DeleteIcon /></IconButton>
                </CardContent>
            </Card>
            <Dialog onClose={handleClose} open={openView} maxWidth={'md'}>
                <DialogTitle id="simple-dialog-title">{team.name}</DialogTitle>
                <Grid container style={{ padding: "20px" }}>
                    <Grid item md={6}>
                        <Typography variant="body1" className={classes.info}>
                            Description:
                        </Typography>
                        <Typography variant="body1" className={classes.info}>
                            Members:
                        </Typography>
                    </Grid>
                    <Grid item md={6}>
                        <Typography variant="body1" pb={1} className={classes.data}>
                            {team.description}
                        </Typography>
                        <Typography variant="body1" pb={1} className={classes.data}>
                            A.T. Pathirana
                        </Typography>
                    </Grid>
                </Grid>
            </Dialog>
        </div >
    )
}