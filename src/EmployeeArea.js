import Layout from "./components/hod/Layout";
import Dashboard from "./pages/hod/Dashboard";
import Division from "./pages/hod/Division";
import Teams from "./pages/Teams";
import AddTeam from "./pages/AddTeam";
import ViewTeam from "./pages/ViewTeam";
import EditTeam from "./pages/EditTeam";
import Attendance from "./pages/hod/Attendance";
import Attendees from "./pages/hod/Attendees";
import Absentees from "./pages/hod/Absentees";
import AttendanceReports from "./pages/hod/AttendanceReports";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import LogIn from "./pages/LogIn";
import LogOut from "./pages/LogOut";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const EmployeeArea = ({ appD, setAppD }) => {
    if (appD.token && appD.isAdmin == null) {
        return (
            <Router basename="/employee">
                <Layout>
                    <Switch>
                        <Route exact path="/">
                            <Dashboard />
                        </Route>
                        <Route exact path="/division">
                            <Division />
                        </Route>
                        <Route exact path="/teams">
                            <Teams />
                        </Route>
                        <Route exact path="/addteam">
                            <AddTeam />
                        </Route>
                        <Route exact path="/viewteam">
                            <ViewTeam />
                        </Route>
                        <Route exact path="/editteam">
                            <EditTeam />
                        </Route>
                        <Route exact path="/attendance">
                            <Attendance />
                        </Route>
                        <Route exact path="/attendees">
                            <Attendees />
                        </Route>
                        <Route exact path="/absentees">
                            <Absentees />
                        </Route>
                        <Route exact path="/attendancereports">
                            <AttendanceReports />
                        </Route>
                        <Route exact path="/profile">
                            <Profile />
                        </Route>
                        <Route exact path="/settings">
                            <Settings />
                        </Route>
                        <Route exact path="/logout">
                            <LogOut appD={appD} setAppD={setAppD} />
                        </Route>
                    </Switch>
                </Layout>
            </Router>
        );
    } else {
        return <LogIn onLogin={setAppD} appD={appD} />;
    }
};

export default EmployeeArea;
