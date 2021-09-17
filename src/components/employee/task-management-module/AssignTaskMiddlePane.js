import { Card, CardContent } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AssignTasksAddTask from './AssignTasksAddTask';
import AssignTasksStats from './AssignTasksStats';

const useStyles = makeStyles({
  pane: {
    maxHeight: '90vh',
    minHeight: '90vh',
    overflowY: 'auto',
    background: '#f9f9f9',
  },
});
export default function AssignTasksMiddlePane() {
  const classes = useStyles();
  return (
    <Card variant="outlined" elevation={1} className={`${classes.pane}`}>
      <CardContent>
        <AssignTasksAddTask/>

      </CardContent>

      <CardContent>
        <AssignTasksStats />
      </CardContent>
    </Card>
  );
}
