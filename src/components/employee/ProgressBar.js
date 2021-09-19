import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

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

export default function ProgressBar() {
    const classes = useStyles();
    const [bar, setBar] = useState(50);

    return (
        <div className={classes.root}>
            <LinearProgressWithLabel value={bar} />
            <Button onClick={() => setBar(bar + 5)}>Increase +5</Button>
        </div>
    );
}
