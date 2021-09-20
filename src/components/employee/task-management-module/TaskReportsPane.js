import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TempAddTask from './TempAddTask';

const useStyles = makeStyles({
    pane: {
        minHeight: '90vh',
        maxHeight: '90vh',
        overflow: 'auto'
    },
});

export default function TaskReportsPane(props) {
    const addTask = props.addTask;
    const classes = useStyles();
    return (
        <Card variant="outlined" elevation={1} className={classes.pane}>

            <CardContent>
                <Typography variant="h5">Add Task</Typography>
            </CardContent>
            <TempAddTask addTask={addTask} />
        </Card>
    );
}
