/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container, Typography, Grid, Radio, RadioGroup } from '@material-ui/core';
import { makeStyles, FormControlLabel } from "@material-ui/core";
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import IconButton from '@material-ui/core/IconButton';
import ProgressBar from "./ProgressBar";

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
        <Container>
            <ProgressBar />
            <Grid container align="center" justifyContent="center" alignItems="center">
                <Grid item xs={2}><br />
                    <Typography variant="body1" color="initial" pr={2}>I am</Typography>
                </Grid>
                <Grid item xs={7}><br />
                    <RadioGroup row>
                        <FormControlLabel value="available" control={<Radio value="available" />} label={<Typography variant="body1" color="initial" pr={2}>Available</Typography>} />
                        <FormControlLabel value="busy" control={<Radio value="busy" />} label={<Typography variant="body1" color="initial" pr={2}>Busy</Typography>} />
                        <FormControlLabel value="onbreak" control={<Radio value="onbreak" />} label={<Typography variant="body1" color="initial" pr={2}>On Break</Typography>} />
                        <IconButton style={{ color: "#23AF5E" }} aria-label="save">
                            <CheckCircleRoundedIcon />
                        </IconButton>
                    </RadioGroup>
                </Grid>
            </Grid>
        </Container>
    )
}