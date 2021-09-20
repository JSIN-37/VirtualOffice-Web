import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/employee/Dashboard";
import Division from "./components/employee/Division";
import Teams from "./components/employee/Teams";
import Tasks from "./components/employee/Tasks";
import Attendance from "./components/employee/Attendance";
import Profile from "./components/Profile";
import LogOut from "./components/LogOut";
import LogIn from "./components/employee/LogIn";
import React, { useState, useEffect, useRef } from "react";
import { AppData } from "./App";
import axios from 'axios'

//exporting taskDB and setTaskDB using Context - consumed by Dashboard and Tasks components.
export const MyTaskUtils = React.createContext();
const LOCAL_STORAGE_KEY = "vo-material.my-tasks";

const EmployeeArea = () => {
  const [appD] = React.useContext(AppData);
  //FOR TASK MANAGEMENT - COMMON ANCESTOR
  const isFirstRender = useRef(true);
  const [taskDB, setTaskDB] = useState(() => {
    console.log("reading from My Tasks DB");
    const arr = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (arr !== null) {
      return JSON.parse(arr);
    } else {
      return [];
    }
  });
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(taskDB));
    console.log("wrote to taskDB -> My Tasks");
  }, [taskDB]);

  //fetch employees list to pass down to tasks
  const [employees, setEmployees] = useState()
  const config = {headers : { Authorization : ` Bearer ${appD.token}`}}

  if(!employees){
    axios.get(`${window.backendURL}/user/division-users`, config)
  .then((result) => {
    console.log("FETCHED EMPLOYEES", result.data)
    console.log("typod of result.data", typeof(JSON.stringify(result.data)))
    console.log("PARSE attempt", JSON.parse(JSON.stringify(result.data)))
    setEmployees(JSON.parse(JSON.stringify(result.data)))
  })
  .catch((err)=>{console.log("Error fetching employees", err)})
  }
    

  const MyTaskUtilsValues = { taskDB, setTaskDB, employees };
  //End of stuff used for task management
  console.log('Employee Area app.;d', appD)
  if (appD.token && !appD.isAdmin) {
    return (
      <Router basename="/employee">
        <Layout>
          <Route exact path="/">
            <MyTaskUtils.Provider value={MyTaskUtilsValues}>
              <Dashboard />
            </MyTaskUtils.Provider>
          </Route>
          <Route exact path="/division">
            <Division />
          </Route>
          <Route exact path="/teams">
            <Teams />
          </Route>
          <Route exact path="/tasks">
            <MyTaskUtils.Provider value={MyTaskUtilsValues}>
              <Tasks employees={employees} />
            </MyTaskUtils.Provider>
          </Route>
          <Route exact path="/attendance">
            <Attendance />
          </Route>
          <Route exact path="/profile">
            <Profile />
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

export default EmployeeArea;
