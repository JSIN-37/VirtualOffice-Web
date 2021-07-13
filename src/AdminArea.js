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

const AdminArea = ({ token, setToken }) => {
  return (
    //////////////// Start Imashi's routing example ///////////////////
    // <Router>
    //   <Layout>
    //     <Switch>
    //       <Route exact path="/">
    //         <Dashboard />
    //       </Route>
    //       <Route path="/division">
    //         <Division />
    //       </Route>
    //       <Route path="/teams"></Route>
    //     </Switch>
    //   </Layout>
    // </Router>
    //////////////// End Imashi's routing example ///////////////////
    <SetUpEmail />
    //   <ViewTeam/>
    //   <AllTeams/>
    //   <WorkerLogIn/>
    //   <Division/>
    //   < EditUserRoles/>
    //   <ResponsiveDrawer/>
    //    <UserRoles/>
    //   <InviteMembers/>
    //   <SetupOrg/>
    //   <SetUpProfile/>
    //   <MemberDesignation/>
    //   <Members/>
    //   <AddTeam/>
    //   <AddDivision/>
  );
};

export default AdminArea;
