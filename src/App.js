import React from 'react';
import "./App.css";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";


import WorkerLogIn from './components/admin/WorkerLogIn.js';
// import AllTeams from './components/AllTeams.js';
import Division from './components/admin/Divisions.js';
import SetupOrg from './components/admin/setupOrg.js';
import SetUpEmail from './components/admin/setUpEmail.js';
import ResponsiveDrawer from './components/admin/ResponsiveDrawer.js';
function App() {


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
  //   <ResponsiveDrawer/>
  //   </>
  // );

  
  // return (
  //      <>
  //    <UserRoles/>
  //    </>
  // );



  return (
    <>
    <SetUpEmail/>
    </>
  );


//   return (
//     <>
//     <SetupOrg/>
//     </>
//   );
}

export default App;
