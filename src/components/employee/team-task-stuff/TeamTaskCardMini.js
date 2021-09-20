import React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    body : {
        minWidth:'300px',
        maxWidth : '300px',
        minHeight:'150px',
        maxHeight : '150px',
        overflowY : 'auto'
    },

    card : {
        marginTop: 20
    }
})



export default function TeamTaskCardMini({ task }) {
    const classes = useStyles()
    console.log("TEAM TASK CARD", task)
    return (
        <Card className={classes.body}>
            <CardHeader title={task.team} />
            <CardContent className={classes.title}>
                <Typography>{task.title}</Typography>
            </CardContent>
        </Card>
    )
}