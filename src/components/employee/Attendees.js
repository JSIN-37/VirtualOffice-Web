import React from "react";
import Grid from "@material-ui/core/Grid";
import AttendeesTable from "./AttendeesTable";

export default function Attendance() {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <AttendeesTable />
            </Grid>
        </Grid>
    );
}
