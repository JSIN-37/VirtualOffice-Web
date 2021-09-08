import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
} from '@material-ui/core';
import React, { Fragment, useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { v4 as uuidv4 } from 'uuid';
import { AssignDB } from './AssignTasks';

import { format } from 'date-fns';
import AssignTasksModal from './AssignTasksModal';

const useStyles = makeStyles({
  top: {
    minHeight: '65vh',
  },
});

export default function AssignTasksAddTask() {
  console.log('ATAT');
  
  const classes = useStyles();

  const {
    employeeDB,
    assignedTasksDB,
    setAssignedTasksDB,
    draftsDB,
    setDraftsDB,
    resume,
    setResume,
  } = useContext(AssignDB);

  
  
  
  
  //input for title and description
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  
  //for each task, keep track of who's assigned to it and who's not. Initially, all employees are unassigned
  const [unassignedWorkers, setUnassignedWorkers] = useState(employeeDB.map((em)=>({...em, selected:false})))
  const [assignedWorkers, setAssignedWorkers] = useState([])
  console.log("Unassigned -> ",unassignedWorkers)
  console.log("Assigned -> ",assignedWorkers)


  //keep track of whether all task details are provided, or still in draft stage
  const [isWorkers, setIsWorkers] = useState(false)
  
  
  //what to do when clicking on ADD on an employee card, on the selecting employees for task bit
  function addEmployeeToTask(id){
    const newEmployee = employeeDB.filter((emp)=>emp.id === id)[0]
    console.log("ADDING EMP WITH ID -> ", id, newEmployee)
    setAssignedWorkers([...assignedWorkers, newEmployee])
    //set selected : true inside unassigned array
    const newUnassigned = unassignedWorkers.filter((em)=> em.id===id)[0]
    newUnassigned.selected = true
    
  }

  function removeEmployeeFromTask(id){
      const newAssigned = assignedWorkers.filter((em)=>em.id!==id)
      setAssignedWorkers(newAssigned)
      //set selected : false for this employee in the unassigned emps array
      const newUnassigned = unassignedWorkers.filter((em)=> em.id===id)[0]
      console.log("FOUND REMOVAL -> ",newUnassigned)
      newUnassigned.selected = false
      console.log("REMOVED REMOVAL -> ",newUnassigned)
      console.log("NEW UNASS ARRAY ", unassignedWorkers)
  }
  
  //what to do when clicking ADD TASK / SAVE DRAFT
  
  //for the task deadline -> comes from mui datepicker
  const [selectedDate, handleDateChange] = useState(new Date());

  //FOR MODAL -OPEN AND CLOSE
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  let btnText = "Save Draft"

  return (
    <Card className={classes.top}>
      <CardContent>
        <TextField
          value={taskTitle}
          variant='outlined'
          label='add a title'
          fullWidth
          onChange={(e)=>{setTaskTitle(e.target.value)}}
        />
      </CardContent>
      <CardContent>
        <TextField
          value={taskDescription}
          variant='outlined'
          label='more details, instructions etc..'
          fullWidth
          multiline
          rows={10}
          onChange={(e)=>{setTaskDescription(e.target.value)}}
        />
      </CardContent>
      <CardContent>
        <Grid container justifyContent='space-evenly'>
          <Grid item>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Fragment>
                <DatePicker
                  label='Pick Deadline'
                  value={selectedDate}
                  onChange={handleDateChange}
                  clearable
                  animateYearScrolling
                />
              </Fragment>
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item>
            <Button onClick={handleOpen}>Add Employees</Button>
          </Grid>
          <Grid item>
            <Button variant='contained' color='primary' >
              {btnText}
            </Button>
          </Grid>
        </Grid>
      </CardContent>
      <AssignTasksModal
        open={open}
        setOpen={setOpen}
        unassignedWorkers={unassignedWorkers}
        addEmployeeToTask={addEmployeeToTask}
        removeEmployeeFromTask={removeEmployeeFromTask}

      />
    </Card>
  );
}
