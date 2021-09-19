//called from -> Tasks.js

import React from 'react';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TaskCardMini from './TaskCardMini';

const useStyles = makeStyles({
    pane: {
        minHeight: '90vh',
        maxHeight: '90vh',
        overflow: 'auto'
    },
});

export default function MyTasksPane(props) {
    const tasks = props.tasks;
    const handleTaskChange = props.handleTaskChange;

    const classes = useStyles();

    return (
        <Card className={classes.pane} variant="outlined" elevation={1}>
            <CardHeader title='My Tasks' />
            <CardContent>
                {tasks.map((task) => {
                    return (
                        <TaskCardMini
                            key={task.id}
                            task={task}
                            handleTaskChange={handleTaskChange}
                        />
                    );
                })}
            </CardContent>
        </Card>
    );
}
