import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { blue } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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


function UserRoleCards({userRoleId}) {
  const classes = useStyles();

  const [roleName, setRoleName] = useState(``);
  const [roleDescription, setRoleDescription] = useState(``);
  const [rolePermissions, setRolePermissions] = useState([]);

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
  // const bull = <span className={classes.bullet}>•</span>;

  useEffect(() => {
    getUserRoleDetails();
    getUserRolePermissions();
  }, [])

  const getUserRoleDetails = () => {
    var axios = require('axios');
    axios.get(`${window.backendURL}/admin/get-userRole`, userRoleId) //get the team details
      .then(res => {
        const userRole = res.data;
        setRoleName(userRole.roleName); 
        setRoleDescription(userRole.roleDescription); 
    })
  };

  const getUserRolePermissions = () => {
    var axios = require('axios');
    axios.get(`${window.backendURL}/admin/get-permissions`, userRoleId) //get the team details
      .then(res => {
        const permissions = res.data;
        setRoleName(permissions); 
    })
  };



  let PermissionList=rolePermissions.map((permission,index)=>{
    return (<Typography key={index}>
        {permission}
    </Typography>)
  })



  return (
    <Card className={classes.root} variant="outlined">
      <Typography align="left">{roleName}</Typography>

      <table >
        <tr>
            <td><Typography>{roleDescription}</Typography></td>
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
          
   <Button variant="contained" size="small" className="button-edit-role" onClick={handleClickOpen}
           > 
        {/* <EditOutlinedIcon style={{ color: blue[500] }}/> */}
          Permissions
    </Button>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Permissions</DialogTitle>
        <DialogContent>
          <DialogContentText>

          </DialogContentText>
          <form>
            {PermissionList}
                      
          </form>
        </DialogContent>
         
          <DialogActions>
            
          </DialogActions>
        </Dialog>



      </Grid>

    </Card>
  );
}

export default UserRoleCards;