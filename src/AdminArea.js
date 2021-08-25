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

const AdminArea = ({ appD, setAppD }) => {
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
            <LogOut appD={appD} setAppD={setAppD} />
          </Route>
        </Layout>
      </Router>
    );
  } else {
    return <LogIn onLogin={setAppD} appD={appD} />;
  }
};

export default AdminArea;

// import WorkerLogIn from "./components/admin/WorkerLogIn.js";
// import AllTeams from "./components/admin/old/AllTeams.js";
// import Division from "./components/admin/old/Divisions.js";
// import SetupOrg from "./components/admin/old/setupOrg.js";
// import SetUpEmail from "./components/admin/setUpEmail.js";
// import ResponsiveDrawer from "./components/admin/old/ResponsiveDrawer.js";
// import UserRoles from "./components/admin/old/UserRoles.js";
// import EditUserRoles from "./components/admin/old/EditUserRoles.js";
// import InviteMembers from "./components/admin/old/InviteMembers.js";
// import SetUpProfile from "./components/admin/SetUpProfile.js";
// import MemberDesignation from "./components/admin/MemberDesignation.js";
// import Members from "./components/admin/old/Members.js";
// import AddDivision from "./components/admin/old/AddDivision.js";
// import AddTeam from "./components/admin/old/AddTeam.js";
// import ViewTeam from "./components/admin/ViewTeam.js";
