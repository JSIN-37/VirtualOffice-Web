import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import AddBoxRoundedIcon from "@material-ui/icons/AddBoxRounded";
import user from "../../resources/emp_user.svg";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
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
  button: {
    marginTop: 20,
    marginRight: 20,
  },
}));

export default function AddTeam({ appD }) {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [leader, setLeader] = useState("");
  const [nameError, setNameError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [leaderError, setLeaderError] = useState(false);
  const [division, setDivision] = React.useState("");

  const handleChange = (event) => {
    setDivision(event.target.value);
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
      var axios = require("axios");
      axios
        .post(
          `${window.backendURL}/interim/teams`,
          {
            name: name,
            leader: leader,
            division: division,
            description: description,
          },
          config
        )
        .then((res) => {
          let data = res.data;
          console.log(data);
        });
    }
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
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
            id="division"
            select
            label="Division"
            value={division}
            onChange={handleChange}
            variant="outlined"
          >
            <MenuItem value="None">None</MenuItem>
            <MenuItem value="SomeDivision">Some Division</MenuItem>
          </TextField>
          <TextField
            className={classes.field}
            onChange={(e) => setLeader(e.target.value)}
            label="Leader"
            variant="outlined"
            color="primary"
            fullWidth
            required
            error={leaderError}
          />
          <br />
          <Link href="#">
            <Typography variant="body1">
              <AddBoxRoundedIcon className={classes.icon} color="primary" />
              Add Members
            </Typography>
          </Link>
          <br />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            className={classes.button}
          >
            Submit
          </Button>
          <Button
            type="reset"
            color="primary"
            variant="outlined"
            className={classes.button}
          >
            Cancel
          </Button>
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography variant="body1" className={classes.heading}>
            Team Members{" "}
          </Typography>
          <hr className={classes.hr} />
          <Grid container>
            <Grid item xs={2}>
              <Avatar
                alt="Remy Sharp"
                src={user}
                className={classes.smallAvatar}
              />
            </Grid>
            <Grid item xs={10} style={{ marginTop: "10px" }}>
              <Typography variant="body2" align="left">
                A.T. Pathirana
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={1}></Grid>
      </Grid>
    </form>
  );
}
