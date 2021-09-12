import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { blue } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';

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


function DivionCard({ divId }) {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
  const [divisionName, setDivisionName] = useState(``);
  const [divisionHead, setDivsionHead] = useState(``);
  const [divisionTeamCount, setDivisionTeamCount] = useState(0);
  const [divisionEmpCount, setDivisionEmpCount] = useState(0);
  
  useEffect(() => {
    getDivisionDetails();
  }, [])

  const getDivisionDetails = () => {
    var axios = require('axios');
    axios.get(`${window.backendURL}/admin/get-division`,  { params: { divisionId: divId } }) //get the details of the deivision
      .then(res => {
        const division = res.data;
        setDivisionName(division.name); //Division Name
        setDivsionHead(division.head); //Name of the head of division
        setDivisionTeamCount(division.teamCount); //No of teams in the division
        setDivisionEmpCount(division.empCount); //No of employees in the division
    })
  };
  return (
    <Card className={classes.root} variant="outlined">
      <Typography align="center">{divisionName}</Typography>
      <br/>

      <table >
        <tr>
            <td><Typography>Head of Division:</Typography></td>            
            <td><Typography>{divisionHead}</Typography></td>
        </tr>
        <tr>
            <td><Typography>Teams:</Typography></td>
            <td><Typography>{divisionTeamCount}</Typography></td>
        </tr>
        <tr>
            <td><Typography>Emplpoyees:</Typography></td>
            <td><Typography>{divisionEmpCount}</Typography></td>
        </tr>
        <tr>
            <td></td>
            <td>
            <Grid
              container
              spacing={0}
              alignItems= "flex-end"
              justifyContent="flex-end"
              style={{ minHeight: '15vh' }}
            >
                
          {/* <Button variant="contained" size="small" justifyContent="flex-end"> 
              <EditOutlinedIcon style={{ color: blue[500] }} />
              <Typography>Edit</Typography>
          </Button> */}
            </Grid>
              
            </td>
        </tr>
    </table>
 
    </Card>
  );
}

export default DivionCard;