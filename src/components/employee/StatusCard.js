/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useContext, useEffect } from "react";
import { Container, Typography, Grid, Radio, RadioGroup } from '@material-ui/core';
import { makeStyles, FormControlLabel } from "@material-ui/core";
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import IconButton from '@material-ui/core/IconButton';
import ProgressBar from "./ProgressBar";
import PleaseMarkAttendance from "./PleaseMarkAttendance";
import WorkDone from "./WorkDone";
import { AppData } from "../../App";
import axios from "axios";

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
    const [appD] = useContext(AppData);
    const [workStated, setWorkStated] = useState(false);
    const [checkoutHappened, setCheckoutHappened] = useState(false);
    const [todayData, setTodayData] = useState(null);
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

    //update status card for every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            getTodayData();
        }, 1000);
        
        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    }, []);

    //Get attendance log record for today
    const getTodayData = () => {
        const config = {
            headers: { Authorization: `Bearer ${appD.token}` },
        };
        axios
        .get(`${window.backendURL}/user/checkcheckin`, config)
        .then((res) => {
            let data = res.data;
            //console.log('StatusCard.js -> setting time?',data);
            setTodayData(data); //data should include check-in time, check-out time, if the person has already done a check-in/check-out today
        })
        .catch (error => {
            console.log(error);
        });
    };

    const classes = useStyles()
    return (
        <Container>
            {todayData ? 
                (todayData.end_time ? (
                    <WorkDone />
                ) 
                :
                (<>
                    <ProgressBar data={todayData}/>
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
                </>)
            ) 
            : (<PleaseMarkAttendance />)
            }
            
        </Container>
    )
}