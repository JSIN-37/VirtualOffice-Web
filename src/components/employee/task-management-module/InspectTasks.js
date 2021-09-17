import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TaskManagementData } from '../Tasks';
import SupervisorTaskCard from './SupervisorTaskCard';
import InspectRightCard from './InspectRightCard';

const useStyles = makeStyles({
  paneContainer: {
    minHeight : '90vh',
    maxHeight : '90vh',
    
    
  },
  left: {
    minHeight : '90vh',
    maxHeight : '90vh',
    overflowY: 'auto',
    marginRight: 5,
  },
});

export default function Inspect() {
  const classes = useStyles();

  const [showTask, setShowTask] = useState(null);

  function cardClickFunction(task) {
    setShowTask(task);
  }

  const { assignedTasksDB } = useContext(TaskManagementData);
  return (
    <Grid container className={classes.paneContainer}>
      <Grid item xs={6}>
        <Card variant="outlined" elevation={1} className={classes.left}>
          <CardHeader title='Assigned Tasks' />
          <CardContent>
            {assignedTasksDB.map((task) => {
              return (
                <SupervisorTaskCard
                  key={task.id}
                  task={task}
                  cardClickFunction={cardClickFunction}
                />
              );
            })}
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={6}>
        {showTask && <InspectRightCard showTask={showTask} />}
        {!showTask && <Typography>Select Task to show</Typography>}
      </Grid>
    </Grid>
  );
}
