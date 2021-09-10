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

import AssignTasksModal from './AssignTasksModal';
import { format,  parseISO } from 'date-fns';

const useStyles = makeStyles({
  top: {
    minHeight: '65vh',
  },
});

export default function AssignTasksAddTask() {
  
  const classes = useStyles();

  const {
    employeeDB,
    assignedTasksDB,
    setAssignedTasksDB,
    draftsDB,
    setDraftsDB,
    resume,

  } = useContext(AssignDB);

  //input for title and description
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  //for the task deadline -> comes from mui datepicker
  const [selectedDate, handleDateChange] = useState(new Date());

  //FOR MODAL -OPEN AND CLOSE
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  
  //for each task, keep track of who's assigned to it and who's not. Initially, all employees are unassigned
  const [unassignedWorkers, setUnassignedWorkers] = useState(employeeDB.map((em)=>({...em, selected:false})))
  const [assignedWorkers, setAssignedWorkers] = useState([])



  //keep track of whether all task details are provided, or still in draft stage
  const [isComplete, setIsComplete] = useState(false)
  function checkStatus(){
    if(taskTitle === '' || taskDescription ==='' || assignedWorkers.length ===0){
      setIsComplete(false)
      
    }else{
      setIsComplete(true)
    }
  }

  //check if the details are complete whenever these three are done.
  useEffect(()=>{
    checkStatus()
  }, [taskTitle, taskDescription, assignedWorkers])  


  //Resuming a draft
  useEffect(() => {
    setTaskTitle(resume.title || '')
    setTaskDescription(resume.description || '')
    resume.workers && resume.workers.forEach((w)=> addEmployeeToTask(w.id))

    if(resume) {handleDateChange(parseISO(resume.deadline))}
    
    return(() => {
      resume.workers && resume.workers.forEach(w => removeEmployeeFromTask(w.id))
      handleDateChange(new Date())
    })
  }, [resume])


  //what to do when clicking on ADD on an employee card, on the selecting employees for task bit
  function addEmployeeToTask(id){
    const newEmployee = employeeDB.filter((emp)=>emp.id === id)[0]
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
      newUnassigned.selected = false

  }
  
  //what to do when clicking ADD TASK / SAVE DRAFT
  function formatDate(date){
    if(date){
      return format(selectedDate, 'yyyy-MM-dd' )
    }else{
      return ''
    }
  }

  function addTask(){
    const newTask = {
      id : uuidv4(),
      title:taskTitle,
      owner:1,
      description:taskDescription,
      deadline : formatDate(selectedDate),
      workers : assignedWorkers,
      inProgress : false
    }
    setAssignedTasksDB([...assignedTasksDB, newTask])
  }

  function saveDraft(){

    if(taskTitle==='' && taskDescription===''){
      alert('Cannot save empty draft. Add a Title if you wish to save just a date.')
      return
    }

    const newDraft = {
      id : uuidv4(),
      title: taskTitle ,
      description : taskDescription,
      deadline : formatDate(selectedDate),
      workers : assignedWorkers,
      inProgress : false

    }
    setDraftsDB([...draftsDB, newDraft])
  }
  


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
            <Button variant='contained' color='primary' onClick={saveDraft}>
              SAVE DRAFT
            </Button>
          </Grid>
          {isComplete && <Grid item>
            <Button variant='contained' color='primary' onClick={addTask}>
              ADD TASK
            </Button>
          </Grid>}
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
