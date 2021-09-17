import React, {  useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core';
import { AssignDB } from './AssignTasks';
import SupervisorTaskCard from './SupervisorTaskCard';

const useStyles = makeStyles({
  pane: {
    maxHeight: '90vh',
    minHeight: '90vh',
    overflowY: 'auto',
    background: '#f9f9f9',
  },

  paneRight: {
    marginLeft: 10,
  },
});

export default function AssignTaskDrafts() {
  const classes = useStyles();

  const { draftsDB, setDraftsDB,setResume } = useContext(AssignDB);

  
  return (
    <Card variant="outlined" elevation={1} className={`${classes.pane} ${classes.paneRight}`}>
      <CardContent>
        {draftsDB.map((draft) => {
          return (
            <SupervisorTaskCard
              key={draft.id}
              task={draft}
              cardClickFunction={setResume}
              assign={true}
              draftsDB={draftsDB}
              setDraftsDB={setDraftsDB}

            />
          );
        })}
      </CardContent>
    </Card>
  );
}
