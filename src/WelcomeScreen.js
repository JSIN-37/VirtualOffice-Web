import { Link as RouterLink } from "react-router-dom";

import Button from "@material-ui/core/Button";

const WelcomeScreen = () => {
  return (
    <center>
      <h1>Add something here guys</h1>
      <h1>Welcome to VirtualOffice</h1>
      <h1>Login here,</h1>
      <Button
        variant="contained"
        color="primary"
        component={RouterLink}
        to="/employee"
      >
        Employee Login
      </Button>
      <br />
      <br />
      <Button
        variant="contained"
        color="primary"
        component={RouterLink}
        to="/admin"
      >
        Admin Login
      </Button>
    </center>
  );
};

export default WelcomeScreen;
