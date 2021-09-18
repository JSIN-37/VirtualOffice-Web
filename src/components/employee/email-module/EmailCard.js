import React, { useContext } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Snackbar, Typography, Container } from '@material-ui/core';
import { MyTaskUtils } from '../../../EmployeeArea';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles({
    email: {
        width: '100%',
        height: '45px',
        overflow: 'auto',
        cursor: 'pointer',
        textAlign: 'left',
        padding: 10,
        marginBottom: 5,
        borderRadius: "8px"
    },
    unread: {
        background: '#DCEBFB',
    },
    read: {
        background: '#F2F3F4 '
    }
}
)

export default function EmailCard({ email }) {

    const { taskDB, setTaskDB } = useContext(MyTaskUtils)

    function addToMyTasks() {
        const task = {
            id: email.id,
            title: 'EMAIL REMINDER',
            description: email.snippet,
            inProgress: false,
            overDue: false,
            dueDate: null,
        }

        const arr = taskDB.filter((db) => db.id === task.id)
        if (arr.length > 0) {
            alert('Task already added')
        } else {
            setTaskDB([...taskDB, task])
            setOpen(true)
        }


    }

    //for snackbar
    const [open, setOpen] = React.useState(false);
    function handleClose() {
        setOpen(false);
    };

    const classes = useStyles()
    return (<>
        <Container>
            <Grid container spacing={2} align="center" justifyContent="center" direction="row">
                <Grid item xs={11} md={11}>
                    <Box className={`${classes.email} ${email.labelIds[0] === 'UNREAD' ? classes.unread : classes.read}`}
                        onClick={addToMyTasks} >
                        <Typography variant="body2" color="primary">{email.snippet}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={1} md={1}>
                    <IconButton color="primary" style={{ marginTop: "10px" }} size="medium" onClick={addToMyTasks}>
                        <AddCircleIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </Container>
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            open={open}
            onClose={handleClose}
            autoHideDuration={2000}
            message="Email Added to My Tasks"

        />
    </>
    )
}
