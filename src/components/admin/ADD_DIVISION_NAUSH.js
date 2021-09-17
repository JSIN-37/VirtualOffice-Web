import React from "react";
// import TreeView from "@material-ui/lab/TreeView"; 
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// import TreeItem from "@material-ui/lab/TreeItem";

import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";

import axios from "axios";

const DivisionPanel = ({
  title = "Division Title",
  desc = "Description about division.",
}) => {
  return (
    <>
      <Card>
        <Typography variant="h6">{title}</Typography>
        <Typography>
          {desc}
          <br />
        </Typography>
      </Card>
    </>
  );
};

const getDivisions = async (appD) => {
  const config = {
    headers: { Authorization: `Bearer ${appD.token}` },
  };
  // const bodyParameters = {
  //   key: "value",
  // };
  axios
    .get(`${window.backendURL}/admin/divisions`, config)
    .then(console.log)
    .catch(console.log);
};

export default function ADD_DIVISION_NAUSH({ appD }) {
  React.useEffect(() => {
    const loadData = async () => {
      const divisions = await getDivisions(appD);
      // setEvents(eventsFromMoodle);
    };
    loadData();
  }, [appD]);
  return (
    <Grid container spacing={2}>
      <Grid container>
        {appD.token}
        <Grid item md={6}>
          <Button>Add Division</Button>

          <DivisionPanel />
          <DivisionPanel />
        </Grid>
        <Grid item md={6}>
          <Button>Delete Division</Button>
          <Typography variant="h4">Division title</Typography>
          <Typography variant="h4">Division description</Typography>
          <Typography variant="h4">Division head of division</Typography>
          <Typography variant="h4">Parent division</Typography>
          <Typography variant="h4">Division description</Typography>
          <Button>Save</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
