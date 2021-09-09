import React, { useState , useEffect} from 'react'
import Grid from '@material-ui/core/Grid'
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from "@material-ui/core/styles";
import AssessmentIcon from "@material-ui/icons/Assessment";
import { Link } from "react-router-dom";
import MyTasks from "./task-management-module/MyTasks";
import InspectTasks from "./task-management-module/InspectTasks";
import AssignTasks from "./task-management-module/AssignTasks";
import TaskReports from "./task-management-module/TaskReports";

export const TaskManagementData = React.createContext();
const LOCAL_STORAGE_ASSIGNED_TASKS_KEY = 'vo-material.assigned_tasks_array';
const LOCAL_STORAGE_DRAFTS_KEY = 'vo-material.drafts_array';


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

export default function Tasks() {
    console.log("RENDER TASK MANAGEMENT MODULE ROOT - TASKS.JS - ")
    const classes = useStyles();
    //REPLACE WITH SERVER FETCH and WRITE - ASSIGNED TASKS ARRAY
  const [assignedTasksDB, setAssignedTasksDB] = useState([]);
  const [draftsDB, setDraftsDB] = useState([]);
  const [resume, setResume] = useState(false);

  const TaskManagementDataContextVals = {
    assignedTasksDB,
    setAssignedTasksDB,
    draftsDB,
    setDraftsDB,
    resume,
    setResume
  };

  //Read from storage on first render
  useEffect(() => {
    const assignedTasksDBJSON = localStorage.getItem(
      LOCAL_STORAGE_ASSIGNED_TASKS_KEY
    );
    if (assignedTasksDBJSON !== null) {
      setAssignedTasksDB(JSON.parse(assignedTasksDBJSON));
    }

    const draftsDBJSON = localStorage.getItem(LOCAL_STORAGE_DRAFTS_KEY);
    if (draftsDBJSON !== null) {
      setDraftsDB(JSON.parse(draftsDBJSON));
    }
  }, []);

  //Writing to assigned tasks DB when theres a change to the array
  useEffect(() => {
    console.log('writing to AssignedTasksDB -> minion tasks');
    localStorage.setItem(
      LOCAL_STORAGE_ASSIGNED_TASKS_KEY,
      JSON.stringify(assignedTasksDB)
    );
  }, [assignedTasksDB]);

  //Writing to drafts DB when theres a change to the array
  useEffect(() => {
    console.log('writing  to draftsDB -> minion drafts');
    localStorage.setItem(LOCAL_STORAGE_DRAFTS_KEY, JSON.stringify(draftsDB));
  }, [draftsDB]);


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
            <TaskManagementData.Provider value={TaskManagementDataContextVals}>
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
            </TaskManagementData.Provider>
        </Grid>
    );
}