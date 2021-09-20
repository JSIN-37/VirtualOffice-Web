import React, { useContext } from 'react';
import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { TaskDB } from './MyTasks';

const useStyles = makeStyles({
    details: {
        height: '45vh',
        background: '#f9f9f9',
        borderRadius: "10px",
    },
    title: {
        color: '#071008',
        fontSize: "20px",
    },
});
export default function TaskDetails() {
    let { inspecting } = useContext(TaskDB);
    if (inspecting === null) {
        inspecting = {
            id: null,
            title: 'Select Task To View',
            description: '',
        };
    }
    const classes = useStyles();
    return (
        <Card className={classes.details} style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <CardHeader title={inspecting.title} classes={{ title: classes.title }} />
            <CardContent>
                <Typography>{inspecting.description}</Typography>
            </CardContent>
        </Card>
    );
}
