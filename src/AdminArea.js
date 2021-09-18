import React from "react";

import Layout from "./components/admin/Layout";
import LogIn from "./components/admin/LogIn";
import LogOut from "./components/LogOut";
import Organization from "./components/admin/Organization";
import Divisions from "./components/admin/Divisions";
import Teams from "./components/admin/Teams";
import UserRoles from "./components/admin/UserRoles";
import Employees from "./components/admin/Employees";
import Settings from "./components/admin/Settings";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { AppData } from "./App";

const AdminArea = () => {
  const [appD] = React.useContext(AppData);
  if (appD.token && appD.isAdmin) {
    return (
      <Router basename="/admin">
        <Layout>
          <Route exact path="/">
            <Organization />
          </Route>
          <Route exact path="/divisions">
            <Divisions />
          </Route>
          <Route exact path="/teams">
            <Teams />
          </Route>
          <Route exact path="/user-roles">
            <UserRoles />
          </Route>
          <Route exact path="/employees">
            <Employees />
          </Route>
          <Route exact path="/settings">
            <Settings />
          </Route>
          <Route exact path="/logout">
            <LogOut />
          </Route>
        </Layout>
      </Router>
    );
  } else {
    return <LogIn />;
  }
};

export default AdminArea;
