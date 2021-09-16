import React from "react";
import Grid from "@material-ui/core/Grid";
import DivisionCard from "./DivisionCard.js";
import { useState, useEffect } from "react";

function DivisionsOverview({ appD }) {
  const [divisions, setDivisions] = useState([]);

  useEffect(() => {
    getDivisions(appD);
  }, [appD]);

  const getDivisions = (appD) => {
    const config = {
      headers: { Authorization: `Bearer ${appD.token}` },
    };
    var axios = require("axios");
    axios
      .get(`${window.backendURL}/admin/divisions`, config) //get the ids of all the divisions
      .then((res) => {
        setDivisions(res.data);
      });
  };

  let divisionList = divisions.map((division, index) => {
    return (
      <Grid key={index} item xs={4}>
        <DivisionCard divData={division} />
      </Grid>
    );
  });
  return (
    <Grid container spacing={4}>
      <Grid container item xs={12} spacing={3}>
        {divisionList}
      </Grid>
    </Grid>
  );
}

export default DivisionsOverview;
