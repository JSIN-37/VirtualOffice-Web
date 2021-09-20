import { Button, Card, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  click: {
    minHeight: '100px',
    maxHeight: '100%',
    borderRadius: '5px',
  },
  card: {
    minHeight: '150px',
    maxHeight: '150px',
    marginTop: 10,
    background: '#E3E6F5',
  },

  selected: {
    background: '#81c784',
  },

});

export default function EmployeeCardMini(props) {
  let classes = useStyles();
  const employee = props.employee;
  const assign = props.assign;
  const addEmployeeToTask = props.addEmployeeToTask;
  const removeEmployeeFromTask = props.removeEmployeeFromTask
  const setDisplayEmployee = props.setDisplayEmployee;

//console.log("EMPLOYEE = ",props.employee)


  function handleClick() {
    if(employee.selected){
      //currently selected, so remove from task
      removeEmployeeFromTask(employee.id)
    }
    else{
      //curently not selected, so add to task
      addEmployeeToTask(employee.id)
    }
    setDisplayEmployee(null);
  }

  return (
    <Card className={`${classes.card} ${employee.selected? classes.selected : null}`}>
      <Typography>{employee.first_name} {employee.last_name}</Typography>
      <Typography>{employee.email}</Typography>
      {assign && (
        <Grid container justifyContent='flex-end'>
          <Button
            className={classes.addBtn}
            variant='contained'
            color='primary'
            onClick={handleClick}
          >
            {employee.selected && "Remove"}
            {!employee.selected && "Add"}
          </Button>
        </Grid>
      )}
    </Card>
  );
}
