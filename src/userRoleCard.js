import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    textDecorationColor:'blue',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


function UserRoleCards() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <p align="center">Director</p>
      <small>Secondary Text</small>

      <br/>
      <br/>

    <Button variant="outlined" size="small"> 
        <EditIcon style={{ color: blue[500] }}/>
          Edit
    </Button>
        
        <p>

        </p>

    </Card>
  );
}

export default UserRoleCards;