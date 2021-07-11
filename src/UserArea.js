// import React from "react";
import SideMenu from "./components/hod/SideMenu";
import Header from "./components/hod/Header";
import Dashboard from "./pages/hod/Dashboard";
import Division from "./pages/hod/Division";
import { BrowserRouter as Router, Route } from "react-router-dom";

const UserArea = ({ token, setToken }) => {
  return (
    <>
      <Router>
        <SideMenu token={token} onLogout={setToken} />
        <Header />
        <Route path="/" component={Dashboard} />
        <Route path="/division" component={Division} />
      </Router>
    </>
  );
};

export default UserArea;
