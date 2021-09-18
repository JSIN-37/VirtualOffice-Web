import React from "react";
import Grid from "@material-ui/core/Grid";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Tab } from "@material-ui/core";
import { Tabs } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GroupRoundedIcon from "@material-ui/icons/GroupRounded";
import EmployeeOverview from "./EmployeeOverview";
import AssignUserRole from "./AssignUserRole"
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    apptitle: {
        padding: theme.spacing(2), //16px
        fontWeight: 500,
        textDecoration: "none",
    },
    appbar: {
        background: "#E3E6F5",
        height: 58,
    },
    appbaricon: {
        marginLeft: "240px",
    },
    tab: {
        color: "#3F51B4",
        textTransform: "none",
        fontSize: "16px",
    },
    indicator: {
        backgroundColor: "#3F51B4",
    },
}));

export default function Employees(appD) {
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
                elevation={0}
            >
                <Toolbar>
                    <GroupRoundedIcon
                        color="primary"
                        className={classes.appbaricon}
                        fontSize="medium"
                    />
                    <Typography variant="h6" className={classes.apptitle} color="primary">
                        Employees
                    </Typography>
                    <Tabs
                        value={value}
                        onChange={handleTabs}
                        classes={{ indicator: classes.indicator }}>
                        <Tab label="Overview" className={classes.tab} />
                        <Tab label="Edit Employee Details" className={classes.tab} />
                    </Tabs>
                </Toolbar>
            </AppBar>
            <TabPanel value={value} index={0}>
                <EmployeeOverview appD={appD} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <AssignUserRole />
            </TabPanel>
        </Grid>
    );
}