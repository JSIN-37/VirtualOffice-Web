import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from "@material-ui/core/styles";
import AssessmentIcon from "@material-ui/icons/Assessment";
import { Link } from "react-router-dom";
import MyTasks from "./MyTasks";
import InspectTasks from "./InspectTasks";
import AssignTasks from "./AssignTasks";
import TaskReports from "./TaskReports";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    apptitle: {
        padding: theme.spacing(2),//16px
        fontWeight: 500,
        textDecoration: 'none'
    }
    ,
    appbar: {
        background: '#E3E6F5',
        height: 58,
    },
    appbaricon: {
        marginLeft: "240px"
    },
    tab: {
        color: '#3F51B4',
        textTransform: 'none',
        fontSize: '16px'
    },
    indicator: {
        backgroundColor: '#3F51B4'
    },
}));

export default function TeamHeader() {
    const classes = useStyles();

    const [value, setValue] = useState(0);
    const handleTabs = (e, val) => {
        setValue(val);
    };

    const TabPanel = ({ children, index, value }) => {
        return <>{value === index && <>{children}</>}</>;
    };
    return (
        <Grid container spacing={4}>
            <AppBar
                position="fixed"
                color="primary"
                className={classes.appbar}
                elevation={0}>
                <Toolbar>
                    <AssessmentIcon color="primary" className={classes.appbaricon} fontSize="medium" />
                    <Typography variant="h6" className={classes.apptitle} color="primary" component={Link} to="/tasks">
                        Tasks
                    </Typography>
                    <Tabs value={value} onChange={handleTabs} classes={{ indicator: classes.indicator }}>
                        <Tab label="My Tasks" className={classes.tab} />
                        <Tab label="Inspect" className={classes.tab} />
                        <Tab label="Assign" className={classes.tab} />
                        <Tab label="Reports" className={classes.tab} />
                    </Tabs>
                </Toolbar>
            </AppBar>
            <TabPanel value={value} index={0}>
                <MyTasks />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <InspectTasks />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <AssignTasks />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <TaskReports />
            </TabPanel>
        </Grid>
    );
}