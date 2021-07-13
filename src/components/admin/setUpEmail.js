import React from "react";
import "../../App.css";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import OfficeImage from "../../resources/logo_big.png";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { sizing } from "@material-ui/system";

import { Link } from "react-router-dom";

function SetUpEmail() {
  return (
    
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={6}>
        <Card
          style={{
            width: "30rem",
            textAlign: "center",
            justifyContent: "center",
            alignContent: "center",
            padding: "30px",
            border: "1",
            borderColor: "text.primary",
          }}
        >
          <img src={OfficeImage} className="VO-logo" alt="logo" />
          <Typography >
            Enter an email. <br />
            This will be used to set up your organization
          </Typography>
          <div>
            <TextField
              className="Text-field"
              id="outlined-required"
              style={{ margin: 1 }}
              placeholder="Enter email (Admin)"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            <br />
            <br />
            <Button
              variant="contained"
              component={Link}
              to="/setup-organization"
              color="primary"
            >
              Continue
            </Button>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
}

export default SetUpEmail;
