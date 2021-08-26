import React from "react";
import "../../App.css";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import OfficeImage from "../../resources/logo_big.png";
import Grid from "@material-ui/core/Grid";
import { sizing } from "@material-ui/system";
import ClearIcon from "@material-ui/icons/Clear";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Typography } from "@material-ui/core";

function InviteMembers() {
  const [name, setName] = React.useState(``);
  const [email, setEmail] = React.useState(``);

  let history = useHistory();

  const sendInvite = () => {
    axios
      .post(`${window.backendURL}/admin/user`, {
        first_name: name,
        email: email,
      })
      .then((res) => {
        let data = res.data;
        if (data.success) {
          alert("Employee was invited to join!");
          history.push("/employees");
        } else {
          alert("Inviting failed!");
        }
      });
  };

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
            width: "40rem",
            textAlign: "center",
            justifyContent: "center",
            alignContent: "center",
            padding: "20px",
            border: "1",
            borderColor: "text.primary",
          }}
        >
          <img src={OfficeImage} className="VO-logo" alt="logo" />
          <h2 align="left">Invite Members</h2>
         

          <table width="100%">
            <tr>
              <th><Typography>Name</Typography></th>

              <th><Typography>Email Address</Typography></th>

              <th></th>
            </tr>

            <tr>
              <td>
                <TextField
                  id="Text"
                  placeholder="John Doe"
                  variant="outlined"
                  onChange={(e) => setName(e.target.value)}
                />
              </td>

              <td>
                <TextField
                  id="Text"
                  placeholder="E mail"
                  variant="outlined"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </td>

              <td>
                <ClearIcon />
              </td>
            </tr>
          </table>

          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="flex-start"
            justify="center"
            justifyContent="flex-start"
            style={{ minHeight: "8vh" }}
          >
            <Button color="primary">Add New</Button>
          </Grid>

          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="flex-end"
            justify="center"
            justifyContent="flex-end"
            style={{ minHeight: "8vh" }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                sendInvite();
              }}
            >
              Send Invitation
            </Button>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}

export default InviteMembers;
