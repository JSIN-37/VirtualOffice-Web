import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import React, { useContext } from 'react';
import AssignTasksMiddlePane from './AssignTaskMiddlePane';
import AssignEmployeesPane from './AssignEmployeesPane';
import AssignTaskDrafts from './AssignTaskDrafts';

import { employees } from './employees';
import { TaskManagementData } from '../Tasks';


//Export AssignDB to be available throughout assign components
export const AssignDB = React.createContext();

const useStyles = makeStyles({
  paneContainer: {
    maxHeight: '90vh',
    minHeight: '90vh'
  },
});

export default function Assign() {
  const classes = useStyles();

  //get data context values
  const { assignedTasksDB, setAssignedTasksDB, draftsDB, setDraftsDB, resume, setResume } =
    useContext(TaskManagementData);

  //need to see list of employees when adding a task as well
  const employeeDB = employees;

  //to resume editing a draft
  
  
  //stuff that other components need access to
  const assignDBContextValues = {
    employeeDB,
    assignedTasksDB,
    setAssignedTasksDB,
    draftsDB,
    setDraftsDB,
    resume,
    setResume,
  };

  return (
    <AssignDB.Provider value={assignDBContextValues}>
      <Grid container className={classes.paneContainer}>
        <Grid item xs={3}>
          <AssignEmployeesPane />
        </Grid>
        <Grid item xs={6}>
          <AssignTasksMiddlePane />
        </Grid>
        <Grid item xs={3}>
          <AssignTaskDrafts />
        </Grid>
      </Grid>
    </AssignDB.Provider>
  );
}
