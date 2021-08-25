import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { blue } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';

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


function DivionCard() {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <Typography align="center">Director’s Office</Typography>

      <table >
        <tr>
            <td><Typography>Head of Division:</Typography></td>
            
            <td><Typography>A.T Pathirana</Typography></td>
        </tr>
        <tr>
            <td><Typography>Teams:</Typography></td>
            <td><Typography>2</Typography></td>
        </tr>
        <tr>
            <td><Typography>Emplpoyees:</Typography></td>
            <td><Typography>23</Typography></td>
        </tr>
        <tr>
            <td></td>
            <td>
            <Grid
              container
              spacing={0}
              alignItems= "flex-end"
              justifyContent="flex-end"
              style={{ minHeight: '10vh' }}
            >
                
          <Button variant="outlined" size="small" > 
              <EditOutlinedIcon style={{ color: blue[500] }} />
              <Typography>Edit</Typography>
          </Button>
            </Grid>
              
            </td>
        </tr>
    </table>
    
        
        <p>

        </p>

    </Card>
  );
}

export default DivionCard;