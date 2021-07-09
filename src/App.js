import React from 'react';
import "./App.css";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";


import WorkerLogIn from './WorkerLogIn.js';
import AllTeams from './AllTeams.js';
import Division from './Divisions.js';
import SetupOrg from './setupOrg.js';
import SetUpEmail from './setUpEmail.js';
import ResponsiveDrawer from './ResponsiveDrawer.js';
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
