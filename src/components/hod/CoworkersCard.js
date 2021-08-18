import React from 'react';
import { Card, Grid, Typography } from '@material-ui/core';
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => {
    return {
        large: {
            width: theme.spacing(6),
            height: theme.spacing(6),
        },
        todoPaper: {
            // display: 'flex'
        },
        content: {
            marginBottom: "auto",
            paddingLeft: '10px',
            fontSize: '16px',
            FontWeight: '600',
        },
        status: {
            padding: '0 0 5px 10px',
            color: '#6B6C7E'
        },
        coworkers: {
            display: "flex",
            flexDirection: "column",
            textAlign: 'left',
            verticalAlign: "center"
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
                <Grid Item xs={10} className={classes.coworkers}>
                    <Typography className={classes.content}>{emp.name} </Typography>
                    <Typography className={classes.status}> {emp.status}</Typography>
                </Grid>
            </Grid>
        </Card>

    )
}