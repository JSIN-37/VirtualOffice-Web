import React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Button, Typography, Container } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from "@material-ui/core/InputAdornment";
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import PostAddRoundedIcon from '@material-ui/icons/PostAddRounded';
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
    console.log("TEAM TASK CARD", task)
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