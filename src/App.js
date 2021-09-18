import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import WelcomeScreen from "./WelcomeScreen";
import EmployeeArea from "./EmployeeArea";
import AdminArea from "./AdminArea";
import NotFound from "./components/NotFound";

// Backend endpoint - set to live for now
window.backendURL = "http://vo.zx-software.com:3040/api/v1"; // Define without trailing '/'

export const AppData = React.createContext();
export const KeyData = React.createContext();

const App = () => {
  const [appD, setAppD] = React.useState({});
  const [keys, setKeys] = React.useState({})
  const keyContextValues = { keys, setKeys}

  // Load saved credentials
  React.useEffect(() => {
    var credentials = {};
    if (localStorage.getItem("credentials")) {
      credentials = JSON.parse(localStorage.getItem("credentials"));
      let tmpAppD = {
        email: credentials.email,
        token: credentials.token,
        isAdmin: credentials.isAdmin,
      };
      setAppD(tmpAppD);
    }
  }, []);

  return (
    <AppData.Provider value={[appD, setAppD]}>
      <KeyData.Provider value={keyContextValues}>
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
      </KeyData.Provider>
    </AppData.Provider>
  );
};

export default App;
