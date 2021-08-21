import React from "react";
import Grid from "@material-ui/core/Grid";
import AttendanceHeader from "../../components/hod/AttendanceHeader";
// import AttendanceTable from "../../components/hod/AttendanceTable";
import { Button } from "@material-ui/core";

export default function Attendance() {
  return (
    <Grid container spacing={4}>
      <AttendanceHeader />
      <Button
        variant="contained"
        color="primary"
        style={{ marginLeft: "25px" }}
      >
        Export To Excel
      </Button>
    </Grid>
  );
}
