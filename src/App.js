import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import WelcomeScreen from "./WelcomeScreen";
import EmployeeArea from "./EmployeeArea";
import AdminArea from "./AdminArea";

// Backend endpoint - set to live for now
window.backendURL = "https://35.232.73.124:3030/api/v1";

const App = () => {
  const [appD, setAppD] = React.useState({});

  return (
    <>
      <Router>
        <Route exact path="/">
          <WelcomeScreen />
        </Route>
        <Route path="/employee">
          <EmployeeArea appD={appD} setAppD={setAppD} />
        </Route>
        <Route path="/admin">
          <AdminArea appD={appD} setAppD={setAppD} />
        </Route>
      </Router>
    </>
  );
};

export default App;
