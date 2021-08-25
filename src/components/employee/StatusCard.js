/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Button, Typography, Grid, Radio, RadioGroup } from '@material-ui/core';
import { makeStyles, FormControlLabel } from "@material-ui/core";
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => {
    return {
        breakBtn: {
            background: '#40A0B5',
            color: '#ffffff',
            '&:hover': {
                backgroundColor: '#218297'
            },
            '&:active': {
                boxShadow: 'none'
            },
        }
    }
})

export default function StatusCard() {
    const [disable, setDisable] = useState(false)
    const date = null;
    const time = null;
    const [cdate, setDate] = useState(date);
    const [ctime, setTime] = useState(time);
    const handelTimeStamp = () => {
        let date = new Date().toLocaleDateString();
        let time = new Date().toLocaleTimeString();
        setDate(date);
        setTime(time);
    }

    const classes = useStyles()
    return (
        <Grid container align="center" justifyContent="center" alignItems="center">
            <Grid item xs={3} >
                <Button variant="contained" disabled={disable} color="primary" onClick={(e) => {
                    setDisable(true)
                    handelTimeStamp()
                }}>
                    Start work</Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" color="primary" onClick={handelTimeStamp}>Stop Work</Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" className={classes.breakBtn} onClick={handelTimeStamp}>Start Break</Button>
            </Grid>
            <Grid item xs={3}>
                <Button disabled variant="contained" className={classes.breakBtn} onClick={handelTimeStamp}>Stop Break</Button>
            </Grid>

            <Grid item xs={2}><br />
                <Typography variant="body1" color="initial" pr={2}>I am</Typography>
            </Grid>
            <Grid item xs={7}><br />
                <RadioGroup row>
                    <FormControlLabel value="available" control={<Radio value="available" />} label={<Typography variant="body1" color="initial" pr={2}>Available</Typography>} />
                    <FormControlLabel value="busy" control={<Radio value="busy" />} label={<Typography variant="body1" color="initial" pr={2}>Busy</Typography>} />
                    <FormControlLabel value="onbreak" control={<Radio value="onbreak" />} label={<Typography variant="body1" color="initial" pr={2}>On Break</Typography>} />
                    <IconButton style={{ color: "#28B463" }} aria-label="save">
                        <CheckCircleRoundedIcon />
                    </IconButton>
                </RadioGroup>
            </Grid>
        </Grid>
    )
}