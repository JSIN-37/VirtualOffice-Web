import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { blue } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    textDecorationColor:'blue',
    borderRadius:10,
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
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <Typography align="left">Director</Typography>

      <table >
        <tr>
            <td><Typography>Secondary Text</Typography></td>
        </tr>
      </table>
        

        
    <Grid
        container
        spacing={0}
        direction="column"
        alignItems= "flex-end"
        justify="center"
        justifyContent="flex-end"
        style={{ minHeight: '10vh' }}
      >
          
    {/* <Button variant="contained" size="small" className="button-edit-role" 
            component={Link}
            to="/edit-role"> 
        <EditOutlinedIcon style={{ color: blue[500] }}/>
          Edit
    </Button> */}
      </Grid>

    </Card>
  );
}

export default UserRoleCards;