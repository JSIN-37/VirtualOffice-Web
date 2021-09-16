import React from "react";
import Grid from "@material-ui/core/Grid";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GroupRoundedIcon from "@material-ui/icons/GroupRounded";
import { Button } from "@material-ui/core";
import { Link } from "@material-ui/core";
import EmployeeTable from "./EmployeeTable";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  apptitle: {
    padding: theme.spacing(2), //16px
    fontWeight: 500,
    textDecoration: "none",
  },
  appbaricon: {
    marginLeft: "240px",
  },
  appbar: {
    background: "#E3E6F5",
    height: 58,
  },
}));

export default function Employees() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container spacing={4}>
      <AppBar
        position="fixed"
        color="primary"
        className={classes.appbar}
        elevation={0}
      >
        <Toolbar>
          <GroupRoundedIcon
            color="primary"
            className={classes.appbaricon}
            fontSize="medium"
          />
          <Typography variant="h6" className={classes.apptitle} color="primary">
            Employees
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid>
        {/* <h1>Employees details go here</h1> */}
        <EmployeeTable/>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="flex-start"
          justify="center"
          justifyContent="flex-start"
          style={{ minHeight: "20vh" }}
        >
        
          <Button
            variant="contained"
            // component={Link}
            // to="/invite-employees"
            color="primary"
            onClick={handleClickOpen}
            style={{ margin: 4 }}
          >
            Invite Employees
          </Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Invite Empoyees of your organization</DialogTitle>
        <DialogContent>
          <DialogContentText>

          </DialogContentText>
          <form>
            
          </form>
        </DialogContent>
          <Grid container item lg={12} spacing={3}>
            <Grid item md={6}>
            Name
            <TextField
            autoFocus
            margin="dense"
            id="name"
            type="email"
            placeholder="Eg: A P Perera"
            fullWidth
            />
              
            </Grid>
            <Grid item md={6} >
              Email
              <TextField
              autoFocus
              margin="dense"
              id="name"
              type="email"
              placeholder="Eg: apperera@gmail.com"
              fullWidth
              />
              
            </Grid>
          </Grid>
        
          <DialogActions>
            <Button onClick={handleClose} color="primary" variant="contained"
            component={Link}
            to="/invite-employees"
            onClick={handleClickOpen}
            justifyContent="flex-start"
            style={{ margin: 4 }}
            size="small">
              Send Invitation
            </Button>
          </DialogActions>
        </Dialog>


        </Grid>
      </Grid>
    </Grid>
  );
}
