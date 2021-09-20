import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import WelcomeScreen from "./WelcomeScreen";
import EmployeeArea from "./EmployeeArea";
import AdminArea from "./AdminArea";
import NotFound from "./components/NotFound";

// Backend endpoint - set to live for now
window.backendURL = "http://vo.zx-software.com:3040/api/v1"; // Define without trailing '/'
// window.backendURL = "https://localhost:3030/api/v1/docs";

export const AppData = React.createContext();

const App = () => {
  const [appD, setAppD] = React.useState({});

  // Load saved credentials
  React.useEffect(() => {
    var credentials = {};
    if (localStorage.getItem("credentials")) {
      credentials = JSON.parse(localStorage.getItem("credentials"));
      var allKeys = JSON.parse(localStorage.getItem("keys"));
      let tmpAppD = {
        email: credentials.email,
        token: credentials.token,
        isAdmin: credentials.isAdmin,
        user: credentials.user,
        keys: allKeys,
      };
      setAppD(tmpAppD);
    }
  }, []);

  return (
    <AppData.Provider value={[appD, setAppD]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <WelcomeScreen />
          </Route>
          <Route path="/employee">
            <EmployeeArea />
          </Route>
          <Route path="/admin">
            <AdminArea />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </AppData.Provider>
  );
};

export default App;
