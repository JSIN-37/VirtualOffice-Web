import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { blue } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import DashboardIcon from "@material-ui/icons/Dashboard";

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


function AllTeamCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <Typography align="center">Design Team </Typography>
      

      <table >
        <tr>
            <td><Typography >Division:</Typography></td>
            
            <td><Typography >General Administration</Typography></td>
        </tr>
        <tr>
            <td><Typography >Members:</Typography></td>
            <td><Typography>2</Typography></td>
        </tr>
    </table>
    <br/>
    <Grid
        container
        spacing={0}
        direction="column"
        alignItems= "flex-end"
        justify="center"
        justifyContent="flex-end"
        style={{ minHeight: '20vh' }}
      >
          
    <Button variant="outlined" size="small"> 
        <EditOutlinedIcon style={{ color: blue[500] }}/>
        <Typography >Edit</Typography>
          
    </Button>
      </Grid>
        
        <p>

        </p>

    </Card>
  );
}

export default AllTeamCard;