import React from 'react';
import { Card, Grid, Typography } from '@material-ui/core';
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => {
    return {
        large: {
            width: theme.spacing(7),
            height: theme.spacing(7),
        },
        todoPaper: {
            // display: 'flex'
        },
        content: {
            padding: ' 0 0 5px 10px',
            fontSize: '18px',
            FontWeight: '600',
        },
        status: {
            padding: '0 0 5px 10px',
            color: '#6B6C7E'
        }
    }
})

export default function CoworkersCard({ emp }) {
    const classes = useStyles()
    return (
        <Card elevation={0} md={12} className={classes.todoPaper}>
            <Grid container style={{ paddingTop: '10px', }} align="center" justify="center" alignItems="center">
                <Grid Item xs={2}>
                    <Avatar alt="Remy Sharp" src={emp.image} className={classes.large} />
                </Grid>
                <Grid Item xs={10} style={{ textAlign: 'left', verticalAlign: "center", display: 'flex-end' }}>
                    <Typography className={classes.content}>{emp.name} </Typography>
                    <Typography className={classes.status}> {emp.status}</Typography>
                </Grid>
            </Grid>
        </Card>

    )
}