import React from "react";
import Grid from "@material-ui/core/Grid";
import DivisionCard from "./DivisionCard.js";
import { useState, useEffect } from "react";

function DivisionsOverview() {
  const [divisions, setDivisions] = useState([]);
  
  useEffect(() => {
    getDivisions();
  }, [])

  const getDivisions = () => {
    var axios = require('axios');
    axios.get(`${window.backendURL}/admin/get-divisions`) //get the ids of all the divisions
      .then(res => {
        const divsionIds = res.data;
        setDivisions(divsionIds);
    })
  };
    
  let divisionList=divisions.map((division,index)=>{
    return (<Grid key={index} item xs={4}>
              <DivisionCard divId={division} />
            </Grid>)
  })
  return (
    <Grid container spacing={4}>
      <Grid container item xs={12} spacing={3}>
        {divisionList}
      </Grid>
    </Grid>
  );
}

export default DivisionsOverview;