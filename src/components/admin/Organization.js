import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BusinessRoundedIcon from "@material-ui/icons/BusinessRounded";
import { Tabs } from "@material-ui/core";
import { Tab } from "@material-ui/core";
import EditOrganization from "./EditOrganization";
import OrganizationOverview from "./OrganizationOverview";


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    apptitle: {
        padding: theme.spacing(2), //16px
        fontWeight: 500,
        textDecoration: "none",
    },
    appbaricon: {
        marginLeft: "240px",
    },
    appbar: {
        background: "#E3E6F5",
        height: 58,
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    appspace: {
        padding: theme.spacing(2),//16px
        fontWeight: 500,
        color: "#E3E6F5"
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

export default function Organization() {
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
                    <BusinessRoundedIcon
                        color="primary"
                        className={classes.appbaricon}
                        fontSize="medium"
                    />
                    <Typography variant="h6" className={classes.apptitle} color="primary">
                        Organization
                    </Typography>
                    <Tabs value={value} onChange={handleTabs} classes={{ indicator: classes.indicator }} >
                        <Tab label="Overview" className={classes.tab} />
                        <Tab label="Edit Organization" className={classes.tab} />
                    </Tabs>
                </Toolbar>
            </AppBar>
            <TabPanel value={value} index={0}>
                <OrganizationOverview />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <EditOrganization />
            </TabPanel>

        </Grid>
    );
}
