import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { blue } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    textDecorationColor:'blue',
    borderRadius: 10,
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


function AllTeamCard({teamId}) {
  const classes = useStyles();

  const [teamName, setTeamName] = useState(``);
  const [divisionName, setDivsionName] = useState(``);
  const [numberOfMembers, setNumberOfMembers] = useState('');
  // const bull = <span className={classes.bullet}>•</span>;

  useEffect(() => {
    getTeamDetails();
  }, [])

  const getTeamDetails = () => {
    var axios = require('axios');
    axios.get(`${window.backendURL}/admin/get-team`, { params: { teamId: teamId } }) //get the team details
      .then(res => {
        const team = res.data;
        setTeamName(team.team_name); //Team Name
        setDivsionName(team.division_name); //Division Name
        setNumberOfMembers(team.no_of_members); //No of members
    })
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = useState(0);
    const handleTabs = (e, val) => {
        setValue(val);
    };


  return (
    <Card className={classes.root} variant="outlined">
      <Typography align="center" variant="overline">{teamName} </Typography>
      <br/>

      <table >
        <tr>
            <td><Typography variant="overline">Division:</Typography></td>            
            <td><Typography >{divisionName}</Typography></td>
        </tr>
        <tr>
            <td><Typography variant="overline">Members:</Typography></td>
            <td><Typography>{numberOfMembers}</Typography></td>
        </tr>
    </table>
    <Grid
        container
        spacing={0}
        direction="column"
        alignItems= "flex-end"
        justify="center"
        justifyContent="flex-end"
        style={{ minHeight: '20vh' }}
      >
          
    <Button variant="contained" size="small"> 
        <EditOutlinedIcon style={{ color: blue[500] }} onClick={handleClickOpen}/>
        <Typography >Edit</Typography>
          
    </Button>
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit your Team</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
          <TextField id="standard-basic" label="New Team Name" /><br/>
          <TextField id="standard-basic" label="Team Division" /><br/>
          <TextField id="standard-basic" label="Number of Members" /><br/>
          <br/>
        </DialogContent>
        
          
          <DialogActions>
          
            <Button onClick={handleClose} color="primary" variant="contained"
            component={Link}
            to="/invite-employees"
            onClick={handleClickOpen}
            justifyContent="flex-start"
            style={{ margin: 4 }}
            size="small">
              Save Changes
            </Button>
          </DialogActions>
        </Dialog>

      </Grid>
    </Card>
  );
}
export default AllTeamCard;