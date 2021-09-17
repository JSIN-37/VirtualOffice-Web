import React from 'react';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TempAddTask from './TempAddTask';

const useStyles = makeStyles({
  pane: {
    minHeight : '90vh',
    maxHeight : '90vh',
    overflow : 'auto'
  },
});

export default function TaskReportsPane(props) {
  const addTask = props.addTask;
  const classes = useStyles();
  return (
    <Card variant="outlined" elevation={1} className={classes.pane}>
      <TempAddTask addTask={addTask} />
    </Card>
  );
}
