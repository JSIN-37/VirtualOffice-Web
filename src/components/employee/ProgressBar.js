import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
    root: {
        width: "100%"
    }
});

function LinearProgressWithLabel(props) {
    return (
        <Box display="flex" alignItems="center" p={3}>
            <Box width="100%" mr={3}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box minWidth={35}>
                <Typography variant="body2" color="textSecondary">
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired
};

export default function ProgressBar({ data }) {
    const classes = useStyles();
    const [bar, setBar] = useState(0);

    //update progress bar for each secoond
    useEffect(() => {
        const interval = setInterval(() => {
            let diff = Math.round(new Date().getTime() / 1000) - data.start_time;
            console.log(diff);
            updateProgress(diff);
        }, 1000);
        
        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    }, []);

    //calculate work progress
    const updateProgress = (sec) => {
        let progress;
        let workedTime = sec;
        if (workedTime < 36){
            progress = (workedTime / 36 * 100); //10*60*60 (Assuming full time -> 10 hours)
        }else{
            progress = 100;
        }
        setBar(progress);
    //    changeProgressBarColor(progress);
    }

    return (
        <div className={classes.root}>
            <LinearProgressWithLabel value={bar} />
            {/* <Button onClick={() => setBar(bar + 5)}>Increase +5</Button> */}
        </div>
    );
}
