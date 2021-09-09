import React, {  useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core';
import { AssignDB } from './AssignTasks';
import SupervisorTaskCard from './SupervisorTaskCard';

const useStyles = makeStyles({
  pane: {
    minHeight: '93vh',
    maxHeight: '93vh',
    overflowY: 'auto',
    background: '#f9f9f9',
  },

  paneRight: {
    marginLeft: 10,
  },
});

export default function AssignTaskDrafts() {
  console.log("RENDERED ASSIGN TASKS DRAFTS -> RIGHT PANE UNDER ASSIGN")
  const classes = useStyles();

  const { draftsDB, setDraftsDB,setResume } = useContext(AssignDB);

  
  return (
    <Card className={`${classes.pane} ${classes.paneRight}`}>
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
