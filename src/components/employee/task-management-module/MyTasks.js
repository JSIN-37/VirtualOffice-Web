import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect, useRef, useContext} from 'react';
import { MyTaskUtils } from '../../../EmployeeArea';
import InspectTasksPane from './InspectTasksPane';
import MyTasksPane from './MyTasksPane';
import TaskReportsPane from './TaskReportsPane';

export const TaskDB = React.createContext();

const useStyles = makeStyles({
  paneContainer: {
    marginTop: '1vh',
    marginBottom: '1vh',
    minHeight: '93vh',
    background: 'green',
    maxHeight: '93vh',
  },
});

const LOCAL_STORAGE_KEY = 'vo-material.my-tasks';
export default function Tasks() {
  const classes = useStyles();
  // const isFirstRender = useRef(true)

  //taskDB has all the tasks this person has to do.
  //task has -> id, title, description, inProgress(bool), overDue(bool), dueDate(null for now)
  // const [taskDB, setTaskDB] = useState(()=>{
  //   console.log('reading from My Tasks DB')
  //   const arr = localStorage.getItem(LOCAL_STORAGE_KEY)
  //   if(arr!== null){
  //     return JSON.parse(arr)
  //   }else{return []}
  // });
  const {taskDB, setTaskDB} = useContext(MyTaskUtils);

  //inspecting = task that should be displayed in the inspect pane -> with add comment and mark complete btn
  const [inspecting, setInspecting] = useState(null);

  //REPLACE WITH SERVER FETCH
  //get tasks from local storage the first time the app starts
  // useEffect(() => {
  //   const tasksJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
  //   if (tasksJSON != null) {
  //     setTaskDB(JSON.parse(tasksJSON));
  //   }
  //   console.log('read from TaskDB -> My Tasks');
  // }, []);

  //REPLACE WITH SERVER FETCH
  //write changes to taskDB to local storage
  // useEffect(() => {
  //   if(isFirstRender.current){
  //     isFirstRender.current = false
  //     return
  //   }
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(taskDB));
  //   console.log('wrote to taskDB -> My Tasks');
  // }, [taskDB]);

  //add a task to taskDB
  function addTask(task) {
    setTaskDB([...taskDB, task]);

  }

  //when a task is changed (inProgress / overDue/ etc) -> write changes to taskDB
  function handleTaskChange(id, task) {
    const newTaskDB = [...taskDB];
    const index = newTaskDB.findIndex((task) => task.id === id);
    newTaskDB[index] = task;
    setTaskDB(newTaskDB);
  }

  function deleteTask(id) {
    setTaskDB(taskDB.filter((task) => task.id !== id));
  }

  //this is for TaskDB context.
  const taskDataContextValues = {
    taskDB,
    inspecting,
    setInspecting,
    deleteTask,
  };

  return (
    <TaskDB.Provider value={taskDataContextValues}>
      <Grid container className={classes.paneContainer}>
        <Grid item xs={3}>
          <MyTasksPane tasks={taskDB} handleTaskChange={handleTaskChange} />
        </Grid>
        <Grid item xs={6}>
          <InspectTasksPane />
        </Grid>
        <Grid item xs={3}>
          <TaskReportsPane addTask={addTask} />
        </Grid>
      </Grid>
    </TaskDB.Provider>
  );
}
