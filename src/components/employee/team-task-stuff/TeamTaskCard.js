import React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import {  Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    body : {
        minWidth:'400px',
        maxWidth : '400px',
        minHeight:'100px',
        maxHeight : '100px',
        overflowY : 'auto'
    },

    card : {
        marginTop: 20
    }
})



export default function TeamTaskCard({ task }) {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <CardHeader title={task.team} />
            <CardContent className={classes.title}>
                <Typography>{task.title}</Typography>
            </CardContent>
            <CardContent className={classes.body}>
               <Typography> {task.description}</Typography>
            </CardContent>
        </Card>
    )
}