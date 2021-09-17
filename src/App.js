import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import WelcomeScreen from "./WelcomeScreen";
import EmployeeArea from "./EmployeeArea";
import AdminArea from "./AdminArea";
import NotFound from "./components/NotFound";

// Backend endpoint - set to live for now
window.backendURL = "http://vo.zx-software.com:3040/api/v1"; // Define without trailing '/'

const App = () => {
  const [appD, setAppD] = React.useState({});

  // Load saved credentials
  React.useEffect(() => {
    var credentials = {};
    if (localStorage.getItem("credentials")) {
      credentials = JSON.parse(localStorage.getItem("credentials"));
      let tmpAppD = { email: credentials.email, token: credentials.token };
      setAppD(tmpAppD);
    }
  }, []);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <WelcomeScreen />
          </Route>
          <Route path="/employee">
            <EmployeeArea appD={appD} setAppD={setAppD} />
          </Route>
          <Route path="/admin">
            <AdminArea appD={appD} setAppD={setAppD} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
