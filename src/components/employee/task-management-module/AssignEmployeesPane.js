import { Card, CardContent, CardHeader, TextField } from '@material-ui/core';
import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import EmployeeCardMini from './EmployeeCardMini';
import { Autocomplete } from '@material-ui/lab';
import { AssignDB } from './AssignTasks';

//REPLACE WITH SERVER FETCH

const useStyles = makeStyles({
  pane: {
    maxHeight: '90vh',
    minHeight: '90vh',
    overflowY: 'auto',
    background: '#f9f9f9',
  },


  paneLeft: {
    marginRight: 10,
  },
});

export default function AssignEmployeesPane() {
  const classes = useStyles();

  const { employeeDB } = useContext(AssignDB);

  //for the autocomplete employee name search thing
  const employeeProps = {
    options: employeeDB,
    getOptionLabel: (option) => option.first_name,
  };

  //if displayEmployee IS NOT NULL, the employee list will show one employee card - the selected employee
  //if displayEmployee IS NULLL, employee list will show all the employee cards
  const [displayEmployee, setDisplayEmployee] = useState(null);
  useEffect(() => {
 
  }, [displayEmployee]);

  //gets id of employee thats selected in the dropdown, and sets the displayEmployee variable to the employee object
  function getSelectedEmployee(event, value) {
    if (value) {
      const employeeToDisplay = employeeDB.filter((em) => em.id === value.id);
      setDisplayEmployee(employeeToDisplay[0]);
    } else {
      setDisplayEmployee(value);
    }
  }

  return (
    <Card variant="outlined" elevation={1} className={`${classes.pane} ${classes.paneLeft}`}>
      <CardHeader title={'Available Employees'} />
      <CardContent>
        <Autocomplete
          onChange={getSelectedEmployee}
          {...employeeProps}
          id='name'
          renderInput={(params) => (
            <TextField {...params} label='name' margin='normal' />
          )}
        />
      </CardContent>

      <CardContent>
        {!displayEmployee &&
          employeeDB.map((employee) => {
            return <EmployeeCardMini key={employee.id} employee={employee} />;
          })}
        {displayEmployee && <EmployeeCardMini employee={displayEmployee} />}
      </CardContent>
    </Card>
  );
}
