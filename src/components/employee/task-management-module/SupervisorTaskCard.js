import { Avatar, Card, CardActionArea, CardContent, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Delete } from '@material-ui/icons';


const useStyles = makeStyles({
    click: {
        minHeight: '100px',
        maxHeight: '100%',
        borderRadius: '5px',
    },
    card: {
        minHeight: '150px',
        maxHeight: '150px',
        marginTop: 10,
        background: '#E3E6F5',
        overflow: 'auto',
    },

    cursor: {
        cursor: 'pointer'
    }
});

export default function SupervisorTaskCard(props) {
    const classes = useStyles();

    const blank = () => { };

    const task = props.task;
    const assign = props.assign || false
    //id, owner, title, description, deadline, workers
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [deadline, setDeadline] = useState(task.deadline)
    const workers = task.workers;

    const cardClickFunction = props.cardClickFunction || blank;
    if (title === '') {
        setTitle('No Title');
    }

    if (description === '') {
        setDescription('No Description');
    }

    if (deadline === null) {
        setDeadline('no deadline set')
    }

    const isWorkers = workers.length > 0;

    function handleCardClick() {
        cardClickFunction(task)
        if (assign) {
            const x = props.draftsDB.filter(dr => dr.id !== task.id)
            props.setDraftsDB(x)
        }
    }

    function handleDeleteDraft(e) {
        e.preventDefault()
        const x = props.draftsDB.filter(dr => dr.id !== task.id)
        props.setDraftsDB(x)
    }

    return (
        <Card className={classes.card} >
            <CardContent>
                <Grid container justifyContent='space-evenly'>
                    <Grid item>  <Typography>{title}</Typography></Grid>

                    {assign && <Grid item><Delete className={classes.cursor} onClick={handleDeleteDraft} /></Grid>}
                </Grid>



            </CardContent>
            <Grid item> <Typography>{deadline}</Typography></Grid>
            <CardActionArea onClick={handleCardClick}>
                <CardContent>
                    <Typography>Description</Typography>
                    <Typography>{description}</Typography>
                </CardContent>
                {isWorkers && (
                    <Grid container>
                        {workers.map((worker) => {
                            return <Avatar key={worker.id}>{worker.id}</Avatar>;
                        })}
                    </Grid>
                )}
            </CardActionArea>



        </Card>
    );
}
