import React from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";

import WorkerLogIn from "./components/admin/WorkerLogIn.js";
import AllTeams from "./components/admin/AllTeams.js";
import Division from "./components/admin/Divisions.js";
import SetupOrg from "./components/admin/setupOrg.js";
import SetUpEmail from "./components/admin/setUpEmail.js";
import ResponsiveDrawer from "./components/admin/ResponsiveDrawer.js";
import UserRoles from "./components/admin/UserRoles.js";
import EditUserRoles from "./components/admin/EditUserRoles.js";
import InviteMembers from "./components/admin/InviteMembers.js";
import SetUpProfile from "./components/admin/SetUpProfile.js";
import MemberDesignation from "./components/admin/MemberDesignation.js";
import Members from "./components/admin/Members.js";
import AddDivision from "./components/admin/AddDivision.js";
import AddTeam from "./components/admin/AddTeam.js";
import ViewTeam from "./components/admin/ViewTeam.js";

import { BrowserRouter as Router, Route } from "react-router-dom";

const AdminArea = ({ token, setToken }) => {
  return (
   
    <Router>
      <Route exact path="/">
        <SetUpEmail />
      </Route>

      <Route exact path="/setup-organization">
        <SetupOrg />
      </Route>

      <Route exact path="/user-roles">
        <UserRoles />
      </Route>

      <Route exact path="/add-role">
        <ResponsiveDrawer/>
      </Route>

      <Route exact path="/edit-role">
        <EditUserRoles/>
      </Route>

      <Route exact path="/add-new-division">
        <AddDivision/>
      </Route>

      <Route exact path="/add-new-team">
        <AddTeam/>
      </Route>

      

      



    </Router>


  );
};

export default AdminArea;
