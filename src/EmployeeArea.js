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

const EmployeeArea = ({ appD, setAppD }) => {
    if (appD.token && appD.isAdmin == null) {
        return (
            <Router basename="/employee">
                <Layout>
                    <Route exact path="/">
                        <Dashboard />
                    </Route>
                    <Route exact path="/division">
                        <Division />
                    </Route>
                    <Route exact path="/teams">
                        <Teams />
                    </Route>
                    <Route exact path="/tasks">
                        <Tasks />
                    </Route>
                    <Route exact path="/attendance">
                        <Attendance />
                    </Route>
                    <Route exact path="/profile">
                        <Profile />
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

export default EmployeeArea;
