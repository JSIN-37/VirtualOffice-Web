import React from 'react';
import TaskCardInspect from './TaskCardInspect';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    pane: {
        minHeight: '90vh',
        maxHeight: '90vh',
        overflow: 'auto'
    },
    middlePane: {
        marginRight: 5,
        marginLeft: 5,
    },
});

export default function InspectTasksPane() {
    const classes = useStyles();
    return (
        <Card variant="outlined" elevation={1} className={`${classes.pane} ${classes.middlePane}`} >
            <CardContent>
                <Typography variant="h5">Inspect Task</Typography>{' '}
            </CardContent>
            <CardContent>
                <TaskCardInspect />
            </CardContent>
        </Card>
    );
}
