import React, { useState } from "react";
import ShowMoreText from "react-show-more-text";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        textDecorationColor: "blue",
        borderRadius: 10,
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    pos: {
        marginBottom: 12,
    },
    title: {
        color: '#3F51B4',
        fontSize: "20px",
        textDecoration: "underline"
    },
    info: {
        fontSize: '17px',
        color: '#3F51B4',
        textAlign: 'left',
        fontWeight: '400',
    },
    data: {
        fontSize: '17px',
        color: '#3F51B4',
        textAlign: 'right',
        fontWeight: '400',
    },
    data2: {
        fontSize: '15px',
        color: '#3F51B4',
        fontWeight: '400',
        tetextAlign: 'justify',
        marginLeft: 100
    },

});

function DivionCard({ divData }) {
    const classes = useStyles();
    const [expand, setExpand] = useState(false);
    const onClick = () => {
        setExpand(!expand);
    };


    // const bull = <span className={classes.bullet}>•</span>;
    // const [divisionName, setDivisionName] = useState(``);
    // const [divisionHead, setDivsionHead] = useState(``);
    // const [divisionTeamCount, setDivisionTeamCount] = useState(0);
    // const [divisionEmpCount, setDivisionEmpCount] = useState(0);

    // useEffect(() => {
    //   getDivisionDetails();
    // }, []);

    // const getDivisionDetails = () => {
    //   var axios = require("axios");
    //   axios
    //     .get(`${window.backendURL}/admin/get-division-details`, {
    //       params: { divisionId: divId },
    //     }) //get the details of the deivision
    //     .then((res) => {
    //       const division = res.data;
    //       setDivisionName(division.name); //Division Name
    //       setDivsionHead(division.head); //Name of the head of division
    //       setDivisionTeamCount(division.teamCount); //No of teams in the division
    //       setDivisionEmpCount(division.empCount); //No of employees in the division
    //     });
    // };
    return (
        <Card variant="outlined" elevation={1} style={{ borderRadius: '10px' }}>
            <CardHeader style={{ paddingLeft: '25px' }} classes={{ title: classes.title }}
                title={divData.name}
            />
            <CardContent style={{ paddingTop: '0' }}>
                <Grid container style={{ padding: '8px' }}>
                    <Grid item xs={6}>
                        <Typography variant="body1" className={classes.info}>
                            Head of Division:
                        </Typography>
                        <Typography variant="body1" className={classes.info}>
                            Teams:
                        </Typography>
                        <Typography variant="body1" className={classes.info}>
                            Employees:
                        </Typography>
                        <Typography variant="body1" className={classes.info}>
                            Description:
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body1" pb={1} className={classes.data}>
                            {divData.hod_id}
                        </Typography>
                        <Typography variant="body1" pb={1} className={classes.data}>
                            {divData.team_count}
                        </Typography>
                        <Typography variant="body1" pb={1} className={classes.data}>
                            {divData.employee_count}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} >
                        <Typography variant="body2"  >
                            <ShowMoreText className={classes.data2} lines={3} more={"Show More"} less={"Show Less"} onClick={onClick} expanded={expand}>
                                {divData.description}
                            </ShowMoreText>
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default DivionCard;
