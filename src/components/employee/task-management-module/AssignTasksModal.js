import {
  Button,
  Card,
  CardContent,
  Grid,
  Modal,
  TextField,
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

import React, { useState } from 'react';
import EmployeeCardMini from './EmployeeCardMini';

const useStyles = makeStyles({
  modal: {
    minwidth: '60%',
    maxWidth: '60%',
    minheight: '80%',
    maxHeight: '80%',
    overflow: 'auto',
    marginLeft: '20%',
    marginTop: '5%',
  },
  modalChild: {
    padding: 20,
  },

  stick: {
    top: 0,
    position: 'sticky',
  },
});

export default function AssignTasksModal(props) {
  const classes = useStyles();
  const { setOpen,  open, addEmployeeToTask, removeEmployeeFromTask } = props;
 

  //used when selecting employees for task -> select a name from autocomplete and only that will show
  const [displayEmployee, setDisplayEmployee] = useState(null);

  //show only the employee with the employee id = value inside the selecting employees for task pane
  function showSelectedEmployee(event, value) {
    if (value) {
      const employeeToDisplay = props.unassignedWorkers.filter((em) => em.id === value.id);
      setDisplayEmployee(employeeToDisplay[0]);
    } else {
      setDisplayEmployee(value);
    }
  }

  //For autocomplete search thing
  const employeeProps = {
    options: props.unassignedWorkers,
    getOptionLabel: (option) => `${option.first_name} ${option.last_name}`,
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal className={classes.modal} open={open} onClose={handleClose}>
      <Grid container>
        <Grid item xs={12} className={classes.stick}>
          <Card className={classes.modalChild}>
            <Grid container alignItems='center'>
              <Grid item xs={9}>
                <Autocomplete
                  {...employeeProps}
                  id='bla-bla'
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label='includeInputInList'
                      margin='normal'
                    />
                  )}
                  onChange={showSelectedEmployee}
                />
              </Grid>

              <Grid item>
                <Button
                  variant='outlined'
                  color='primary'
                  onClick={handleClose}
                >
                  Finished
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card className={classes.modalChild}>
            <CardContent>
              {!displayEmployee &&
                props.unassignedWorkers.map((emp) => {
                  return (
                    <EmployeeCardMini
                      key={emp.id}
                      employee={emp}
                      assign={true}
                      addEmployeeToTask={addEmployeeToTask}
                      removeEmployeeFromTask={removeEmployeeFromTask}
                      setDisplayEmployee={setDisplayEmployee}
                    />
                  );
                })}
              {displayEmployee && (
                <EmployeeCardMini
                key={displayEmployee.id}
                  employee={displayEmployee}
                  assign={true}
                  addEmployeeToTask={addEmployeeToTask}
                  removeEmployeeFromTask={removeEmployeeFromTask}
                  setDisplayEmployee={setDisplayEmployee}
                />
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Modal>
  );
}
