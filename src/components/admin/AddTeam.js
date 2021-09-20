import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import { Typography, Container, Paper } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import AddBoxRoundedIcon from "@material-ui/icons/AddBoxRounded";
import user from "../../resources/emp_user.svg";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import { useEffect } from "react";
import { AppData } from "../../App";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    boxSizing: "border-box",
  },
  field: {
    width: 370,
    marginTop: 20,
    backgroundColor: "#f9f9f9",
  },
  smallAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  icon: {
    fontSize: 40,
    margin: "10px",
  },
  members: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    minWidth: "100px",
    backgroundColor: "transparent",
    cursor: "pointer",
  },
  button: {
    marginTop: 20,
    marginRight: 20,
  },
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

export default function AddTeam() {
  const [appD] = React.useContext(AppData);
  const classes = useStyles();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [division, setDivision] = React.useState("");
  const [leader, setLeader] = useState("");
  const [divisions, setDivisions] = useState();
  const [nameError, setNameError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [leaderError, setLeaderError] = useState(false);
  const [teamMembers, setTeamMembers] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);

  useEffect(() => {
    getTeamMembers();
    getDivisions();
  }, []);

  useEffect(() => {
    console.log(divisions);
  }, [divisions]);
  const getTeamMembers = () => {
    const config = {
      headers: { Authorization: `Bearer ${appD.token}` },
    };
    var axios = require("axios");
    axios
      .get(`${window.backendURL}/admin/users`, config) //get the ids of all the divisions
      .then((res) => {
        setTeamMembers(res.data);
      });
  };

  //get divsion list
  const getDivisions = () => {
    const config = {
      headers: { Authorization: `Bearer ${appD.token}` },
    };
    var axios = require("axios");
    axios
      .get(`${window.backendURL}/admin/divisions`, config) //get the id and names of all the divisions
      .then((res) => {
        const divisionSet = res.data;
        setDivisions(divisionSet);
      });
  };

  const handleLeaderChange = (e) => {
    let leader = e.target.value;
    setLeader(leader);
  };

  let selectedMemberList = selectedMembers.map((member, index) => {
    return (
      <ListItem key={index}>
        <Grid item xs={2}>
          <Avatar alt="Remy Sharp" src={user} className={classes.smallAvatar} />
        </Grid>
        <ListItemText primary={member.first_name + " " + member.last_name} />
        <ListItemIcon>
          <IconButton
            onClick={() => {
              const myID = member.id;
              let tmpSel = selectedMembers.filter((member) => {
                if (member.id === myID) return false;
                else return true;
              });
              setSelectedMembers(tmpSel);
            }}
          >
            <CloseIcon />
          </IconButton>
        </ListItemIcon>
      </ListItem>
    );
  });

  const [openView, setOpenView] = React.useState(false);
  const handleClose = () => {
    setOpenView(false);
    setSelectedMembers([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError(false);
    setDescriptionError(false);

    if (name === "") {
      setNameError(true);
    }
    if (description === "") {
      setDescriptionError(true);
    }
    if (leader === "") {
      setLeaderError(true);
    }
    if (name && description && leader) {
      const config = {
        headers: { Authorization: `Bearer ${appD.token}` },
      };
      let memberIds = selectedMembers.map((member) => member.id);
      var axios = require("axios");
      console.log({
        name: name,
        description: description,
        leaderID: leader.id,
        divisionID: division,
        memberIDs: memberIds,
      });
      axios
        .post(
          `${window.backendURL}/admin/teams`,
          {
            name: name,
            description: description,
            leaderID: leader.id,
            divisionID: division,
            memberIDs: memberIds,
            sendEmail: true,
          },
          config
        )
        .then((res) => {
          let data = res.data;
          if (data.success) {
            alert("Team has been added!");
          }
        });
    }
  };

  return (
    <Container className={classes.root}>
      <form noValidate autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <TextField
              className={classes.field}
              onChange={(e) => setName(e.target.value)}
              label="Team Name"
              variant="outlined"
              color="primary"
              fullWidth
              required
              error={nameError}
            />

            <TextField
              className={classes.field}
              onChange={(e) => setDescription(e.target.value)}
              label="Description"
              variant="outlined"
              color="primary"
              multiline
              rows={4}
              fullWidth
              required
              error={descriptionError}
            />
            <TextField
              className={classes.field}
              onChange={(e) => setDivision(e.target.value)}
              id="division"
              select
              label="Division"
              value={division}
              variant="outlined"
            >
              {divisions &&
                divisions.map((division, index) => (
                  <MenuItem key={index} value={division.id}>
                    {division.name}
                  </MenuItem>
                ))}
            </TextField>
            <TextField
              className={classes.field}
              onChange={handleLeaderChange}
              label="Leader"
              variant="outlined"
              color="primary"
              fullWidth
              select
              required
              error={leaderError}
            >
              {teamMembers &&
                teamMembers.map((member, index) => (
                  <MenuItem key={index} value={member}>
                    {member.first_name + " " + member.last_name}
                  </MenuItem>
                ))}
            </TextField>
            <br />
            <br />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              className={classes.button}
              onClick={handleSubmit}
              style={{ width: 370 }}
            >
              {`Create and Invite Members`}
            </Button>
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography variant="body1" className={classes.heading}>
              Add Team Members{" "}
            </Typography>
            <hr className={classes.hr} />
            <div style={{ width: 450, marginBottom: "10px" }}>
              <Autocomplete
                freeSolo
                disableClearable
                onChange={(event, value) => {
                  if (value.id) {
                    let tmpSel = [...selectedMembers, value];
                    // https://dev.to/marinamosti/removing-duplicates-in-an-array-of-objects-in-js-with-sets-3fep
                    tmpSel = Array.from(new Set(tmpSel.map((a) => a.id))).map(
                      (id) => {
                        return tmpSel.find((a) => a.id === id);
                      }
                    );
                    setSelectedMembers(tmpSel);
                  }
                }}
                options={teamMembers}
                getOptionLabel={(options) => {
                  if (options.id) {
                    return options.first_name + " " + options.last_name;
                  }
                  return "";
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search Employees"
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
              <List style={{ overflow: "auto" }}>{selectedMemberList}</List>
            </Grid>
            <br />
          </Grid>
          <Grid item xs={12} md={1}></Grid>
        </Grid>
      </form>

      <Dialog onClose={handleClose} open={openView} fullWidth maxWidth={"sm"}>
        <DialogTitle id="simple-dialog-title">
          Add Members
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
                  let tmpSel = [...selectedMembers, value];
                  // https://dev.to/marinamosti/removing-duplicates-in-an-array-of-objects-in-js-with-sets-3fep
                  tmpSel = Array.from(new Set(tmpSel.map((a) => a.id))).map(
                    (id) => {
                      return tmpSel.find((a) => a.id === id);
                    }
                  );
                  setSelectedMembers(tmpSel);
                }
              }}
              options={teamMembers}
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
              {selectedMemberList}
            </List>
          </Grid>
          <Button
            color="primary"
            variant="contained"
            startIcon={<PersonAddIcon />}
            className={classes.dialogButton}
          >
            Add Members
          </Button>
        </Container>
      </Dialog>
    </Container>
  );
}
