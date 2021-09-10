import React from "react";
import Grid from "@material-ui/core/Grid";
import DivisionCard from "./DivisionCard.js";

export default function DivisionsOverview() {
  return (
    <Grid container spacing={4}>
      <Grid container item xs={12} spacing={3}>
        <Grid item xs={4}>
          <DivisionCard />
        </Grid>

        <Grid item xs={4}>
          <DivisionCard />
        </Grid>

        <Grid item xs={4}>
          <DivisionCard />
        </Grid>

        <Grid item xs={4}>
          <DivisionCard />
        </Grid>
      </Grid>
    </Grid>
  );
}
