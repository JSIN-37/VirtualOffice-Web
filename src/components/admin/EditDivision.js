import React from "react";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";

export default function EditDivision() {
  return (
    <Grid container spacing={4}>
      <Grid>
        <form>
          <TextField
            className="Text-field"
            id="filled-full-width"
            style={{ margin: 4 }}
            label="Division Name"
            placeholder="External Degrees Centre "
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          ></TextField>

          <br />
          <br />

          <TextField
            className="Text-field"
            id="filled-full-width"
            style={{ margin: 4 }}
            label="Head of Division "
            placeholder="D.R. Siva"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          ></TextField>

          <br />
          <br />

          <TextField
            className="Text-field"
            id="filled-full-width"
            style={{ margin: 4 }}
            label="Description"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          ></TextField>

          <br />
          <br />
        </form>

        <form>
          Permissions
          <br />
          <Checkbox
            defaultChecked
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          Allow Head of Division to add employees
          <br />
          <Checkbox
            defaultChecked
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          Allow employees to assign tasks
          <br />
          <Checkbox
            defaultChecked
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          Allow employees to create teams
          <br />
          <Checkbox
            defaultChecked
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          Allow Head of Division to review tasks
          <br />
        </form>

        <br />
        <Button color="primary" variant="contained">
          Save Changes
        </Button>

        <Button color="primary" variant="outlined">
          Cancel
        </Button>
        

      </Grid>
    </Grid>
  );
}
