import React from "react";
import Grid from "@material-ui/core/Grid";
import { Button, Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function EditDivision() {
  const classes = useStyles();
  const [division, setDivision] = React.useState('');

  const handleChange = (event) => {
    setDivision(event.target.value);
  };


  return (
    <Grid container spacing={4}>
      <Grid>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Select Division</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={division}
          onChange={handleChange}
        >
          <MenuItem >Director's Office</MenuItem>
          <MenuItem >Management </MenuItem>
          <MenuItem >Examinatoin Division</MenuItem>
        </Select>
      </FormControl>

        <form>
          {/* <TextField
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
          ></TextField> */}

          <br />
          <br />
        </form>

        <form>
          <Typography>
          Permissions
          </Typography>
          <br />
          <Typography>
          <Checkbox
            defaultChecked
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          Allow Head of Division to add employees
          </Typography>
          <Typography>
          <Checkbox
            defaultChecked
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          Allow employees to assign tasks
          </Typography>
          <Typography>
          <Checkbox
            defaultChecked
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          Allow employees to create teams
          </Typography>
          <Typography>
          <Checkbox
            defaultChecked
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          Allow Head of Division to review tasks
          </Typography>
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
