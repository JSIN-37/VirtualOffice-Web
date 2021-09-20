import React from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  dialog: {
    padding: "0px 20px",
  },
  listItem: {
    margin: "5px 10px",
  },
  dialogButton: {
    margin: "10px 0 30px",
  },
}));

export const EmployeeSelect = ({
  dialogOpen,
  setDialogOpen,
  selectedEmployees,
  setSelectedEmployees,
  callback,
}) => {
  const classes = useStyles();
  const [employees, setEmployees] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(`${window.backendURL}/admin/users`) //get all the users lol
      .then((res) => {
        setEmployees(res.data);
      });
  }, []);
  const handleClose = () => {
    setDialogOpen(false);
  };
  let selectedEmployeeList = selectedEmployees.map((employee, index) => {
    return (
      <ListItem key={index}>
        <ListItemText
          primary={employee.first_name + " " + employee.last_name}
        />
        <ListItemIcon>
          <IconButton
            onClick={() => {
              const myID = employee.id;
              let tmpSel = selectedEmployees.filter((employee) => {
                if (employee.id === myID) return false;
                else return true;
              });
              setSelectedEmployees(tmpSel);
            }}
          >
            <CloseIcon />
          </IconButton>
        </ListItemIcon>
      </ListItem>
    );
  });

  return (
    <Dialog onClose={handleClose} open={dialogOpen} fullWidth maxWidth={"sm"}>
      <DialogTitle id="simple-dialog-title">
        Select Employees
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Container
        align="center"
        justifycontent="center"
        className={classes.dialog}
      >
        <div style={{ width: 450, marginBottom: "10px" }}>
          <Autocomplete
            freeSolo
            disableClearable
            onChange={(event, value) => {
              if (value.id) {
                let tmpSel = [...selectedEmployees, value];
                // https://dev.to/marinamosti/removing-duplicates-in-an-array-of-objects-in-js-with-sets-3fep
                tmpSel = Array.from(new Set(tmpSel.map((a) => a.id))).map(
                  (id) => {
                    return tmpSel.find((a) => a.id === id);
                  }
                );
                setSelectedEmployees(tmpSel);
              }
            }}
            options={employees}
            getOptionLabel={(options) => {
              if (options.id) {
                return options.first_name + " " + options.last_name;
              }
              return "";
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search input"
                margin="normal"
                variant="outlined"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <SearchIcon></SearchIcon>
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </div>
        <Grid
          container
          align="center"
          className={classes.listItem}
          direction="column"
        >
          <List style={{ overflow: "auto", maxHeight: 100 }}>
            {selectedEmployeeList}
          </List>
        </Grid>
        {selectedEmployeeList.length ? (
          <Button
            color="primary"
            variant="contained"
            startIcon={<CheckCircleIcon />}
            className={classes.dialogButton}
            onClick={() => {
              handleClose();
              console.log("worko");
              callback();
            }}
          >
            Confirm
          </Button>
        ) : (
          ""
        )}
      </Container>
    </Dialog>
  );
};
