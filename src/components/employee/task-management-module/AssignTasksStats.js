import { Card, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  bottom: {
    minHeight: '16vh',
    maxHeight:'16vh'
  },
});

export default function AssignTasksStats() {
  const classes = useStyles();
  return (
    <Card className={classes.bottom}>
      <Typography>Stats section</Typography>
    </Card>
  );
}
