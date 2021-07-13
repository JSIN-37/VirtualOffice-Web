<<<<<<< HEAD
import React from 'react';
import "./App.css";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";



import WorkerLogIn from './components/admin/WorkerLogIn.js';
import AllTeams from './components/admin/AllTeams.js';
import Division from './components/admin/Divisions.js';
import SetupOrg from './components/admin/setupOrg.js';
import SetUpEmail from './components/admin/setUpEmail.js';
import ResponsiveDrawer from './components/admin/ResponsiveDrawer.js';
import UserRoles from './components/admin/UserRoles.js';
import EditUserRoles from './components/admin/EditUserRoles.js';
import InviteMembers from './components/admin/InviteMembers.js';
import SetUpProfile from './components/admin/SetUpProfile.js';
import MemberDesignation from './components/admin/MemberDesignation.js';
import Members from './components/admin/Members.js';
import AddDivision from './components/admin/AddDivision.js';
import AddTeam from './components/admin/AddTeam.js';
import ViewTeam from './components/admin/ViewTeam.js';



 
function App() {

    return (
    <>
    <SetUpEmail/>
    </>
  );

  

  // return (
  //   <>
  //   <ViewTeam/>
  //   </>
  // );

  // return (
  //   <>
  //   <AllTeams/>
  //   </>
  // );

  // return (
  //   <>
  //   <WorkerLogIn/>
  //   </>
  // );


  //  return (
  //   <>
  //   <Division/>
  //   </>
  // );

 

  // return (
  //   <>
  //   < EditUserRoles/>
  //   </>
  // );

  // return (
  //   <>
  //   <ResponsiveDrawer/>
  //   </>
  // );

  
  // return (
  //      <>
  //    <UserRoles/>
  //    </>
  // );


  

  // return (
  //   <>
  //   <InviteMembers/>
  //   </>
  // );


  // return (
  //   <>
  //   <SetupOrg/>
  //   </>
  // );


  // return (
  //   <>
  //   <SetUpProfile/>
  //   </>
  // );


  // return (
  //   <>
  //   <MemberDesignation/>
  //   </>
  // );

  
  // return (
  //   <>
  //   <Members/>
  //   </>
  // );


  
  // return (
  //   <>
  //   <AddTeam/>
  //   </>
  // );

  // return (
  //   <>
  //   <AddDivision/>
  //   </>
  // );
  


}
=======
import React from "react";
// import LogIn from "./pages/LogIn";
// import UserArea from "./UserArea";
import Route from './Routes'

const App = () => {
    return (
        <Route />
    );
    // const [token, setToken] = React.useState("");
    // if (token) {
    //     return <UserArea token={token} setToken={setToken} />;
    // } else {
    //     return <LogIn onLogin={setToken} />;
    // }

};
>>>>>>> adb0df8d45857616f7dd34ab2cb18ff3814c76d1

export default App;
