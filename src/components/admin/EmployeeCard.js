// import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import axios from "axios";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: "50vw",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function MemberCard({
  id,
  email,
  first_name,
  last_name,
  contact_number,
  members,
  setMembers,
}) {
  const classes = useStyles();

  function deleteMember() {
    const config = {
      headers: { Authorization: `Bearer ${window.token}` },
    };
    axios
      .delete(`${window.backendURL}/admin/user/${id}`, config)
      .then((res) => {
        const data = res.data;
        if (data.success) {
          setMembers(members.filter((member) => member.id !== id));
          alert("User was deleted!");
        }
      });
  }

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {email}
        </Typography>
        <Typography variant="h5" component="h2">
          {`${first_name} ${last_name}`}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {contact_number}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Edit</Button> */}
        <Button size="small" onClick={() => deleteMember()}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
